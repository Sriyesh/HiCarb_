"use client"
import { useState } from "react"
import { CAROUSEL_ITEMS } from "../assets/data"

export default function CustomersCarousel() {
  const [index, setIndex] = useState(0)
  const items = CAROUSEL_ITEMS
  if (!items.length) return null
  const current = items[index]
  const next = () => setIndex((i) => (i + 1) % items.length)

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-slate-900">
          Gallery
        </div>
        <h2 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900">Gallery</h2>
        <p className="mt-2 text-slate-700">Click the image to see the next slide with details.</p>
      </div>

      <div className="mt-6 group relative">
        <button
          type="button"
          onClick={next}
          className="relative block w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          aria-label="Next image"
        >
          <img
            src={current.image || "/placeholder.svg?height=720&width=1280&query=industrial%20furnace"}
            alt={current.title}
            className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-x-0 bottom-0 bg-slate-900/70 p-4 text-left">
            <h3 className="text-base font-semibold text-white">{current.title}</h3>
            <p className="mt-1 text-sm text-slate-200">{current.description}</p>
          </div>
        </button>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-xs text-slate-600">
            {index + 1} / {items.length}
          </p>
          <div className="flex items-center gap-1.5">
            {items.map((_, i) => (
              <span
                key={i}
                aria-hidden
                className={`h-1.5 w-4 rounded-full ${i === index ? "bg-sky-700" : "bg-slate-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
