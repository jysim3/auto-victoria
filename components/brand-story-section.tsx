'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const timeline = [
  {
    year: '2013',
    title: 'The Foundation',
    description: 'AUTO VICTORIA SDN BHD was established in Bukit Mertajam, Penang as a used commercial vehicle dealer, supplying carefully selected pre-owned vans and trucks to businesses.'
  },
  {
    year: '2015',
    title: 'Service Expansion',
    description: 'Expanded operations to include comprehensive after-sales support, PUSPAKOM inspection services, and JPJ registration assistance.'
  },
  {
    year: '2018',
    title: 'New Vehicle Sales',
    description: 'Transitioned from used vehicles to new van and truck sales, partnering with Daihatsu to serve logistics, construction, trading, and transportation sectors.'
  },
  {
    year: '2019',
    title: 'Top 3 Achievement',
    description: 'Achieved Top 3 Daihatsu Dealer status in Malaysia within just one year of signing the dealership agreement.'
  },
  {
    year: 'Today',
    title: 'Trusted Partner',
    description: 'Recognised as a trusted commercial vehicle dealership with over 300 vehicles sold yearly and 2000+ business customers, serving major partners including Banchuan Agency, Uni Distribution, and Asia Power.'
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
            From humble beginnings to becoming one of Malaysia&apos;s most trusted commercial vehicle dealerships, 
            our journey is defined by dedication, growth, and unwavering commitment to our customers.
          </p>
          
          {/* Gold divider */}
          <div className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

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
