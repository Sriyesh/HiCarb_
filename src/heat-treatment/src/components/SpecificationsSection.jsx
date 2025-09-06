"use client"

import { useEffect, useRef } from "react"
import { Cpu, Database, Gauge, Zap } from "lucide-react"

const SpecificationsSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".spec-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up")
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

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-purple-50 to-purple-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-500/20 text-emerald-400 border border-purple-500/30 px-3 py-1 rounded-full text-sm mb-4">
            Technical Specifications
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">HICARB System Details</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Our equipment features state-of-the-art control systems with SCADA integration, data logging, and automated
            monitoring for consistent results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="spec-card opacity-0 bg-gradient-to-b from-slate-900/50 to-slate-600 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-6">
            <Gauge className="h-12 w-12 text-emerald-400 mb-4" />
            <h3 className="text-white font-semibold text-lg mb-4">Temperature & Sensors</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-300">Control Type:</span>
                <span className="text-emerald-400 font-semibold">Thyristor</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Working Range-Max Temprature:</span>
                <span className="text-emerald-400 font-semibold">950°C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Temp Variation:</span>
                <span className="text-emerald-400 font-semibold">±5°C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Oxy Probe:</span>
                <span className="text-emerald-400 font-semibold">SSI Gold Probe</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Thermocouples:</span>
                <span className="text-emerald-400 font-semibold">Tempesens</span>
              </div>
            </div>
          </div>

          <div className="spec-card opacity-0 bg-gradient-to-b from-slate-900/50 to-slate-600 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-6">
            <Cpu className="h-12 w-12 text-emerald-400 mb-4" />
            <h3 className="text-white font-semibold text-lg mb-4">Carbon Potential</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-300">Accuracy:</span>
                <span className="text-emerald-400 font-semibold">±0.05%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Controller:</span>
                <span className="text-emerald-400 font-semibold">Stange</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Oxy Probe:</span>
                <span className="text-emerald-400 font-semibold">SSI Gold</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Gas Analyzer:</span>
                <span className="text-emerald-400 font-semibold">3-Gas SSI</span>
              </div>
            </div>
          </div>

          <div className="spec-card opacity-0 bg-gradient-to-b from-slate-900/50 to-slate-600 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-6">
            <Gauge className="h-12 w-12 text-emerald-400 mb-4" />
            <h3 className="text-white font-semibold text-lg mb-4">Furnace System</h3>
            <div className="space-y-2">
              <div className="flex space-x-10">
                <span className="text-slate-300">Atmosphere: </span>
                <span className="text-emerald-400 font-semibold">LPG & Methanol, N₂ Gas for safety,NH₃ for carbo-nitriding</span>
              </div>
              <div className="flex space-x-9">
                <span className="text-slate-300 text-nowrap">Heating Type:</span>
                <span className="text-emerald-400 font-semibold">Electrically heating with radiant tubes</span>
              </div>
              <div className="flex space-x-10">
                <span className="text-slate-300 text-nowrap">Gas Flow:</span>
                <span className="text-emerald-400 font-semibold pl-6">Auto Motorized valve cut off system for LPG, Nitrogen, ammonia and air.</span>
              </div>
            </div>
          </div>

          <div className="spec-card opacity-0 bg-gradient-to-b from-slate-900/50 to-slate-600 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-6">
            <Database className="h-12 w-12 text-emerald-400 mb-4" />
            <h3 className="text-white font-semibold text-lg mb-4">Data Logging & SCADA</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-300">SCADA:</span>
                <span className="text-emerald-400 font-semibold">Integrated</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Data Logging:</span>
                <span className="text-emerald-400 font-semibold">Continuous</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">ERP:</span>
                <span className="text-emerald-400 font-semibold">Met Software</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Traceability:</span>
                <span className="text-emerald-400 font-semibold">Complete</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300 text-wrap">Logged Parameters:</span>
                <span className="text-emerald-400 font-semibold text-pretty pl-16">Process Temp, Time, Carbon Potential, Oil Temp, Agitation Speed, All Gas Flows</span>
              </div>
            </div>
          </div>

          <div className="spec-card opacity-0 bg-gradient-to-b from-slate-900/50 to-slate-600 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-6">
            <Gauge className="h-12 w-12 text-emerald-400 mb-4" />
            <h3 className="text-white font-semibold text-lg mb-4">Calibration & Maintenance</h3>
            <div className="space-y-2">
              <div className="flex justify-between space-x-12">
                <span className="text-slate-300 text-nowrap">3 Gas Analyzer:</span>
                <span className="text-emerald-400 font-semibold pl-9">It is used to verify the CP%</span>
              </div>
              <div className="flex justify-between space-x-12">
                <span className="text-slate-300 text-pretty">Temp. uniformity survey(TUS) Frequency:</span>
                <span className="text-emerald-400 font-semibold text-nowrap">Yearly once</span>
              </div>
              <div className="flex space-x-12">
                <span className="text-slate-300 text-pretty">System accuracy test (SAT)freq.:</span>
                <span className="text-emerald-400 font-semibold text-nowrap">Monthly once</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300 text-pretty">Furnace burnout frequency/De sooting:</span>
                <span className="text-emerald-400 font-semibold text-nowrap">15 days once</span>
              </div>
            </div>
          </div>

          <div className="spec-card opacity-0 bg-gradient-to-b from-slate-900/50 to-slate-600 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-6">
            <Zap className="h-12 w-12 text-emerald-400 mb-4" />
            <h3 className="text-white font-semibold text-lg mb-4">Quench Systems</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-300">Oil Capacity:</span>
                <span className="text-emerald-400 font-semibold">13,000L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Pump Power:</span>
                <span className="text-emerald-400 font-semibold">7.5HP × 2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Agitation:</span>
                <span className="text-emerald-400 font-semibold">350-750 RPM(Step Agitation)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Cooling:</span>
                <span className="text-emerald-400 font-semibold">Oil Cooled Heat Exchanger</span>
              </div>
            </div>
          </div>

          <div className="spec-card opacity-0 bg-gradient-to-b from-slate-900/50 to-slate-600 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-6">
            <Gauge className="h-12 w-12 text-emerald-400 mb-4" />
            <h3 className="text-white font-semibold text-lg mb-4">Audit & Backup Systems</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-300">CQI-9 Self Assessment Plan:</span>
                <span className="text-emerald-400 font-semibold">Once in a Year</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300 text-pretty">Process Re-Validation Plans:</span>
                <span className="text-emerald-400 font-semibold">Once in a Year</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Generator Details:</span>
                <span className="text-emerald-400 font-semibold pr-8">Cummins</span>
              </div>
            </div>
          </div>

        </div>

        <div className="spec-card opacity-0">
          <div className="bg-gradient-to-r bg-gradient-to-b from-slate-400 to-slate-600 border border-slate-500/30 rounded-lg p-8">
            <h3 className="text-white text-2xl text-center font-semibold mb-6">Atmosphere Control Systems</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-slate-900/30 rounded-lg">
                <div className="text-xl font-bold text-emerald-400 mb-2">LPG & Methanol</div>
                <div className="text-slate-300 text-sm">Furnace Atmosphere</div>
              </div>
              <div className="text-center p-4 bg-slate-900/30 rounded-lg">
                <div className="text-xl font-bold text-emerald-400 mb-2">N₂ Gas</div>
                <div className="text-slate-300 text-sm">Safety Purging</div>
              </div>
              <div className="text-center p-4 bg-slate-900/30 rounded-lg">
                <div className="text-xl font-bold text-emerald-400 mb-2">NH₃</div>
                <div className="text-slate-300 text-sm">Carbonitriding</div>
              </div>
              <div className="text-center p-4 bg-slate-900/30 rounded-lg">
                <div className="text-xl font-bold text-emerald-400 mb-2">Auto Valves</div>
                <div className="text-slate-300 text-sm">Gas Flow Control</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecificationsSection
