"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Factory, Award, Users } from "lucide-react";
import companyImage from "../assets/Company-Image.png";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative pt-8 pb-20 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className="space-y-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="space-y-4">
              <span className="inline-block bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full text-sm animate-bounce">
                ISO 9001:2015 Certified • CQI-9 Compliant
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Advanced Heat Treatment
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  {" "}
                  Solutions
                </span>
              </h1>
              <h2 className="text-2xl">
                Commercial Heat Treaters and Furnace Manufactures
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                A commercial heat treatment shop and full metallurgical testing
                laboratory in Hosur, Tamil Nadu. Established in 2011, we provide
                comprehensive heat treatment services in SQF under one roof.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 flex items-center justify-center" 
              onClick={()=>{scrollToSection('services')}}>
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-slate-600 text-slate-900 hover:bg-slate-800 bg-transparent px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300"
              onClick={()=>{scrollToSection('equipment')}}>
                View Equipment
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group">
                <Factory className="h-8 w-8 text-orange-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-orange-400">52,000</div>
                <div className="text-sm text-slate-400">Sq Ft Facility</div>
              </div>
              <div className="text-center group">
                <Award className="h-8 w-8 text-orange-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-orange-400">13+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center group">
                <Users className="h-8 w-8 text-orange-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-orange-400">57</div>
                <div className="text-sm text-slate-400">Team Members</div>
              </div>
            </div>
          </div>

          <div
            className="relative opacity-0 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-2xl blur-3xl animate-pulse" />
            <img
              src={companyImage}
              alt="Hicarb Engineers Heat Treatment Facility"
              className="relative z-10 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full md:h-130 sm:h-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
