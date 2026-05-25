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
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* Better Mobile Overlay */}
      <div className="absolute inset-0 bg-black/45 md:bg-black/15" />

      <div
  className="
    absolute inset-0
    bg-gradient-to-b
    from-black/25
    via-black/5
    to-black/35
    md:bg-gradient-to-r
    md:from-black/50
    md:via-black/10
    md:to-transparent
  "
/>
      {/* Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.10),transparent_30%)]" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">

        {/* Top Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            pt-28 md:pt-36
            uppercase
            tracking-[0.35em]
            text-yellow-400
            text-xs
            sm:text-sm
            md:text-base
            mb-5
          "
        >
          Premium Epoxy Flooring
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
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
          "
        >
          Luxury Epoxy Flooring Solutions
        </motion.h1>

        {/* Paragraph */}
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
            leading-relaxed
            max-w-2xl
          "
        >
          High-end residential and commercial epoxy flooring
          designed for durability, elegance, and modern luxury.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-10
            w-full
            sm:w-auto
          "
        >
          <button
            className="
              bg-yellow-400
              text-black
              px-8
              py-4
              rounded-2xl
              font-bold
              text-lg
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
              bg-white/10
              backdrop-blur-md
              text-white
              px-8
              py-4
              rounded-2xl
              text-lg
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
          className="
            hidden md:flex
            items-center
            gap-4
            mt-20
            text-zinc-300
          "
        >
          <div className="w-10 h-10 rounded-full border border-zinc-500 flex items-center justify-center bg-white/5 backdrop-blur-sm">
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