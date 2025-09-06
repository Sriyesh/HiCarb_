"use client"

import { useEffect, useRef } from "react"
import { Flame, Thermometer, Zap, Shield, Wrench, TestTube } from "lucide-react"

const ServicesSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up")
              }, index * 150)
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

  const services = [
    {
      icon: Flame,
      title: "Carburizing Hardening & Tempering",
      description: "Advanced carburizing processes for enhanced surface hardness and wear resistance",
      materials: ["S45C", "20MnCr5", "16MnCr5", "SAE8620"],
    },
    {
      icon: Thermometer,
      title: "Hardening & Tempering",
      description: "Precise hardening and tempering for optimal mechanical properties",
      materials: ["EN 24", "EN 19", "42CrMo4", "SCM435"],
    },
    {
      icon: Zap,
      title: "Carbonitriding",
      description: "Carbonitriding processes for improved surface properties and fatigue resistance",
      materials: ["SAE1541", "En8D", "SAE1018", "SAE15B25"],
    },
    {
      icon: Shield,
      title: "Stress Relieving",
      description: "Stress relief treatments to reduce internal stresses and improve stability",
      materials: ["EN 9", "Various Steel Grades"],
    },
    {
      icon: Wrench,
      title: "Normalizing",
      description: "Normalizing treatments for grain refinement and improved machinability",
      materials: ["Carbon & Alloy Steels"],
    },
    {
      icon: TestTube,
      title: "Isothermal Annealing",
      description: "Controlled cooling processes for uniform microstructure and properties",
      materials: ["Tool & Die Steels"],
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full text-sm mb-4">
            Heat Treatment Processes
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-600">Comprehensive Heat Treatment Services</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We provide a complete range of heat treatment processes with state-of-the-art equipment and precise
            temperature control systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card opacity-0 bg-slate-900/50 border border-slate-700 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 group rounded-lg p-6"
            >
              <service.icon className="h-12 w-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white group-hover:text-orange-400 transition-colors duration-300 font-semibold text-lg mb-3">
                {service.title}
              </h3>
              <p className="text-slate-300 mb-4">{service.description}</p>
              <div>
                <div className="text-sm font-semibold text-orange-400 mb-2">Material Grades:</div>
                <div className="flex flex-wrap gap-1">
                  {service.materials.map((material) => (
                    <span
                      key={material}
                      className="text-xs border border-slate-600 text-slate-900 hover:border-orange-500/50 hover:text-orange-400 transition-colors duration-300 px-2 py-1 rounded"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 max-w-4xl mx-auto rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-400 mb-4">Temperature Range & Precision</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">950°C</div>
                <div className="text-slate-500">Maximum Working Temperature</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">±5°C</div>
                <div className="text-slate-500">Temperature Variation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">±0.05%</div>
                <div className="text-slate-500">Carbon Potential Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
