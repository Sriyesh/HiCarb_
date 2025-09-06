"use client"
import { useEffect, useRef, useState } from "react"

export default function LazySection({ children, minHeight = 360, rootMargin = "200px 0px" }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { root: null, rootMargin, threshold: 0.01 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [rootMargin])

  return <div ref={ref}>{visible ? children : <div style={{ minHeight }} aria-hidden="true" />}</div>
}
