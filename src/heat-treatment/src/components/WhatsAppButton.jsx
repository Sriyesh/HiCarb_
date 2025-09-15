"use client"

import { FaWhatsapp } from "react-icons/fa"
export default function WhatsAppButton() {
  return (
    <>
    <a
      href="https://wa.me/916369472483?text=Hello%20HICARB%20Engineering%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="desktop-nav fixed right-10 bottom-10 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 p-4 text-sm font-semibold text-white shadow-lg hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      aria-label="Chat on WhatsApp" 
    >
      <FaWhatsapp className="desktop-nav h-9 w-9" />
      <span className="desktop-nav sr-only">Open WhatsApp chat</span>
    </a>
    <a
      href="https://wa.me/916369472483?text=Hello%20HICARB%20Engineering%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="mobile-nav fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 p-4 text-sm font-semibold text-white shadow-lg hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      aria-label="Chat on WhatsApp" 
    >
      <FaWhatsapp className="mobile-nav h-5 w-5" />
      <span className="mobile-nav sr-only">Open WhatsApp chat</span>
    </a>
    </>
  )
}
