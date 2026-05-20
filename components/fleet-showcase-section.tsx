'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const showcaseImages = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Photo%2020-9-18%2C%2014%2028%2026-ZBPNC2zlDvIHQAW1OlQd2nqMMJt5kn.jpg',
    alt: 'Fleet inventory of commercial vans',
    title: 'Extensive Inventory',
    description: 'Ready-to-deliver commercial vehicles'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Workshop_Parking_Space_02-OnSMfKSVyZyS4mikKBuMQIf20bHr9z.jpg',
    alt: 'Service workshop facility',
    title: 'Service Facility',
    description: 'Professional maintenance and repairs'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OutSide_02_Night%20%281%29-EIAv8j2g5DSyMeElrX9E3WYO8mi3gk.jpg',
    alt: 'Dealership exterior at night',
    title: 'Modern Dealership',
    description: 'State-of-the-art facilities'
  },
]

export function FleetShowcaseSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">Our Facilities</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Built for Scale
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            From our expansive vehicle inventory to our professional service center, 
            we have the infrastructure to support your commercial fleet needs.
          </p>
          
          {/* Gold divider */}
          <div className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showcaseImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {image.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {image.description}
                  </p>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
