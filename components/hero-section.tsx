'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ChevronDown, Phone } from 'lucide-react'

const proofPoints = [
  { value: '2013', label: 'Established in Penang' },
  { value: '5+', label: 'Commercial brand groups' },
  { value: '300+', label: 'Vehicles sold yearly' },
]

const whatsappHref = 'https://wa.me/60135253333?text=Hi%20Auto%20Victoria%2C%20I%27d%20like%20to%20ask%20about%20commercial%20vehicles.'

export function HeroSection() {
  return (
    <section className="relative min-h-[94svh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OutSide_03_Night-Bb6m3kv3o8vW9ylPBdxWxa225y3lub.jpg"
          alt="Auto Victoria dealership at night"
          fill
          className="object-cover object-[62%_center]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/68 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/28 to-background/25" />
      </div>
      
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_38%,transparent_0%,rgba(0,0,0,0.46)_100%)]" />

      <div className="absolute right-[9%] top-0 hidden h-36 w-24 bg-primary/70 lg:block [clip-path:polygon(0_0,100%_0,100%_82%,50%_100%,0_82%)]" />
      <div className="absolute left-0 top-[82%] h-40 w-full -skew-y-12 bg-background/82" />
      <div className="absolute bottom-0 left-0 h-2 w-full bg-primary" />

      <div className="relative z-10 mx-auto flex min-h-[94svh] max-w-7xl flex-col justify-center px-6 pb-20 pt-28 lg:px-8">
        <div className="max-w-4xl">
            {/* Pre-headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex max-w-full flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-primary/90">
                <span className="h-px w-10 bg-primary/50" />
                Auto Victoria | Bukit Mertajam, Penang
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6"
            >
              <h1 className="max-w-4xl font-[var(--font-display)] text-5xl font-bold leading-[0.98] tracking-[0.04em] text-foreground drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-7xl xl:text-8xl">
                Commercial Vehicles, Refined.
              </h1>
            </motion.div>

            {/* Gold divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-6 flex origin-left items-center gap-4"
            >
              <span className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
              <span className="h-1.5 w-1.5 rotate-45 bg-primary/80" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="max-w-2xl text-lg leading-relaxed text-foreground/84 drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)] md:text-xl"
            >
              Vans, trucks, financing, JPJ, PUSPAKOM, and after-sales support from Bukit Mertajam.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href={whatsappHref}
                className="group inline-flex items-center justify-center gap-3 bg-primary px-9 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:bg-primary/90"
              >
                WhatsApp Sales
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="tel:60135253333"
                className="inline-flex items-center justify-center gap-2 border border-primary/40 px-9 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
              >
                <Phone size={14} />
                Call 013-525 3333
              </a>
            </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="mt-10 hidden max-w-3xl border-y border-primary/25 bg-background/58 backdrop-blur-sm md:block"
        >
            <div className="grid grid-cols-3">
              {proofPoints.map((item) => (
                <div key={item.label} className="border-r border-primary/20 px-4 py-5 last:border-r-0 sm:px-6">
                  <p className="text-2xl font-bold text-primary sm:text-3xl">{item.value}</p>
                  <p className="mt-2 text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground sm:text-xs">{item.label}</p>
                </div>
              ))}
            </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-3 text-muted-foreground/50 hover:text-primary transition-colors duration-300">
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
