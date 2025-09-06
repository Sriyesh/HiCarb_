"use client"
import videoSrc from "../../../Home/assets/video.mp4";

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="home" className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://www.vecteezy.com/video/1624798-industrial-welding-in-slow-motion"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {/* gradient overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-slate-900/70"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
        <div className="max-w-2xl text-white">
          {/* badge row */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm backdrop-blur">
              ISO 9001:2015 Certified • CQI‑9 Compliant
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-balance">
            Welcome to {" "}
            <br/>
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
              HICARB ENGINEERING
            </span>
          </h1>

          <p className="mt-4 md:text-lg text-white/90 text-pretty">
            Commercial heat treaters and furnace manufacturers in Hosur, Tamil Nadu. Energy‑efficient equipment and
            turnkey services under one roof.
          </p>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo("services")}
              className="rounded-md bg-gradient-to-r from-orange-500 to-red-600 px-5 py-2.5 text-white font-semibold shadow hover:from-orange-600 hover:to-red-700"
            >
              Our Services →
            </button>
            <button
              onClick={() => scrollTo("products")}
              className="rounded-md border border-white/60 bg-white/10 px-5 py-2.5 text-white hover:bg-white/20"
            >
              View Equipment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
