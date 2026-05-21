'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Calendar, Handshake, Truck, Trophy, Users } from 'lucide-react'

const stats = [
  {
    icon: Calendar,
    value: '2013',
    label: 'Established',
    description: 'Over a decade of excellence'
  },
  {
    icon: Truck,
    value: '300+',
    label: 'Vehicles Sold Yearly',
    description: 'Trusted by businesses across Malaysia'
  },
  {
    icon: Trophy,
    value: 'Top 3',
    label: 'Daihatsu Dealer',
    description: 'In Malaysia within 1 year'
  },
  {
    icon: Handshake,
    value: 'Trusted',
    label: 'Commercial Partners',
    description: 'Serving Banchuan Agency, Uni Distribution, Asia Power, LT Plus, Warisan Ali Group Sdn Bhd, and others'
  },
  {
    icon: Users,
    value: '2000+',
    label: 'Business Customers',
    description: 'A growing base across logistics, construction, trading, and transportation'
  },
  {
    icon: BadgeCheck,
    value: 'MOF',
    label: 'Registered Dealer',
    description: 'Licensed to participate in Malaysia government procurement'
  },
]

export function GrowthHighlightsSection() {
  return (
    <section id="growth" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">By The Numbers</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Growth That Speaks
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Our achievements reflect our commitment to excellence and the trust our customers place in us.
          </p>
          
          {/* Gold divider */}
          <div className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8 h-full hover:border-primary/50 hover:bg-card/50 transition-all duration-500 overflow-hidden">
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Value */}
                <div className="relative">
                  <span className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                    {stat.value}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
