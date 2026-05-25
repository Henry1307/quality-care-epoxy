"use client"

import { motion } from "framer-motion"

const expertise = [
  {
    title: "Design Assistance",
    text: "Helping you choose the perfect luxury epoxy finish for your space.",
  },

  {
    title: "Quality Installation",
    text: "Professional epoxy installation with flawless attention to detail.",
  },

  {
    title: "Ongoing Support",
    text: "Reliable customer service and long-term flooring performance.",
  },
]

export default function Expertise() {
  return (
    <section className="py-36 bg-black">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-24">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.35em] text-yellow-400 mb-6"
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black"
          >
            Professional.
            <br />
            Luxury.
            <br />
            Durable.
          </motion.h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-zinc-950 border border-zinc-800 rounded-[30px] p-12 hover:border-yellow-400/40 transition"
            >

              <h3 className="text-3xl font-black mb-8">
                {item.title}
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed">
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}