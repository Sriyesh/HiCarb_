"use client"
import { Flame } from "lucide-react"

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-slate-700 bg-slate-900">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Flame className="h-6 w-6 text-orange-500" />
              <span className="text-lg font-bold text-white">Hicarb Engineers</span>
            </div>
            <p className="text-slate-400">
              Leading manufacturer of heat treatment equipment and commercial heat treatment services in Hosur, Tamil
              Nadu since 2011.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left"
                >
                  Carburizing & Hardening
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left"
                >
                  Tempering Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left"
                >
                  Carbonitriding
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left"
                >
                  Stress Relieving
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Equipment</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => scrollToSection("equipment")}
                  className="hover:text-white transition-colors text-left"
                >
                  Sealed Quench Furnaces
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("equipment")}
                  className="hover:text-white transition-colors text-left"
                >
                  Tempering Furnaces
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("equipment")}
                  className="hover:text-white transition-colors text-left"
                >
                  Pre-heating Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("equipment")}
                  className="hover:text-white transition-colors text-left"
                >
                  Washing Machines
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("quality")}
                  className="hover:text-white transition-colors text-left"
                >
                  Quality Certifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-left">Careers</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Hicarb Engineers Pvt. Ltd. All rights reserved. | ISO 9001:2015 Certified
            | CQI-9 Compliant
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
