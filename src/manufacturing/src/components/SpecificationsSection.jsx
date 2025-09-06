"use client"

const features = [
  "Straight‑through design with no moving parts in the heating chamber",
  "Fully automated PLC with thyristor PID temperature control",
  "Carbon potential controller with proportional valve, multi‑point recording",
  "Touchscreen HMI with alarms and interlocks for safety",
  "Electric/Gas‑fired radiant tube options, SCADA & Data Acquisition",
  "Integrated compact layout with washing, tempering & material handling",
]

export default function SpecificationsSection() {
  return (
    <section id="specifications" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Specifications & Controls</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {features.map((f) => (
          <div key={f} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-slate-700">{f}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
