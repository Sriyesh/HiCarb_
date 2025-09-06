"use client"

import { useEffect, useRef } from "react"
import { Target, Users, TrendingUp, Award } from "lucide-react"

const AboutSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".animate-card")
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

  const aboutCards = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To establish heat treatment processes and services to enhance customer satisfaction of various types of industries under one roof.",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "Dedicated team of highly skilled, qualified and well experienced metallurgists & engineers working towards quality improvements.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description:
        "Started in 2011, expanded with second unit in 2022. Continuous growth with latest technology and international standards.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "ISO 9001:2015 certified from TUV Austria. CQI-9 compliant systems with SCADA and ERP integration.",
    },
  ]

  const milestones = [
    { year: "2011", description: "Company incorporated by Mr. Sunil Sebastian & Mr. Krish Bakumar with their 25+ years of experience" },
    { year: "2015", description: "Mr. Sajith Kumar P.N & Mr. Sajisi Supal joined the journey" },
    { year: "2022", description: "Started heat treatment with fully automatic Sealed Quench Furnace line" },
    { year: "2024", description: "Inaugurated 2nd setup of SQF line in August" },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full text-sm mb-4">
            About Hicarb Engineers
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Leading Heat Treatment Specialists</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We take pleasure to introduce ourselves as a commercial heat treatment shop and full metallurgical testing
            laboratory in Hosur, established by qualified metallurgists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {aboutCards.map((card, index) => (
            <div
              key={card.title}
              className="animate-card opacity-0 bg-slate-900/50 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-6"
            >
              <card.icon className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-3">{card.title}</h3>
              <p className="text-slate-300">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-card opacity-0 space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">Company Milestones</h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex items-start space-x-4 p-4 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colors duration-300"
                >
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-orange-400 font-semibold">{milestone.year}</div>
                    <div className="text-slate-300">{milestone.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-card opacity-0">
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-white text-xl font-semibold mb-6">Facilities Overview</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400">35,000</div>
                  <div className="text-sm text-slate-400">Sq Ft Manufacturing</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400">16,000</div>
                  <div className="text-sm text-slate-400">Sq Ft Heat Treatment</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400">40</div>
                  <div className="text-sm text-slate-400">Manufacturing Staff</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400">17</div>
                  <div className="text-sm text-slate-400">Heat Treatment Staff</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
