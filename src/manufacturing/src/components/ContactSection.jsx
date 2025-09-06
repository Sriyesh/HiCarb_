"use client"

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 p-5">
          <h3 className="font-semibold text-sky-700">Address</h3>
          <p className="mt-2 text-white">
            Survey No.29/3B1A, Hanumepalli Agraharam Village, Begapalli Road, Krishnagiri District, Hosur - 635 126,
            Tamil Nadu
          </p>
          <a
            href="https://maps.google.com/?q=HICARB+ENGINEERING+Hosur"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-medium text-sky-700 hover:underline"
          >
            View on Maps
          </a>
        </div>
        <div className="rounded-lg border border-slate-200 p-5">
          <h3 className="font-semibold text-sky-700">Email</h3>
          <a href="mailto:hicarbengineeringhosur@gmail.com" className="mt-2 block text-white hover:text-sky-700">
            hicarbengineeringhosur@gmail.com
          </a>
        </div>
        <div className="rounded-lg border border-slate-200 p-5">
          <h3 className="font-semibold text-sky-700">Call</h3>
          <ul className="mt-2 space-y-1 text-white">
            <li>
              <a href="tel:+919899997386" className="hover:text-sky-700">
                +91 98999 97386 (Sebastain Stanly)
              </a>
            </li>
            <li>
              <a href="tel:+919884222689" className="hover:text-sky-700">
                +91 98842 22689 (Sajith Kumar PN)
              </a>
            </li>
            <li>
              <a href="tel:+919495276500" className="hover:text-sky-700">
                +91 94952 76500 (Saji Sisupalan)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
