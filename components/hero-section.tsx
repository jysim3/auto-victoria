'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'

const proofPoints = [
  { value: '300+', label: 'Vehicles sold yearly' },
  { value: 'Top 3', label: 'Daihatsu dealer in Malaysia' },
  { value: '2000+', label: 'Business customers' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OutSide_03_Night-Bb6m3kv3o8vW9ylPBdxWxa225y3lub.jpg"
          alt="Auto Victoria dealership at night"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      </div>
      
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />

      {/* Deck-inspired yellow panels */}
      <div className="absolute -top-10 left-[8%] hidden h-[42vh] w-56 bg-primary/90 lg:block [clip-path:polygon(0_0,100%_0,100%_76%,50%_100%,0_76%)]" />
      <div className="absolute bottom-0 right-[10%] hidden h-[46vh] w-56 bg-primary/90 lg:block [clip-path:polygon(0_0,100%_0,100%_80%,50%_100%,0_80%)]" />
      <div className="absolute left-0 top-[64%] h-44 w-full -skew-y-12 bg-background/90" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-4 text-[11px] tracking-[0.35em] text-primary/90 uppercase">
            <span className="w-12 h-px bg-primary/40" />
            Bukit Mertajam, Penang | Established 2013
            <span className="w-12 h-px bg-primary/40" />
          </span>
        </motion.div>

        {/* Main Headline - Premium Cinzel Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <h1 className="font-[var(--font-display)] tracking-[0.12em] leading-[0.95]">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground font-bold">
              AUTO
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground font-bold">
              VICTORIA
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent [-webkit-text-stroke:1px_var(--primary)] font-bold">
              GROUP
            </span>
          </h1>
        </motion.div>
        
        {/* Gold divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12 mx-auto flex items-center justify-center gap-4"
        >
          <span className="w-20 h-px bg-gradient-to-r from-transparent to-primary/60" />
          <span className="w-1.5 h-1.5 rotate-45 bg-primary/80" />
          <span className="w-20 h-px bg-gradient-to-l from-transparent to-primary/60" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-xl mx-auto text-xs md:text-sm text-muted-foreground tracking-[0.25em] uppercase mb-16 font-light"
        >
          Partner for the Next Stage of Commercial Mobility
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mx-auto mb-12 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {proofPoints.map((item) => (
            <div key={item.label} className="border border-primary/30 bg-background/70 px-5 py-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-primary">{item.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-xs font-medium tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300"
          >
            Discover More
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#ecosystem"
            className="inline-flex items-center gap-2 px-10 py-4 border border-primary/40 text-foreground text-xs font-medium tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-all duration-300"
          >
            Sales Ecosystem
          </a>
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
