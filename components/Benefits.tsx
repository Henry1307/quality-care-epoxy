const benefits = [
  {
    title: "Increase Property Value",
    text: "Luxury epoxy flooring enhances the appearance and value of your property.",
  },

  {
    title: "Quality Craftsmanship",
    text: "Professional installation using premium-grade materials and finishes.",
  },

  {
    title: "Custom Designs",
    text: "Every project is uniquely designed to fit your vision and space.",
  },

  {
    title: "Trusted Professionals",
    text: "Trusted across Ottawa for luxury epoxy flooring systems.",
  },
]

export default function Benefits() {
  return (
    <section className="py-32 bg-black">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-950 border border-zinc-800 rounded-[30px] p-10 hover:border-yellow-400/50 transition"
          >

            <h3 className="text-3xl font-black mb-6">
              {item.title}
            </h3>

            <p className="text-zinc-400 text-lg leading-relaxed">
              {item.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}