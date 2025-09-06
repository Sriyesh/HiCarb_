"use client"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} HICARB Engineering Pvt. Ltd. All rights reserved.</p>
        <nav className="flex items-center gap-5">
          <a href="#contact" className="hover:text-amber-400">
            Contact
          </a>
          <a href="#services" className="hover:text-amber-400">
            Services
          </a>
        </nav>
      </div>
    </footer>
  )
}
