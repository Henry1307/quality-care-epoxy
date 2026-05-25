import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Star,
  Users,
  BadgeCheck,
  Home,
  Building2,
  Layers3,
  Grid2x2,
} from "lucide-react";

const services = [
  {
    title: "Residential Epoxy",
    desc: "Luxury residential garage flooring systems with premium finishes and durability.",
    image: "/images/service1.jpg",
    icon: Home,
  },
  {
    title: "Commercial Flooring",
    desc: "High-performance epoxy systems designed for showrooms and businesses.",
    image: "/images/service2.jpg",
    icon: Building2,
  },
  {
    title: "Metallic Epoxy",
    desc: "Elegant metallic epoxy finishes with cinematic reflections and depth.",
    image: "/images/service3.jpg",
    icon: Layers3,
  },
  {
    title: "Flake Systems",
    desc: "Decorative flake flooring systems with luxury texture and protection.",
    image: "/images/service4.jpg",
    icon: Grid2x2,
  },
];

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/75 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="text-4xl font-black tracking-[0.25em] uppercase">
          QUALITY <span className="text-yellow-400">CARE</span>
        </div>

        <div className="hidden md:flex items-center gap-14 text-sm font-medium">
          <a className="text-yellow-400 border-b border-yellow-400 pb-1 cursor-pointer">
            Home
          </a>

          <a className="hover:text-yellow-400 transition cursor-pointer">
            Services
          </a>

          <a className="hover:text-yellow-400 transition cursor-pointer">
            Gallery
          </a>

          <a className="hover:text-yellow-400 transition cursor-pointer">
            About
          </a>

          <a className="hover:text-yellow-400 transition cursor-pointer">
            Contact
          </a>
        </div>

        <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:scale-105">
          GET A QUOTE
          <ArrowRight size={20} />
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[950px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Luxury Garage"
          fill
          priority
          className="object-cover object-center brightness-[0.72]"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-8">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.45em] text-yellow-400 text-sm mb-8 font-medium">
            Premium Epoxy Flooring
          </p>

          <h1 className="text-[6.5rem] leading-[0.92] font-black tracking-tight mb-10">
            Luxury Epoxy
            <br />
            Flooring Solutions
          </h1>

          <p className="text-white/80 text-[1.45rem] leading-[2.5rem] max-w-2xl mb-14 font-light">
            High-end residential and commercial epoxy flooring with luxury
            finishes, durability, and modern aesthetics.
          </p>

          <div className="flex flex-wrap gap-6">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-12 py-6 rounded-2xl font-bold text-lg flex items-center gap-4 transition-all duration-300 hover:scale-105 shadow-[0_10px_40px_rgba(250,204,21,0.25)]">
              GET FREE QUOTE
              <ArrowRight size={24} />
            </button>

            <button className="border border-white/20 bg-black/20 backdrop-blur-md px-12 py-6 rounded-2xl font-semibold text-lg flex items-center gap-4 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300">
              VIEW OUR SERVICES
              <ArrowRight size={24} />
            </button>
          </div>

          <div className="mt-24 flex items-center gap-5 text-white/60 uppercase tracking-[0.35em] text-xs">
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-lg backdrop-blur-md">
              ↓
            </div>

            Scroll
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          <div>
            <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm mb-4">
              What We Do
            </p>

            <h2 className="text-5xl font-black">
              Our Services
            </h2>
          </div>

          <p className="max-w-xl text-white/60 text-lg leading-9 pt-10">
            We provide premium epoxy flooring systems designed for luxury,
            durability, and modern aesthetics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative h-[430px] overflow-hidden rounded-[28px] border border-white/10"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

                <div className="relative z-10 flex h-full flex-col justify-end p-9">
                  <Icon
                    className="text-yellow-400 mb-6"
                    size={40}
                    strokeWidth={2}
                  />

                  <h3 className="text-[2.5rem] leading-[1.05] font-black mb-5">
                    {service.title}
                  </h3>

                  <p className="text-white/70 leading-8 text-base mb-7">
                    {service.desc}
                  </p>

                  <div className="flex items-center gap-3 text-yellow-400 font-semibold text-lg">
                    Explore
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="pb-28 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 rounded-[30px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#0d0d0d] to-[#050505]">
          <StatCard
            icon={<Shield className="text-yellow-400" size={42} />}
            number="10+"
            text="Years Experience"
          />

          <StatCard
            icon={<Star className="text-yellow-400" size={42} />}
            number="500+"
            text="Projects Completed"
          />

          <StatCard
            icon={<Users className="text-yellow-400" size={42} />}
            number="100%"
            text="Customer Satisfaction"
          />

          <StatCard
            icon={<BadgeCheck className="text-yellow-400" size={42} />}
            number="Premium"
            text="Quality Materials"
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  number,
  text,
}: {
  icon: React.ReactNode;
  number: string;
  text: string;
}) {
  return (
    <div className="p-12 border-r border-white/10 last:border-none hover:bg-white/[0.03] transition">
      <div className="flex items-center gap-6">
        {icon}

        <div>
          <div className="text-5xl font-black mb-2">{number}</div>

          <div className="text-white/60 text-lg">{text}</div>
        </div>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <section className="pb-32 px-8 bg-black">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[40px]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Luxury"
            fill
            className="object-cover brightness-[0.35]"
          />

          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-10 py-28">
          <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm mb-6">
            Transform Your Space
          </p>

          <h2 className="text-6xl font-black leading-tight mb-8">
            Premium Epoxy Floors
            <br />
            Built To Impress
          </h2>

          <p className="text-white/70 text-xl leading-9 max-w-3xl mx-auto mb-12">
            Luxury flooring systems designed for durability, elegance, and
            modern aesthetics.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-12 py-6 rounded-2xl font-bold text-lg flex items-center gap-4 mx-auto transition-all duration-300 hover:scale-105">
            GET STARTED
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-white/50 text-sm bg-black">
      © 2026 QUALITY CARE — Luxury Epoxy Flooring.
    </footer>
  );
}