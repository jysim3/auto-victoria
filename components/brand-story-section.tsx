'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const timeline = [
  {
    year: '2004-2006',
    title: 'Customer Service Foundation',
    description: 'The founder built early frontline experience as a hairstylist, developing the service mindset and relationship skills that later shaped the company.'
  },
  {
    year: '2007-2008',
    title: 'Dealership Exposure',
    description: 'Through Sun Lean Auto, a small new and used commercial vehicle dealer, the founder gained exposure to Isuzu dealership operations in 2007 and Honda dealership operations in 2008.'
  },
  {
    year: '2013',
    title: 'Auto Victoria Established',
    description: 'AUTO VICTORIA SDN BHD was established in Bukit Mertajam, Penang as a used commercial vehicle dealer, supplying carefully selected pre-owned vans and trucks to businesses.'
  },
  {
    year: 'Growth',
    title: 'New Vehicle Sales',
    description: 'As demand grew, the business expanded from used commercial vehicles into new van and truck sales, serving agriculture, logistics, construction, trading, and transportation sectors.'
  },
  {
    year: 'Daihatsu',
    title: 'Main Dealership',
    description: "Daihatsu is currently Auto Victoria's main dealership, supported by sales, servicing access, inspection, registration, licensing, insurance, and credit services."
  },
  {
    year: 'Today',
    title: 'Trusted Partner',
    description: 'Recognised as a trusted commercial vehicle dealership with over 300 commercial vehicles sold yearly and major partners including Banchuan Agency, Uni Distribution, Asia Power, LT Plus, and Warisan Ali Group Sdn Bhd.'
  },
]

const principles = [
  {
    title: 'Vision',
    description: 'To become a leading truck dealership known for reliability, service excellence, and customer-focused solutions in Malaysia and beyond.'
  },
  {
    title: 'Mission',
    description: 'To deliver reliable commercial vehicles, provide professional after-sales support, and serve customers with integrity and efficiency.'
  },
  {
    title: 'Core Values',
    description: 'Cooperation, mutual success, trust, and efficiency guide the way Auto Victoria builds long-term customer relationships.'
  },
]

export function BrandStorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">Our Journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            A Decade of Building Trust
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            From early customer-service experience to a growing commercial vehicle dealership, 
            our journey is defined by practical exposure, dedication, and long-term customer support.
          </p>
          
          {/* Gold divider */}
          <div className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          
          {/* Gold progress line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-primary to-transparent md:-translate-x-px"
          />

          <div className="space-y-12 md:space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year badge */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/30 transition-colors duration-500">
                    <span className="text-primary text-3xl md:text-4xl font-bold">{item.year}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
