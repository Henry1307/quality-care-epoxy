export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-zinc-800 bg-zinc-950 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">

        <div>
          <h2 className="text-3xl font-black text-yellow-400 mb-4">
            Quality Care
          </h2>

          <p className="text-zinc-400 max-w-sm">
            Ottawa’s premium epoxy flooring specialists.
          </p>
        </div>

        <div className="space-y-3 text-zinc-400">
          <p>Ottawa, Ontario</p>
          <p>613-600-1412</p>
          <p>QualityCareEpoxy@gmail.com</p>
        </div>

      </div>
    </footer>
  )
}