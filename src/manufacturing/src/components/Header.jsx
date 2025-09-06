"use client"
import logo from "../assets/logo.png";
import { Flame, Menu, X, Phone, Mail, MapPin, Search } from "lucide-react";

export default function Header() {
  const items = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Gallery", href: "#gallery" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
      <div className="desktop-nav bg-slate-800 border-b border-slate-700 py-2 text-sm">
        <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-100 text-slate-300">
            <a
              href="tel:+919899997386"
              className="flex items-center space-x-2 hover:underline"
            >
              <Phone className="h-4 w-4" />
              <span>call us at +91 98999 97386</span>
            </a>
            <a
              href="mailto:Info@hicarbe.com?subject=Inquiry&body=Hello%20Hicarb%20Team,"
              className="hover:underline desktop-nav md:flex items-center space-x-2 relative"
            >
              <Mail className="h-4 w-4" />
              <span>Info@hicarbe.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://maps.google.com/?q=HICARB ENGINEERING PVT. LTD. Hosur Tamil Nadu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-slate-300 hover:underline"
            >
              <MapPin className="h-4 w-4" />
              <span className="desktop-nav sm:inline">Hosur, Krishnagiri District, Tamil Nadu</span>
            </a>
          </div>
        </div>
      </div>
      {/* main nav */}
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="" className="h-9 w-9 rounded-sm object-cover" />
          <span className="text-2xl md:text-3xl font-extrabold text-slate-900">HiCarb Engineering</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-slate-700">
          {items.map((it) => (
            <li key={it.href}>
              <a className="hover:text-sky-700 font-medium text-sm" href={it.href}>
                {it.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-md bg-amber-500 px-4 py-2 text-white text-sm font-semibold hover:bg-amber-600"
            >
              Enquire
            </a>
          </li>
        </ul>
        <a href="#contact" className="md:hidden rounded-md bg-amber-500 px-3 py-2 text-white text-sm">
          Enquire
        </a>
      </nav>
    </header>
  )
}
