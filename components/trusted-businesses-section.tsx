'use client'

import { motion } from 'framer-motion'

const customers = [
  {
    name: 'Banchuan Agency',
    category: 'Logistic & Distribution Operator',
    units: '100+ units'
  },
  {
    name: 'Uni Distribution',
    category: 'Regional Supply Chain Partner',
    units: '100+ units'
  },
  {
    name: 'Asia Power',
    category: 'Industrial & Equipment Transport',
    units: '100+ units'
  },
]

export function TrustedBusinessesSection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-secondary/10" />
      <div className="absolute right-0 top-0 h-full w-24 bg-primary/90 [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)] md:w-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-primary">Trusted by Businesses</span>
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Commercial Customers Rely on Auto Victoria for Practical, Fast Support
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Auto Victoria serves a growing base of logistics, construction, trading, and transportation customers,
            from first-time business owners to established fleet operators.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {customers.map((customer, index) => (
            <motion.div
              key={customer.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-border bg-card/40 p-7 backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-primary">{customer.units}</p>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{customer.name}</h3>
              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-muted-foreground">{customer.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
