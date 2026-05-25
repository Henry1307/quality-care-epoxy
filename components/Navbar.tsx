"use client"

import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-yellow-500/10">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold tracking-wide text-white">
          QUALITY <span className="text-yellow-400">CARE</span>
        </h1>

        <div className="hidden md:flex gap-10 text-white">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#services" className="hover:text-yellow-400 transition">Services</a>
          <a href="#gallery" className="hover:text-yellow-400 transition">Gallery</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>

        <button className="hidden md:block bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Get Quote
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-yellow-400/20 px-6 py-6 flex flex-col gap-5 text-white text-lg">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>

          <button className="bg-yellow-400 text-black py-3 rounded-xl font-semibold mt-3">
            Get Quote
          </button>
        </div>
      )}
    </nav>
  )
}