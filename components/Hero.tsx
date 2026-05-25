"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/images/Hero.jpg')",
        }}
      />

      {/* Dark Luxury Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Cinematic Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />

      {/* Warm Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.12),transparent_30%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-32">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.35em] text-yellow-400 text-sm md:text-base mb-6"
        >
          Premium Epoxy Flooring
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95] text-white max-w-5xl"
        >
          Luxury Epoxy Flooring Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-zinc-200 text-lg md:text-2xl max-w-2xl leading-relaxed"
        >
          High-end residential and commercial epoxy flooring
          designed for durability, elegance, and modern luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 hover:bg-yellow-300 transition duration-300 shadow-2xl">
            Get Free Quote
          </button>

          <button className="border border-white/20 backdrop-blur-md bg-white/5 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition duration-300">
            View Services
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 hidden md:flex items-center gap-4 text-zinc-300"
        >
          <div className="w-10 h-10 rounded-full border border-zinc-500 flex items-center justify-center backdrop-blur-sm bg-white/5">
            ↓
          </div>

          <span className="tracking-[0.3em] uppercase text-xs">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  )
}