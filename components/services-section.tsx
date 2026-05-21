'use client'

import { motion } from 'framer-motion'
import { 
  Car, 
  CreditCard, 
  Shield, 
  FileCheck, 
  FileText, 
  Wrench, 
  Hammer, 
  Users 
} from 'lucide-react'

const services = [
  {
    icon: Car,
    title: 'Vehicle Sales',
    description: 'New and used commercial vehicles, with Daihatsu as the current main dealership'
  },
  {
    icon: CreditCard,
    title: 'Credit & Financing',
    description: 'Flexible financing solutions and credit services tailored to your business needs'
  },
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Comprehensive motor and non-motor insurance packages for complete protection'
  },
  {
    icon: FileCheck,
    title: 'PUSPAKOM Inspection',
    description: 'Inspection service support for commercial vehicles purchased from Auto Victoria'
  },
  {
    icon: FileText,
    title: 'JPJ Services',
    description: 'Road tax renewal, ownership transfer, registration, and licensing support'
  },
  {
    icon: Wrench,
    title: 'Service Centre',
    description: 'Easy access to servicing through the same company after vehicle purchase'
  },
  {
    icon: Hammer,
    title: 'Body Construction',
    description: 'Custom body construction, body repair, and body and paint services'
  },
  {
    icon: Users,
    title: 'After-Sales Support',
    description: 'Dedicated long-term customer support through professional service and transparent operations'
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Side accents */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent ml-[5%]" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent mr-[5%]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">Dealership Ecosystem</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Complete Business Solutions
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            From vehicle acquisition to ongoing maintenance, we provide a comprehensive ecosystem 
            of services designed to keep your fleet running smoothly.
          </p>
          
          {/* Gold divider */}
          <div className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-card/20 backdrop-blur-sm border border-border rounded-lg p-6 h-full hover:border-primary/40 hover:bg-card/40 transition-all duration-500">
                {/* Icon container */}
                <div className="mb-5">
                  <div className="w-12 h-12 rounded-lg bg-secondary/50 border border-border flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
                    <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
