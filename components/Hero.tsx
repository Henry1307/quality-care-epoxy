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
        className="
          absolute inset-0
          bg-cover
          bg-center
          md:bg-center
          brightness-125
          contrast-110
          saturate-110
          scale-100 md:scale-105
        "
        style={{
          backgroundImage: "url('/images/Hero.jpg')",
        }}
      />

      {/* Mobile Overlay */}
      <div className="absolute inset-0 bg-black/20 md:bg-black/25" />

      {/* Luxury Gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/30
          via-black/10
          to-black/50
          md:bg-gradient-to-r
          md:from-black/65
          md:via-black/25
          md:to-transparent
        "
      />

      {/* Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.12),transparent_30%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            uppercase
            tracking-[0.35em]
            text-yellow-400
            text-xs sm:text-sm md:text-base
            mb-4
            pt-24 md:pt-32
          "
        >
          Premium Epoxy Flooring
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-5xl
            sm:text-6xl
            md:text-8xl
            font-black
            leading-[0.95]
            text-white
            max-w-5xl
            drop-shadow-[0_5px_20px_rgba(0,0,0,0.8)]
          "
        >
          Luxury Epoxy Flooring Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            mt-6
            text-zinc-200
            text-base
            sm:text-lg
            md:text-2xl
            max-w-2xl
            leading-relaxed
            drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]
          "
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
          <button
            className="
              bg-yellow-400
              text-black
              px-8
              py-4
              rounded-2xl
              font-bold
              hover:scale-105
              hover:bg-yellow-300
              transition
              duration-300
              shadow-[0_10px_40px_rgba(250,204,21,0.25)]
            "
          >
            Get Free Quote
          </button>

          <button
            className="
              border
              border-white/20
              backdrop-blur-md
              bg-white/10
              text-white
              px-8
              py-4
              rounded-2xl
              hover:bg-white
              hover:text-black
              transition
              duration-300
            "
          >
            View Services
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 hidden md:flex items-center gap-4 text-zinc-300"
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