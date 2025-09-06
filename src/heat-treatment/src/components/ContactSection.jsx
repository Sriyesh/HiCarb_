"use client"

import { useEffect, useRef } from "react"
import { Phone, Mail, MapPin, ArrowRight, User, Building, MessageCircle } from "lucide-react"

const ContactSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".contact-card")
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

  const managementTeam = [
    { name: "Mr. Sebastian Stanley", position: "Managing Director", phone: "+91 98999 97386" },
    { name: "Mr. Sajisi Supal", position: "Managing Director", phone: "+91 95624 46859" },
    { name: "Mr. Sajith Kumar", position: "Managing Director", phone: "+91 98842 22689" },
    { name: "Mr. Pradheep", position: "Chief Operating Officer", phone: "+91 97417 85837" },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Contact Hicarb Engineers</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to discuss your heat treatment requirements? Our experienced team is here to help with all your
            metallurgical needs.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="contact-card opacity-0 bg-slate-900/50 border border-slate-700 text-center hover:border-orange-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-6">
            <Phone className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg mb-3">Phone</h3>
            <p className="text-slate-300 mb-2">Main Office</p>
            <p className="text-orange-400 font-semibold">+91 98999 97386</p>
          </div>

          <div className="contact-card opacity-0 bg-slate-900/50 border border-slate-700 text-center hover:border-orange-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-6">
            <Mail className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg mb-3">Email</h3>
            <p className="text-slate-300 mb-2">Business Inquiries</p>
            <p className="text-orange-400 font-semibold">hicarbht@gmail.com</p>
          </div>

          <div className="contact-card opacity-0 bg-slate-900/50 border border-slate-700 text-center hover:border-orange-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-6">
            <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg mb-3">Location</h3>
            <p className="text-slate-300 mb-2">Hosur, Tamil Nadu</p>
            <p className="text-orange-400 font-semibold">S.No.747/2c4 Old Anekkal Road</p>
          </div>
        </div>

        {/* Management Team */}
        <div className="contact-card opacity-0 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Management Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementTeam.map((member, index) => (
              <div
                key={member.name}
                className="bg-slate-900/50 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-6 text-center"
              >
                <User className="h-10 w-10 text-orange-400 mx-auto mb-4" />
                <div className="font-semibold text-white mb-1">{member.name}</div>
                <div className="text-slate-400 text-sm mb-3">{member.position}</div>
                <div className="text-orange-400 text-sm font-mono">{member.phone}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Facility Details */}
        <div className="contact-card opacity-0 mb-16">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg p-8">
            <h3 className="text-white text-2xl text-center font-semibold mb-6 flex items-center justify-center">
              <Building className="h-8 w-8 mr-3" />
              Facility Information
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-slate-900/30 rounded-lg">
                <div className="text-xl font-bold text-orange-400 mb-2">20,000</div>
                <div className="text-slate-300 text-sm">Total Area (Sq Ft)</div>
              </div>
              <div className="text-center p-4 bg-slate-900/30 rounded-lg">
                <div className="text-xl font-bold text-orange-400 mb-2">12,000</div>
                <div className="text-slate-300 text-sm">Built-up Area (Sq Ft)</div>
              </div>
              <div className="text-center p-4 bg-slate-900/30 rounded-lg">
                <div className="text-xl font-bold text-orange-400 mb-2">1000 KVA</div>
                <div className="text-slate-300 text-sm">Power Supply</div>
              </div>
              <div className="text-center p-4 bg-slate-900/30 rounded-lg">
                <div className="text-xl font-bold text-orange-400 mb-2">Job Work</div>
                <div className="text-slate-300 text-sm">Business Nature</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center mx-auto"
          onClick={()=>{window.open('https://wa.me/916369472483','_blank')}}>
            <MessageCircle className="h-8 w-5 mr-2"/>
            Request Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
