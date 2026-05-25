"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Flake System",
    description:
      "Durable decorative epoxy flooring ideal for garages, basements, and commercial spaces.",
    image: "/images/flake-system.avif",
  },
  {
    title: "Metallic Finishes",
    description:
      "Luxury metallic epoxy floors with stunning depth, movement, and high-end aesthetics.",
    image: "/images/metallic-finishes.avif",
  },
  {
    title: "Custom Countertops",
    description:
      "Premium epoxy countertops designed with marble-style finishes and mirror gloss.",
    image: "/images/custom-countertops.avif",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#050505] text-white py-24 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-yellow-400 text-sm mb-4">
            What We Do
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-5xl md:text-6xl font-black">
              Choose Your Perfect Design
            </h2>

            <p className="text-zinc-400 max-w-xl text-lg leading-relaxed">
              High-end epoxy flooring systems crafted for luxury homes,
              garages, showrooms, and modern commercial spaces.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-yellow-400/40 transition duration-500">

                <div className="aspect-square overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-3xl font-black mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-zinc-300 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}