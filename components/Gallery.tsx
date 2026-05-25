"use client"

import { motion } from "framer-motion"

const images = [
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
]

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-32 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-20">
          <p className="uppercase tracking-[0.3em] text-yellow-400 mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl font-black">
            Recent Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                className="h-[450px] w-full object-cover hover:scale-110 transition duration-700"
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}