"use client"; //required for Next.js client component

import { useState, useEffect } from "react";
import { Flame, Menu, X, Phone, Mail, MapPin, Search } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-slate-800 border-b border-slate-700 py-2 text-sm">
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
              <span className="desktop-nav sm:inline">Find our location</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <a
          href="/"
          className="hover:opacity-80 transition-opacity absolute flex items-center space-x-2 flex-shrink-0 pl-4"
        >
          <img src={logo} alt="Hicarb Logo" className="h-20 w-auto" />
          <span className="font-bold text-lg text-slate-900">
            HICARB <br />
            ENGINEERING
          </span>
        </a>
        <div className="container mx-auto px-4 lg:px-6 relative">
          {/* Navigation */}
          <div className="h-20 flex items-center justify-between relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <nav className="desktop-nav md:flex items-center space-x-12 z-10">
                {[
                  { name: "Heat Treatment Services", id: "services" },
                  { name: "Equipment", id: "equipment" },
                  { name: "Quality & Testing", id: "quality" },
                  { name: "About Hicarb", id: "about" },
                  { name: "Contact", id: "contact" },
                ].map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-700 hover:text-orange-500 font-medium transition-all duration-300 hover:scale-105 relative group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </nav>
            </div>
            <button
              className="md:hidden absolute right-0 text-slate-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white border-t border-slate-200`}
        >
          <nav className="px-4 py-4 space-y-4">
            {[
              { name: "Heat Treatment Services", id: "services" },
              { name: "Equipment", id: "equipment" },
              { name: "Quality & Testing", id: "quality" },
              { name: "About Hicarb", id: "about" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-slate-700 hover:text-orange-500 font-medium transition-colors py-2"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
