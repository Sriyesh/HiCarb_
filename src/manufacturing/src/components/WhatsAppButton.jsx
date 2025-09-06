"use client"

import { FaWhatsapp } from "react-icons/fa"
export default function WhatsAppButton() {
  return (
    <>
    <a
      href="https://wa.me/916369472483"
      target="_blank"
      rel="noopener noreferrer"
      className="desktop-nav animate-grow-shrink fixed right-10 bottom-10 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 p-4 text-sm font-semibold text-white shadow-lg hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      aria-label="Chat on WhatsApp" 
    >
      <FaWhatsapp className="desktop-nav h-9 w-9" />
      <span className="desktop-nav sr-only">Open WhatsApp chat</span>
    </a>
    <a
      href="https://wa.me/916369472483"
      target="_blank"
      rel="noopener noreferrer"
      className="mobile-nav animate-grow-shrink fixed right-3 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 p-4 text-sm font-semibold text-white shadow-lg hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      aria-label="Chat on WhatsApp" 
    >
      <FaWhatsapp className="mobile-nav h-5 w-5" />
      <span className="mobile-nav sr-only">Open WhatsApp chat</span>
    </a>
    </>
  )
}
