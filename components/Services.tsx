"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Residential Epoxy",
    description:
      "Luxury residential garage flooring systems with premium finishes and durability.",
    image: "/images/service1.jpg",
  },

  {
    title: "Commercial Flooring",
    description:
      "High-performance epoxy systems designed for showrooms and businesses.",
    image: "/images/service2.jpg",
  },

  {
    title: "Metallic Epoxy",
    description:
      "Elegant metallic epoxy finishes with cinematic reflections and depth.",
    image: "/images/service3.jpg",
  },

  {
    title: "Flake Systems",
    description:
      "Decorative flake flooring systems with premium texture and protection.",
    image: "/images/service4.jpg",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-black"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-20">

          <p className="uppercase tracking-[0.35em] text-yellow-400 mb-6">
            Our Services
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Premium Flooring
            <br />
            Solutions
          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl">
            High-end epoxy systems crafted for luxury homes,
            garages, showrooms, and commercial environments.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative overflow-hidden rounded-[32px] h-[620px] group border border-zinc-800"
            >

              <img
                src={service.image}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

              <div className="relative z-10 h-full flex flex-col justify-end p-8">

                <h3 className="text-4xl font-black mb-6 leading-tight">
                  {service.title}
                </h3>

                <p className="text-zinc-300 text-lg leading-relaxed">
                  {service.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}