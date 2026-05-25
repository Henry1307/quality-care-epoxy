"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="py-36 bg-zinc-950 relative overflow-hidden"
    >

      <div className="absolute left-[-200px] top-0 w-[500px] h-[500px] bg-yellow-400/5 blur-[140px]" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="uppercase tracking-[0.4em] text-yellow-400 mb-8"
        >
          Welcome To Quality Care Epoxy
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black leading-tight mb-10"
        >
          Your Vision.
          <br />
          Our Expertise.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-zinc-300 text-xl leading-relaxed max-w-4xl mx-auto"
        >
          At Quality Care Epoxy, we blend creativity with innovation,
          transforming your flooring visions into reality with premium
          epoxy systems built for luxury, durability, and timeless style.
          We specialize in metallic epoxy, flake systems, custom
          countertops, garages, commercial spaces, and high-end
          residential installations throughout Ottawa.
        </motion.p>

      </div>

    </section>
  )
}