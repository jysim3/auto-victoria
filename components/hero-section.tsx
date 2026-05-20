'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'

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

      {/* Ambient gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[180px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-4 text-[11px] tracking-[0.4em] text-primary/80 uppercase">
            <span className="w-12 h-px bg-primary/40" />
            Est. 2013
            <span className="w-12 h-px bg-primary/40" />
          </span>
        </motion.div>

        {/* Main Headline - Premium Cinzel Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h1 className="font-[var(--font-display)] tracking-[0.2em] leading-[1.1]">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground font-medium">
              AUTO
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-primary font-medium">
              VICTORIA
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
          Commercial Vehicle Excellence Since 2013
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
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
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 border border-primary/40 text-foreground text-xs font-medium tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-all duration-300"
          >
            Get In Touch
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
