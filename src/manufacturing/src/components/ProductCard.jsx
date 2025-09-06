"use client"
import { useState, useId } from "react"

export default function ProductCard({ item }) {
  const details = item.details || {}
  const [open, setOpen] = useState(false)
  const titleId = useId()

  return (
    <>
      <article
        className="h-full group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
        onClick={() => setOpen(true)}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-controls={open ? `${titleId}-dialog` : undefined}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image || "/placeholder.svg?height=480&width=640&query=furnace"}
            alt={item.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-700">
            {details.temperature && (
              <li>
                <span className="font-medium text-slate-900">Temperature:</span> {details.temperature}
              </li>
            )}
            {details.atmosphere && (
              <li>
                <span className="font-medium text-slate-900">Atmosphere:</span> {details.atmosphere}
              </li>
            )}
            {details.features && details.features.length > 0 && (
              <li>
                <span className="font-medium text-slate-900">Features:</span> {details.features.slice(0, 2).join(" • ")}
              </li>
            )}
          </ul>
          <div className="mt-3">
            <span className="inline-block rounded-md bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
              Click for details
            </span>
          </div>
        </div>
      </article>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-0 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          id={`${titleId}-dialog`}
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-3xl rounded-t-2xl sm:rounded-2xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col-2 md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={item.image || "/placeholder.svg?height=600&width=800&query=furnace"}
                  alt={item.name}
                  className="h-56 w-full md:h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="md:w-1/2 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 id={titleId} className="text-xl font-semibold text-slate-900">
                    {item.name}
                  </h3>
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-md bg-slate-100 px-2 py-1 text-slate-700 hover:bg-slate-200"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  {details.temperature && (
                    <p>
                      <span className="font-medium text-slate-900">Temperature:</span> {details.temperature}
                    </p>
                  )}
                  {details.atmosphere && (
                    <p>
                      <span className="font-medium text-slate-900">Atmosphere:</span> {details.atmosphere}
                    </p>
                  )}
                </div>

                {details.features?.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-slate-900">Key Features</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                      {details.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {details.applications?.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-slate-900">Applications</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                      {details.applications.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
