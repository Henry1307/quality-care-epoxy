"use client"

import { motion } from "framer-motion"

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Expertise", href: "#expertise" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-2xl"
    >

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <a
          href="#home"
          className="text-3xl font-black tracking-wide"
        >
          QUALITY{" "}
          <span className="text-yellow-400">
            CARE
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">

          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              whileHover={{ y: -2 }}
              className="text-zinc-300 hover:text-yellow-400 transition text-sm uppercase tracking-[0.25em]"
            >
              {link.name}
            </motion.a>
          ))}

        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#contact"
          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hidden md:block"
        >
          Get Quote
        </motion.a>

      </div>

    </motion.nav>
  )
}