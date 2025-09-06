"use client"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex items-center justify-center">
        <p>© {new Date().getFullYear()} HICARB Engineering Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  )
}
