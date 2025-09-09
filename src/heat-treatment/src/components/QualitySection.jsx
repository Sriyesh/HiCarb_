"use client"

import { useEffect, useRef } from "react"
import { Award, Microscope, TestTube, CheckCircle } from "lucide-react"
import cert3 from "../assets/cert3.jpg"
import images from "../assets/images.png"
import international from "../assets/international-accreditation-forum.png"

const QualitySection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".quality-item")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const labEquipment = [
    { name: "Metallurgical Microscope", model: "OLYMPUS GX41", quantity: "1 No."},
    { name: "Rockwell Hardness Tester", model: "FIE (SAROJ)", quantity: "2 No." },
    { name: "Micro Hardness Tester", model: "TRUEMET HT1000AT", quantity: "1 No." },
    { name: "Hot Mounting Press", model: "TRUEMET", quantity: "1 No." },
    { name: "Lapping Machine", model: "SAASTHA", quantity: "1 No." },
    { name: "Portable Brinnell Tester", model: "TRUEMET", quantity: "1 No." },
    { name: "3 Gas Analyser", model: "SSI", quantity: "1 No." },
    { name: "Electronic Weighing Scale", model: "Digital", quantity: "2 No." },
  ]

  return (
    <section id="quality" ref={sectionRef} className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-sm mb-4">
            Quality Assurance
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Metallurgical Laboratory & Testing</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our modern testing laboratory is equipped with the latest testing equipment for
            comprehensive metallurgical analysis.
          </p>
        </div>

        {/* Certifications */}
        <div className="quality-item opacity-0 grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 hover:scale-105 transition-transform duration-300 rounded-lg p-6">
            <Award className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-white text-xl font-semibold mb-4">ISO 9001:2015 Certified</h3>
            <p className="text-slate-300 mb-4">
              Certified by TUV Austria, ensuring international quality management standards in all our processes and
              services.
            </p>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-slate-300">Quality Management System</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 hover:scale-105 transition-transform duration-300 rounded-lg p-6">
            <TestTube className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-white text-xl font-semibold mb-4">CQI-9 Compliant</h3>
            <p className="text-slate-300 mb-4">
              Our Sealed Quench Furnace setup meets CQI-9 standards, the international standard for heat treatment
              processes.
            </p>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-400" />
              <span className="text-slate-300">International Heat Treatment Standard</span>
            </div>
          </div>
        </div>

        {/* Laboratory Equipment */}
        <div className="quality-item opacity-0 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Laboratory Equipment</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {labEquipment.map((equipment, index) => (
              <div
                key={equipment.name}
                className="bg-slate-900/50 border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-4"
                style={{ animationDelay: `${index * 100}ms`,
                          backgroundImage: `url(${equipment.image})`,}}
              >
                <div className="text-center">
                  <Microscope className="h-8 w-8 text-green-400 mx-auto mb-3" />
                  <div className="font-semibold text-white text-sm mb-2">{equipment.name}</div>
                  <div className="text-slate-400 text-xs mb-1">{equipment.model}</div>
                  <span className="text-xs border border-green-500/30 text-green-400 px-2 py-1 rounded">
                    {equipment.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testing Capabilities */}
        <div className="quality-item opacity-0 grid lg:grid-cols-2 gap-12 items-center">
  <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      {/* First two images */}
      <img
        src={cert3}
        alt="certification logo"
        className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full h-48 object-contain bg-white p-2"
      />
      <img
        src={images}
        alt="certification logo"
        className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full h-48 object-contain bg-white p-2"
      />

      {/* Third image centered */}
      <img
        src={international}
        alt="certification logo"
        className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full h-48 object-contain bg-white p-2 col-span-1 sm:col-span-2 mx-auto"
      />
    </div>
  </div>  
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Comprehensive Testing Services</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Our in-house laboratory provides complete metallurgical analysis and quality control testing to ensure
                optimal heat treatment results.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Rockwell & Micro Vickers Hardness Testing",
                "Metallographic Sample Preparation",
                "Microstructure Analysis",
                "Carbon Potential Verification",
                "Temperature Uniformity Surveys",
              ].map((capability) => (
                <div
                  key={capability}
                  className="flex items-center space-x-3 p-3 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colors duration-300"
                >
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">{capability}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-lg border border-green-500/20">
              <h4 className="font-semibold text-white mb-3">Quality Control Schedule</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">TUS Frequency:</span>
                  <span className="text-green-400">Yearly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">SAT Frequency:</span>
                  <span className="text-green-400">Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Furnace Burnout:</span>
                  <span className="text-green-400">15 Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">CQI-9 Assessment:</span>
                  <span className="text-green-400">Yearly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QualitySection
