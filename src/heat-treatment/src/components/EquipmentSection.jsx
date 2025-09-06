"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Settings, Gauge, Thermometer, Zap, Play, Pause, PackageOpen } from "lucide-react"
import SQF1 from "../assets/SQF1.png";
import SQF2 from "../assets/SQF1.png";
import preheating from "../assets/pre-heating.png";
import prewash from "../assets/prewashing.png";
import postwash from "../assets/postwash.png";
import fc1 from "../assets/tempering-fc1.png";
import fc2 from "../assets/tempering-fc2.png";

const EquipmentSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef(null)
  const sectionRef = useRef(null)

  const equipment = [
    {
      id: 1,
      name: "Sealed Quench Furnace - SQF 1",
      category: "Gas Carburizing Systems",
      image: `${SQF1}`,
      capacity: "1000 Kgs/Batch",
      furnaceSize: "W760 x H850 x L1250MM",
      maxTemp: "950°C",
      quenchType: "Cold Oil Quench",
      features: ["Savita SAVSOL QUENCH BI (60-100)","(Oil tank capacity 13000 Liters.)"],
      badge: "SQF1",
      badgeColor: "bg-blue-500",
    },
    {
      id: 2,
      name: "Sealed Quench Furnace - SQF 2",
      category: "Gas Carburizing Systems",
      image: `${SQF2}`,
      capacity: "1000 Kgs/Batch",
      maxTemp: "950°C",
      furnaceSize: "W760 x H850 x L1250MM",
      OilCapacity: "(Oil tank capacity 13000 Liters.)",
      quenchType: "Hot Oil Quench",
      features: ["Hardcastle Highquench MT650 (90-120)","(Oil tank capacity 13000 Liters.)"],
      badge: "SQF2",
      badgeColor: "bg-green-500",
    },
    {
      id: 3,
      name: "Pre-Heating Furnace",
      category: "Auxiliary Systems",
      image: `${preheating}`,
      capacity: "1000 Kgs/Batch",
      furnaceSize: "W760 x H850 x L1250MM",
      maxTemp: "650°C",
      quenchType: "Electrical Heating",
      features: ["Gradual Heating", "Stress Prevention", "5°C/min Ramp"],
      badge: "Pre-Heating Furnace",
      badgeColor: "bg-red-500",
    },
    {
      id: 4,
      name: "Tempering Furnace - TF 1",
      category: "Tempering Systems",
      image: `${fc1}`,
      capacity: "1000 Kgs/Batch",
      furnaceSize: "W760 x H850 x L1250MM",
      maxTemp: "650°C",
      quenchType: "Electrical Heating",
      features: ["Thyristor Control", "±3°C Uniformity", "Energy Efficient"],
      badge: "TF1",
      badgeColor: "bg-purple-500",
    },
    {
      id: 5,
      name: "Tempering Furnace - TF 2",
      category: "Tempering Systems",
      image: `${fc2}`,
      capacity: "1000 Kgs/Batch",
      furnaceSize: "W760 x H850 x L1250MM",
      maxTemp: "650°C",
      quenchType: "Electrical Heating",
      features: ["Quick Turnaround", "Low Maintenance"],
      badge: "TF2",
      badgeColor: "bg-orange-500",
    },
    {
      id: 6,
      name: "Industrial Pre-Washing Machine",
      category: "Cleaning Systems",
      image: `${prewash}`,
      capacity: "1000 Kgs/Batch",
      maxTemp: "60°C",
      quenchType: "DM Water System",
      features: ["6000L Tank", "pH Control", "Automated Cycles"],
      badge: "Pre Wash",
      badgeColor: "bg-yellow-500",
    },
    {
      id: 7,
      name: "Industrial Post-Washing Machine",
      category: "Cleaning Systems",
      image: `${postwash}`,
      capacity: "1000 Kgs/Batch",
      maxTemp: "60°C",
      quenchType: "DM Water System",
      features: ["6000L Tank", "pH Control", "Automated Cycles"],
      badge: "Post Wash",
      badgeColor: "bg-yellow-500",
    }
  ]

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % equipment.length)
      }, 7000) // 7 seconds per slide
    } else {
      clearInterval(intervalRef.current)
    }

    return () => clearInterval(intervalRef.current)
  }, [isAutoPlaying, equipment.length])

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % equipment.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + equipment.length) % equipment.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <section id="equipment" ref={sectionRef} className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Settings className="h-4 w-4" />
            <span>Advanced Manufacturing Equipment</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            State-of-the-Art Heat Treatment Equipment
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our comprehensive range of precision heat treatment equipment with advanced control systems and
            automated monitoring capabilities.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {/* Carousel Container */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {equipment.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0 relative">
                  {/* Equipment Image */}
                  <div className="relative h-96 lg:h-[500px]">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="pl-100 w-full h-full bg-orange-900"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Equipment Details Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          {/* Badge */}
                          <div
                            className={`inline-block ${item.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold mb-4`}
                          >
                            {item.badge}
                          </div>

                          {/* Equipment Name */}
                          <h3 className="text-2xl lg:text-3xl font-bold mb-2">{item.name}</h3>
                          <p className="text-lg text-gray-200 mb-4">{item.category}</p>

                          {/* Key Specifications */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center space-x-2">
                              <Gauge className="h-5 w-5 text-orange-400" />
                              <div>
                                <div className="text-sm text-gray-300">Capacity</div>
                                <div className="font-semibold">{item.capacity}</div>
                              </div>
                            </div>
                            {item.furnaceSize && <div className="flex items-center space-x-2">
                              <PackageOpen className="h-5 w-5 text-red-400" />
                              <div>
                                <div className="text-sm text-gray-300">Furnace Size</div>
                                <div className="font-semibold">{item.furnaceSize}</div>
                              </div>
                            </div>}
                            <div className="flex items-center space-x-2">
                              <Thermometer className="h-5 w-5 text-red-400" />
                              <div>
                                <div className="text-sm text-gray-300">Max Temperature</div>
                                <div className="font-semibold">{item.maxTemp}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Zap className="h-5 w-5 text-yellow-400" />
                              <div>
                                <div className="text-sm text-gray-300">System Type</div>
                                <div className="font-semibold">{item.quenchType}</div>
                              </div>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="flex flex-wrap gap-2">
                            {item.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={toggleAutoPlay}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              {isAutoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {equipment.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-orange-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Equipment Grid Summary */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {equipment.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 ${
                index === currentSlide ? "ring-2 ring-orange-500 shadow-lg" : "hover:shadow-md"
              }`}
            >
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-24 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <div className={`${item.badgeColor} text-white px-2 py-1 rounded text-xs font-semibold mb-1`}>
                  {item.badge}
                </div>
                <div className="text-white text-xs font-medium truncate">{item.name}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Equipment Statistics */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Complete Equipment Portfolio</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our comprehensive equipment lineup ensures we can handle any heat treatment requirement with precision,
              efficiency, and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-slate-600 font-medium">Major Equipment</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gauge className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-2">6000</div>
              <div className="text-slate-600 font-medium">Kgs Total Capacity</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-2">350-1000</div>
              <div className="text-slate-600 font-medium">KVA Power</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-slate-600 font-medium">Operations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EquipmentSection
