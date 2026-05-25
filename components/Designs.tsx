"use client"

import { motion } from "framer-motion"

const designs = [
  {
    title: "Flake Systems",
    image: "/images/service4.jpg",
  },

  {
    title: "Metallic Finishes",
    image: "/images/service2.jpg",
  },

  {
    title: "Custom Countertops",
    image: "/images/service3.jpg",
  },
]

export default function Designs() {
  return (
    <section
      id="expertise"
      className="py-36 bg-black"
    >

      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="uppercase tracking-[0.35em] text-yellow-400 mb-8"
        >
          Our Expertise
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-10"
        >
          Choose Your
          <br />
          Perfect Design
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-zinc-400 text-xl max-w-4xl mx-auto mb-24"
        >
          Every floor is custom-built with premium materials,
          luxury finishes, and high-end craftsmanship tailored
          specifically for your space.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-14">

          {designs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >

              <div className="overflow-hidden rounded-full w-[320px] h-[320px] mx-auto border border-zinc-800 shadow-[0_0_80px_rgba(250,204,21,0.08)]">

                <img
                  src={item.image}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />

              </div>

              <h3 className="text-3xl font-black mt-10">
                {item.title}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}