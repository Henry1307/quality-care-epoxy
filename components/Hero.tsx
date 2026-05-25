"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-22"
    >

      {/* BACKGROUND IMAGE */}

      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8 }}
        className="absolute inset-0"
      >
        <img
          src="/images/service5.jpg"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* GLOW */}

      <div className="absolute top-[-200px] right-[-150px] w-[700px] h-[700px] bg-yellow-400/10 blur-[180px]" />

      {/* CONTENT */}

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full mt-10">

        <div className="max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="uppercase tracking-[0.4em] text-yellow-400 mb-8 text-sm"
          >
            Ottawa’s Trusted Choice For High-End Epoxy Flooring
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-black leading-[0.95] mb-10"
          >
            Luxury
            <br />
            Epoxy Floors
            <br />
            Built To Impress
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-zinc-300 text-xl leading-relaxed max-w-2xl mb-12"
          >
            Premium residential and commercial epoxy flooring
            systems crafted with luxury finishes, metallic effects,
            flake systems, and modern high-performance durability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >

            <a
              href="#services"
              className="bg-yellow-400 text-black px-10 py-5 rounded-full font-black hover:scale-105 transition duration-300"
            >
              Explore Services
            </a>

            <a
              href="#contact"
              className="border border-white/20 backdrop-blur-xl px-10 py-5 rounded-full font-bold hover:bg-white hover:text-black transition duration-300"
            >
              Get Free Quote
            </a>

          </motion.div>

        </div>

      </div>

      {/* FLOATING SCROLL */}

      <motion.div
  animate={{ y: [0, 12, 0] }}
  transition={{ repeat: Infinity, duration: 2 }}
  className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
>
  <div className="w-7 h-12 rounded-full border border-white/30 flex justify-center">
    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3" />
  </div>
</motion.div>

    </section>
  )
}