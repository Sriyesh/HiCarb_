"use client"

export default function QualitySection() {
  return (
    <section id="quality" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Vision, Mission & Infrastructure</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-sky-50 p-5 border border-slate-200">
            <h3 className="font-semibold text-sky-700">Vision</h3>
            <p className="mt-2 text-slate-700">To be a leading provider of high‑quality heat treatment equipment.</p>
          </div>
          <div className="rounded-lg bg-emerald-50 p-5 border border-slate-200">
            <h3 className="font-semibold text-sky-700">Mission</h3>
            <p className="mt-2 text-slate-700">
              Deliver professional, systematic heat treatment solutions that create measurable customer benefits.
            </p>
          </div>
          <div className="rounded-lg bg-amber-50 p-5 border border-slate-200">
            <h3 className="font-semibold text-sky-700">Infrastructure</h3>
            <p className="mt-2 text-slate-700">
              Full‑fledged manufacturing with design, furnace manufacturing & R&D supporting tailored sealed quench
              furnaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
