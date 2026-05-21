'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Banknote, ClipboardCheck, Handshake, Settings } from 'lucide-react'

const ecosystemSteps = [
  {
    number: '01',
    icon: Handshake,
    title: 'Sales',
    description: 'Build demand through strong local relationships, fast response, and practical use-case driven recommendations.'
  },
  {
    number: '02',
    icon: Banknote,
    title: 'Financing',
    description: 'Convert interest into confirmed purchases through coordinated financing partners and SME affordability support.'
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Documentation',
    description: 'Handle compliance and delivery processes including PUSPAKOM inspection, JPJ registration, and ownership transfer.'
  },
  {
    number: '04',
    icon: Settings,
    title: 'Vehicle Setup',
    description: 'Prepare vehicles for real business use with body construction, body repair, and paint services.'
  },
  {
    number: '05',
    icon: BadgeCheck,
    title: 'Service',
    description: 'Maintain performance after delivery through servicing access and ongoing maintenance coordination.'
  },
]

export function SalesEcosystemSection() {
  return (
    <section id="ecosystem" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute left-0 top-0 h-full w-1/3 bg-primary/90 [clip-path:polygon(0_0,70%_0,100%_100%,0_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/95 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-primary">Complete Sales Ecosystem</span>
            <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              Built to Convert Demand into Delivered Vehicles
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Auto Victoria operates as an end-to-end ownership partner, not only a sales counter. Each step is designed
              to move business customers from first inquiry to completed delivery and after-sales support.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {ecosystemSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group grid gap-5 border border-border bg-card/40 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-primary/50 sm:grid-cols-[72px_1fr]"
              >
                <div className="flex items-center gap-3 sm:block">
                  <span className="block text-2xl font-bold text-primary">{step.number}</span>
                  <div className="mt-0 flex h-10 w-10 items-center justify-center border border-primary/25 bg-primary/10 sm:mt-4">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
