import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ServicesSection from "./components/ServicesSection"
import EquipmentSection from "./components/EquipmentSection"
import SpecificationsSection from "./components/SpecificationsSection"
import QualitySection from "./components/QualitySection"
import CustomersCarousel from "./components/CustomersCarousel"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EquipmentSection />
      <SpecificationsSection />
      <QualitySection />
      <CustomersCarousel />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
