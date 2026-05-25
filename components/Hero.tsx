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
        className="absolute inset-0 bg-cover bg-center brightness-110 contrast-125 saturate-110 scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Soft Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Cinematic Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />

      {/* Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.12),transparent_30%)]" />

      {/* Soft White Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_35%)]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-32">

        {/* Small Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.35em] text-yellow-400 text-sm md:text-base mb-6"
        >
          Premium Epoxy Flooring
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95] text-zinc-100 max-w-5xl"
        >
          Luxury Epoxy
          <br />
          Flooring Solutions
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-zinc-200 text-lg md:text-2xl max-w-2xl leading-relaxed"
        >
          High-end residential and commercial epoxy flooring
          designed for durability, elegance, and modern luxury.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 mt-12"
        >
          <button className="bg-yellow-400 text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 hover:bg-yellow-300 transition duration-300 shadow-[0_0_40px_rgba(250,204,21,0.25)]">
            Get Free Quote
          </button>

          <button className="border border-white/20 backdrop-blur-md bg-white/5 text-white px-10 py-5 rounded-2xl hover:bg-white hover:text-black transition duration-300">
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
          <div className="w-10 h-10 rounded-full border border-zinc-500 flex items-center justify-center backdrop-blur-md bg-white/5">
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