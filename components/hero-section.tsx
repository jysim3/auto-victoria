'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ChevronDown, ClipboardCheck, CreditCard, Phone, ShieldCheck, Wrench } from 'lucide-react'

const proofPoints = [
  { value: '2013', label: 'Established in Penang' },
  { value: '5+', label: 'Commercial brand groups' },
  { value: '300+', label: 'Vehicles sold yearly' },
]

const customerBenefits = [
  { icon: ClipboardCheck, label: 'PUSPAKOM & JPJ handled' },
  { icon: CreditCard, label: 'Credit support arranged' },
  { icon: ShieldCheck, label: 'Insurance support ready' },
  { icon: Wrench, label: 'Servicing access after purchase' },
]

const whatsappHref = 'https://wa.me/60135253333?text=Hi%20Auto%20Victoria%2C%20I%27d%20like%20to%20ask%20about%20commercial%20vehicles.'

const dealershipPhotos = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OutSide_03_Night-Bb6m3kv3o8vW9ylPBdxWxa225y3lub.jpg',
    alt: 'Auto Victoria dealership frontage at night',
    label: 'Bukit Mertajam showroom',
  },
  {
    src: 'https://static.wixstatic.com/media/dbadab_38b9cc9032b94c668dd54438e7e2d090~mv2.jpg/v1/crop/x_0,y_2,w_557,h_446/fill/w_668,h_535,al_c,lg_1,q_80,enc_avif,quality_auto/HINO%20300.jpg',
    alt: 'Hino 300 Series truck available through Auto Victoria',
    label: 'Truck inventory',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Office_1st_Customer_Room_02-lw2Xe4B4KT8t34WDzEY0Ww3IbzxS0e.jpg',
    alt: 'Auto Victoria customer consultation room',
    label: 'Customer lounge',
  },
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
          className="object-cover object-[62%_center]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-background/20" />
      </div>
      
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_68%_38%,transparent_0%,rgba(0,0,0,0.42)_100%)]" />

      {/* Deck-inspired yellow panels */}
      <div className="absolute -top-20 right-[7%] hidden h-[42vh] w-44 bg-primary/75 xl:block [clip-path:polygon(0_0,100%_0,100%_78%,50%_100%,0_78%)]" />
      <div className="absolute bottom-0 right-[18%] hidden h-[24vh] w-36 bg-primary/60 lg:block [clip-path:polygon(0_0,100%_0,100%_78%,50%_100%,0_78%)]" />
      <div className="absolute left-0 top-[76%] h-40 w-full -skew-y-12 bg-background/80" />
      <div className="absolute bottom-0 left-0 h-2 w-full bg-primary" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-end">
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
              <h1 className="max-w-5xl font-[var(--font-display)] text-5xl font-bold leading-[0.95] tracking-[0.04em] text-foreground drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)] sm:text-6xl md:text-7xl lg:text-8xl">
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
              className="max-w-2xl text-lg leading-relaxed text-foreground/82 drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)] md:text-xl"
            >
              Established commercial vehicle dealership in Bukit Mertajam for vans, trucks, financing,
              insurance, JPJ, PUSPAKOM, body work, and after-sales support.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="lg:justify-self-end"
          >
            <div className="mb-6 grid gap-3 sm:grid-cols-[1.08fr_0.92fr]">
              <div className="group relative min-h-72 overflow-hidden border border-primary/25 bg-background/40 shadow-2xl shadow-background/40 backdrop-blur-sm">
                <Image
                  src={dealershipPhotos[0].src}
                  alt={dealershipPhotos[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 360px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                  {dealershipPhotos[0].label}
                </p>
              </div>
              <div className="grid gap-3">
                {dealershipPhotos.slice(1).map((photo) => (
                  <div key={photo.label} className="group relative min-h-32 overflow-hidden border border-border/80 bg-background/40 shadow-xl shadow-background/30 backdrop-blur-sm">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 220px, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <p className="absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground">
                      {photo.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6 grid grid-cols-3 border-y border-primary/25 bg-background/68 backdrop-blur-sm">
              {proofPoints.map((item) => (
                <div key={item.label} className="border-r border-primary/20 px-4 py-5 last:border-r-0">
                  <p className="text-2xl font-bold text-primary md:text-3xl">{item.value}</p>
                  <p className="mt-2 text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {customerBenefits.map((benefit) => (
                <div key={benefit.label} className="flex items-center gap-3 border border-border bg-card/50 px-4 py-4 backdrop-blur-sm">
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
