'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ChevronDown, ClipboardCheck, CreditCard, ShieldCheck, Wrench } from 'lucide-react'

const proofPoints = [
  { value: '2013', label: 'Established in Penang' },
  { value: '5+', label: 'Commercial brand groups' },
  { value: '39', label: 'Legacy listed variants' },
]

const customerBenefits = [
  { icon: ClipboardCheck, label: 'PUSPAKOM & JPJ handled' },
  { icon: CreditCard, label: 'Credit support arranged' },
  { icon: ShieldCheck, label: 'Insurance support ready' },
  { icon: Wrench, label: 'Servicing access after purchase' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OutSide_03_Night-Bb6m3kv3o8vW9ylPBdxWxa225y3lub.jpg"
          alt="Auto Victoria dealership at night"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/50" />
      </div>
      
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />

      {/* Deck-inspired yellow panels */}
      <div className="absolute -top-20 right-[9%] hidden h-[46vh] w-52 bg-primary/90 xl:block [clip-path:polygon(0_0,100%_0,100%_78%,50%_100%,0_78%)]" />
      <div className="absolute bottom-0 right-[18%] hidden h-[28vh] w-40 bg-primary/80 lg:block [clip-path:polygon(0_0,100%_0,100%_78%,50%_100%,0_78%)]" />
      <div className="absolute left-0 top-[70%] h-44 w-full -skew-y-12 bg-background/95" />
      <div className="absolute bottom-0 left-0 h-2 w-full bg-primary" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 lg:px-8">
        <div className="grid w-full gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            {/* Pre-headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
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
              className="mb-8"
            >
              <h1 className="max-w-5xl font-[var(--font-display)] text-5xl font-bold leading-[0.95] tracking-[0.04em] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
                Commercial Vehicles,
                <span className="block text-primary">Ready for Business.</span>
              </h1>
            </motion.div>

            {/* Gold divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-8 flex origin-left items-center gap-4"
            >
              <span className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
              <span className="h-1.5 w-1.5 rotate-45 bg-primary/80" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              New and used vans and trucks, financing, insurance, registration, inspection, body work,
              and commercial vehicle sourcing arranged through one Bukit Mertajam partner.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-3 bg-primary px-9 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:bg-primary/90"
              >
                See What We Provide
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-primary/40 px-9 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Talk to Sales
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="lg:justify-self-end"
          >
            <div className="mb-6 grid grid-cols-3 border-y border-primary/25 bg-background/60 backdrop-blur-sm">
              {proofPoints.map((item) => (
                <div key={item.label} className="border-r border-primary/20 px-4 py-5 last:border-r-0">
                  <p className="text-2xl font-bold text-primary md:text-3xl">{item.value}</p>
                  <p className="mt-2 text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {customerBenefits.map((benefit) => (
                <div key={benefit.label} className="flex items-center gap-3 border border-border bg-card/35 px-4 py-4 backdrop-blur-sm">
                  <benefit.icon className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{benefit.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
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
