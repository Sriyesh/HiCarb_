"use client"

import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import videoSrc from "./assets/video.mp4" // adjust if your path differs
import "../index.css"
import "./home.css"
import WhatsAppButton from "./components/WhatsAppButton"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

/* ---------- useInView hook (IntersectionObserver) ---------- */
function useInView(rootMargin = "0px", threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target) // reveal once
          }
        })
      },
      { root: null, rootMargin, threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [ref, rootMargin, threshold])

  return [ref, inView]
}

/* ---------- RevealSection component ---------- */
function RevealSection({ title, subtitle, children, className = "" }) {
  const [ref, inView] = useInView("0px", 0.12)

  return (
    <section
      ref={ref}
      className={`max-w-5xl mx-auto my-12 sm:my-16 md:my-20 px-4 sm:px-6 md:px-8 transition-all duration-700 ease-out transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      aria-labelledby={title ? title.replace(/\s+/g, "-").toLowerCase() : undefined}
    >
      {title && (
        <h2
          id={title.replace(/\s+/g, "-").toLowerCase()}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 text-center sm:text-left"
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-white/80 mb-4 sm:mb-6 text-center sm:text-left text-sm sm:text-base">{subtitle}</p>
      )}
      <div className="text-white/90">{children}</div>
    </section>
  )
}

/* ---------- ScrollProgressDot ---------- */
function ScrollProgressDot() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? Math.min(1, scrolled / docHeight) : 0
      setProgress(pct)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div className="w-1 sm:w-1.5 h-32 sm:h-40 bg-white/10 rounded-full relative overflow-hidden">
        <div
          style={{ height: `${Math.max(6, progress * 100)}%` }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-400 to-red-500 rounded-full transition-[height] duration-200"
        />
      </div>
    </div>
  )
}

/* ---------- Parallax Hook (applies transforms to layers) ---------- */
function useParallax(containerRef, layerRefs, speeds = []) {
  useEffect(() => {
    if (!containerRef.current) return

    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return // disable effect for reduced motion

    let running = false
    let lastScroll = window.scrollY

    const onFrame = () => {
      const scrollY = lastScroll
      // compute container top to make movement relative to container
      const rect = containerRef.current.getBoundingClientRect()
      const containerTop = rect.top + window.scrollY

      // offset relative to container
      const offset = scrollY - containerTop

      layerRefs.forEach((lr, i) => {
        const el = lr.current
        if (!el) return
        const speed = speeds[i] ?? 0.06 // fallback
        const translateY = offset * speed
        el.style.transform = `translate3d(0, ${translateY}px, 0)`
      })

      running = false
    }

    const onScroll = () => {
      lastScroll = window.scrollY
      if (!running) {
        running = true
        window.requestAnimationFrame(onFrame)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    // call once to position
    onFrame()

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [containerRef, layerRefs, speeds])
}

/* ---------- Main App ---------- */
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  // refs for parallax layers
  const containerRef = useRef(null)
  const layerBgRef = useRef(null) // slow
  const layerMidRef = useRef(null) // medium
  const layerFrontRef = useRef(null) // faster

  // attach parallax with chosen speeds (tweak numbers to taste)
  useParallax(containerRef, [layerBgRef, layerMidRef, layerFrontRef], [0.02, 0.05, 0.12])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-gray-900">
      {/* Parallax container (wraps hero) */}
      <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden">
        {/* base video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="/industrial-manufacturing-background.jpg"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-900/80 z-30" />

        {/* Hero content (on top of layers) */}
        <div className="relative z-40 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto z-40">
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isLoaded ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
              }`}
            >
              <h1
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight drop-shadow-2xl"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
              >
                Welcome to
                <span
                  className="block text-orange-400 font-bold animate-gradient-x drop-shadow-lg mt-2 sm:mt-0"
                  style={{
                    background: "linear-gradient(45deg, #f97316, #ea580c, #dc2626)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "none",
                  }}
                >
                  HICARB ENGINEERING
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
                Choose Your Solution: Manufacturing or Heat Treatment — Powered by HICARB Engineering
              </p>
            </div>

            <div
              className={`flex flex-col-2 sm:flex-row-2 gap-4 sm:gap-6 justify-center items-center mt-6 sm:mt-8 transform transition-all duration-1000 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Link to="/hicarbManufacturing" className="no-underline w-full sm:w-auto">
                <button className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-500 hover:scale-105 w-full sm:min-w-[240px] touch-manipulation">
                  Manufacturing Solutions
                </button>
              </Link>

              <Link to="/heatTreatment" className="no-underline w-full sm:w-auto">
                <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-500 hover:scale-105 w-full sm:min-w-[240px] touch-manipulation">
                  Heat Treatment Solutions
                </button>
              </Link>
            </div>
          </div>

          <div
            className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex flex-col items-center text-white/80">
              <span className="text-xs sm:text-sm mb-2 font-medium">Explore</span>
              <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/40 rounded-full flex justify-center">
                <div className="w-1 h-2 sm:h-3 bg-gradient-to-b from-orange-500 to-red-600 rounded-full mt-1 sm:mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress and below-the-fold content */}
      <ScrollProgressDot />

      <div className="relative z-40 bg-transparent pt-8 sm:pt-10 pb-2">
        <RevealSection
          title="Our Capabilities"
          subtitle="Engineering, manufacturing, and heat-treatment services designed for precision."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-4 sm:p-6 bg-white/6 rounded-lg border border-white/6">
              <h3 className="font-semibold text-base sm:text-lg mb-2">Turnkey Manufacturing</h3>
              <p className="text-white/80 text-sm">
                From product design to production — robust processes & quality control.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-white/6 rounded-lg border border-white/6">
              <h3 className="font-semibold text-base sm:text-lg mb-2">Heat Treatment</h3>
              <p className="text-white/80 text-sm">
                Specialized furnaces, precise temperature control and testing services.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-white/6 rounded-lg border border-white/6 sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-base sm:text-lg mb-2">R&D & Testing</h3>
              <p className="text-white/80 text-sm">Material testing, process optimization and product validation.</p>
            </div>
          </div>
        </RevealSection>

        <RevealSection title="Why Choose Us" subtitle="Decades of industry experience + modern engineering practices.">
          <ul className="list-disc pl-5 space-y-2 text-white/80 text-sm sm:text-base">
            <li>Certified processes & quality assurance.</li>
            <li>End-to-end service from prototyping to production.</li>
            <li>Continuous improvement & customer-focused approach.</li>
          </ul>
        </RevealSection>

        <RevealSection>
          <ContactSection />
        </RevealSection>
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  )
}
