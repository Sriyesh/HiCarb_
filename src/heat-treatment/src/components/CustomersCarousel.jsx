"use client"

import { useEffect, useRef } from "react"
import { Building2, Star, Award, Flame } from "lucide-react"

const CustomersCarousel = () => {
  const scrollRef = useRef(null)

  const customers = [
    { name: "AS Engineering", industry: "Automotive", partnership: "5+ Years" },
    { name: "BMR Tracks", industry: "Heavy Machinery", partnership: "3+ Years" },
    { name: "BM Engineering", industry: "Manufacturing", partnership: "4+ Years" },
    { name: "CIE Automotive India Limited", industry: "Automotive", partnership: "6+ Years" },
    { name: "Cassy Forge", industry: "Forging", partnership: "2+ Years" },
    { name: "Elite Industries", industry: "Industrial", partnership: "4+ Years" },
    { name: "Flam Industries", industry: "Manufacturing", partnership: "3+ Years" },
    { name: "JM Frictech", industry: "Friction Materials", partnership: "5+ Years" },
    { name: "Neotric Equicarb Techniques", industry: "Heat Treatment", partnership: "7+ Years" },
    { name: "Padmasri Industries", industry: "Industrial", partnership: "3+ Years" },
    { name: "Sricharan Industries", industry: "Manufacturing", partnership: "4+ Years" },
    { name: "Systherm Engineering Pvt. Ltd", industry: "Engineering", partnership: "5+ Years" },
    { name: "Stumpp Schuele Somappa Pvt.", industry: "Automotive", partnership: "6+ Years" },
    { name: "S.T.V Industries", industry: "Industrial", partnership: "2+ Years" },
  ]

  // Duplicate customers for seamless loop
  const duplicatedCustomers = [...customers, ...customers]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollSpeed = 0.5 // Slower, more professional speed

    const scroll = () => {
      scrollAmount += scrollSpeed
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0
      }
      scrollContainer.scrollLeft = scrollAmount
    }

    const intervalId = setInterval(scroll, 30)

    // Pause on hover
    const handleMouseEnter = () => clearInterval(intervalId)
    const handleMouseLeave = () => {
      const newIntervalId = setInterval(scroll, 30)
      return newIntervalId
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", () => {
      clearInterval(intervalId)
      const newIntervalId = setInterval(scroll, 30)
    })

    return () => {
      clearInterval(intervalId)
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            <span>Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Our Valued Partners</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We are proud to serve leading companies across various industries with our premium heat treatment services
            and unwavering commitment to quality.
          </p>
        </div>

        <div className="relative overflow-hidden bg-slate-50 rounded-2xl py-8">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-hidden whitespace-nowrap px-8"
            style={{ scrollBehavior: "auto" }}
          >
            {duplicatedCustomers.map((customer, index) => (
              <div
                key={`${customer.name}-${index}`}
                className="flex-shrink-0 bg-white border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-xl p-6 min-w-[320px] group cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-lg group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                    <Building2 className="h-8 w-8 text-orange-600 group-hover:text-orange-700 transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-slate-800 font-bold text-lg group-hover:text-orange-600 transition-colors duration-300 mb-1">
                      {customer.name}
                    </h3>
                    <p className="text-slate-500 text-sm mb-2">{customer.industry} Industry</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      </div>
                      <span className="text-slate-400 text-xs">•</span>
                      <span className="text-slate-500 text-xs font-medium">{customer.partnership}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Industry Leaders Choose Hicarb Engineers</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">14+</div>
                <div className="text-slate-600 font-medium">Trusted Partners</div>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
                <div className="text-slate-600 font-medium">Quality Rating</div>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">13+</div>
                <div className="text-slate-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flame className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-slate-600 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomersCarousel
