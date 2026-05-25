import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Benefits from "@/components/Benefits"
import Testimonials from "@/components/Testimonials"
import Expertise from "@/components/Expertise"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      <Navbar />

      <Hero />

      <About />

      <Services />


      <Benefits />

      <Testimonials />

      <Expertise />

      <CTA />

      <Footer />

    </main>
  )
}