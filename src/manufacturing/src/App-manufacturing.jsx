"use client"
import { Suspense, lazy } from "react"
import { useState, useEffect, useRef } from "react"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Footer from "./components/Footer"
import LazySection from "./components/LazySection"
import WhatsAppButton from "./components/WhatsAppButton"
import "./index-manufacturing.css"


// Color palette (5 total):
// - Primary: sky-700
// - Accent: amber-500
// - Neutrals: white, slate-900, slate-700

function useInView(options = { root: null, rootMargin: "200px 0px", threshold: 0.01 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        obs.disconnect()
      }
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [options])
  return [ref, inView]
}

function LazyMount({ children, placeholderHeight = 320 }) {
  const [ref, inView] = useInView()
  return <div ref={ref}>{inView ? children : <div style={{ minHeight: placeholderHeight }} aria-hidden="true" />}</div>
}

const AboutSection = lazy(() => import("./components/AboutSection"))
const EquipmentSection = lazy(() => import("./components/EquipmentSection"))
const CustomersCarousel = lazy(() => import("./components/CustomersCarousel"))
const ServicesSection = lazy(() => import("./components/ServicesSection"))
const SpecificationsSection = lazy(() => import("./components/SpecificationsSection"))
const QualitySection = lazy(() => import("./components/QualitySection"))
const ContactSection = lazy(() => import("./components/ContactSection"))

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      <HeroSection />

      <div className="section-bg-secondary">
      <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-16" />}>
        <LazySection minHeight={320}>
          <AboutSection />
        </LazySection>
      </Suspense>
      </div>

      <div className="bg-gradient-to-r from-slate-100 to-blue-50">
      <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-16" />}>
        <LazySection minHeight={360}>
          <QualitySection />
        </LazySection>
      </Suspense>
      </div>

      <div className="bg-gradient-to-r from-slate-100 to-blue-50">
      <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-16" />}>
        <LazySection minHeight={480}>
          <EquipmentSection />
        </LazySection>
      </Suspense>
      </div>

       <div className="section-bg-secondary">
      <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-16" />}>
        <LazySection minHeight={420}>
          <CustomersCarousel />
        </LazySection>
      </Suspense>
      </div>

      <div className="section-bg-accent text-white">
      <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-16" />}>
        <LazySection minHeight={360}>
          <ServicesSection />
        </LazySection>
      </Suspense>
      </div>

      <div className="bg-gradient-to-r from-slate-50 to-blue-50">
      <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-16" />}>
        <LazySection minHeight={360}>
          <SpecificationsSection />
        </LazySection>
      </Suspense>
      </div>

      <div className="section-bg-primary text-white">
      <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-16" />}>
        <LazySection minHeight={360}>
          <ContactSection/>
        </LazySection>
      </Suspense>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
