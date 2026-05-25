"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Michael R.",
    text: "My garage looks absolutely insane now. The metallic epoxy finish is unreal.",
  },

  {
    name: "Sarah T.",
    text: "Professional team, amazing communication, and flawless installation.",
  },

  {
    name: "David L.",
    text: "Quality Care Epoxy completely transformed our commercial showroom.",
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-36 bg-zinc-950"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-24">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.35em] text-yellow-400 mb-6"
          >
            Testimonials
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black"
          >
            Client Experiences
          </motion.h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-black border border-zinc-800 rounded-[32px] p-10 hover:border-yellow-400/40 transition"
            >

              <div className="text-yellow-400 text-5xl mb-8">
                "
              </div>

              <p className="text-zinc-300 text-xl leading-relaxed mb-10">
                {item.text}
              </p>

              <h3 className="font-black text-2xl">
                {item.name}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}