'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const partnerBenefits = [
  'Access to Northern Malaysia market expertise',
  'Proven track record with 300+ vehicle sales',
  'Comprehensive after-sales support network',
  'Strong customer relationships and trust',
  'Agile and responsive business operations',
  'Growth-focused partnership model'
]

export function PartnershipSection() {
  return (
    <section id="partnership" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-primary/5" />
      
      {/* Ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">Partnership</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Strategic Partner in <span className="text-primary">Commercial Mobility</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Auto Victoria Group stands ready to partner with leading commercial vehicle manufacturers 
              such as Isuzu. Our decade of experience, market expertise, and commitment to excellence 
              make us the ideal distribution partner for brands looking to strengthen their presence 
              in Malaysia.
            </p>

            {/* Benefits list */}
            <div className="space-y-4 mb-10">
              {partnerBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-all duration-300"
            >
              Discuss Partnership
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto">
              {/* Main image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Office_1st_Customer_Room_02-lw2Xe4B4KT8t34WDzEY0Ww3IbzxS0e.jpg"
                  alt="Auto Victoria customer lounge"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-xl backdrop-blur-sm"
              >
                <span className="text-2xl font-bold text-primary">Top 3</span>
                <p className="text-xs text-muted-foreground">Dealer Rank</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-xl backdrop-blur-sm"
              >
                <span className="text-2xl font-bold text-primary">10+</span>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
