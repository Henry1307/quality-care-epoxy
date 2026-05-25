"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 md:pt-24">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="uppercase tracking-[0.4em] text-yellow-400 text-sm md:text-base mb-5"
        >
          Premium Epoxy Flooring
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-black leading-none text-white max-w-4xl"
        >
          Luxury Epoxy Flooring Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-zinc-300 text-lg md:text-2xl max-w-2xl leading-relaxed"
        >
          High-end residential and commercial epoxy flooring
          with luxury finishes, durability, and modern aesthetics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Get Free Quote
          </button>

          <button className="border border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
            View Services
          </button>
        </motion.div>
      </div>
    </section>
  )
}