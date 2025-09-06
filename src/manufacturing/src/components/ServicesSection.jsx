"use client"

const services = [
  {
    title: "Turn‑Key Project Consultancy",
    desc: "End‑to‑end consultation, design, processing, installation & commissioning with consistent quality.",
    bullets: ["Process design & recipes", "Layout & utilities planning", "Training & documentation"],
    color: "bg-sky-50",
  },
  {
    title: "Installation & Commissioning",
    desc: "Skilled fitters guided by experienced engineers for safe, reliable start‑ups.",
    bullets: ["On‑site assembly", "Test runs & validation", "Handover with SOPs"],
    color: "bg-emerald-50",
  },
  {
    title: "Furnace Spares & Parts",
    desc: "Heaters, atmosphere fans, PLCs, HMIs, VFDs, SCADA and panel automation.",
    bullets: ["Rapid sourcing", "OEM‑grade components", "Preventive spares kits"],
    color: "bg-amber-50",
  },
  {
    title: "Refurbishment & Upgrades",
    desc: "Mechanical upgrades, controls modernization, SCADA, and productivity improvements.",
    bullets: ["Retrofit burners/RTs", "SCADA & data logging", "Cycle time optimization"],
    color: "bg-sky-50",
  },
  {
    title: "Heat Treatment Services",
    desc: "Production support with qualified metallurgical practices and traceability.",
    bullets: ["Carburising & Carbonitriding", "Hardening & Tempering", "Annealing, Normalizing, Nitrocarburising"],
    color: "bg-rose-50",
  },
  {
    title: "After‑Sales Support",
    desc: "Priority response with SLAs; remote diagnostics and scheduled maintenance.",
    bullets: ["AMC programs", "Calibration assistance", "24×7 escalation"],
    color: "bg-lime-50",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Services</h2>
          <span className="inline-flex items-center rounded-md bg-amber-500 px-3 py-1 text-sm font-medium text-white">
            Highlighted
          </span>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className={`${s.color} rounded-lg border border-slate-200 p-5 shadow-sm hover:shadow-md transition`}
            >
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.desc}</p>
              {s.bullets && (
                <ul className="mt-3 space-y-1.5 text-sm text-slate-700 list-disc pl-5">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
