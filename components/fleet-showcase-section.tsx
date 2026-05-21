'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const showcaseImages = [
  {
    src: 'https://static.wixstatic.com/media/dbadab_bad8cfd296f545a9abc6101b87d1c9fd~mv2.png/v1/fill/w_400,h_262,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/mobilecafe-master2.png',
    alt: 'Daihatsu Gran Max commercial vehicle',
    title: 'Daihatsu Gran Max',
    description: 'Pickup and van range from RM 63,388'
  },
  {
    src: 'https://static.wixstatic.com/media/dbadab_6ad2488ddb4f4d87b988a9a86a270b2b~mv2.png/v1/crop/x_0,y_11,w_520,h_429/fill/w_372,h_308,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BLANCK_edited.png',
    alt: 'Hino 300 Series truck',
    title: 'Hino 300 Series',
    description: 'Light-duty trucks from RM 92,000'
  },
  {
    src: 'https://static.wixstatic.com/media/dbadab_ee98160f375b4ccd8093569bc3186264~mv2.png/v1/crop/x_476,y_290,w_610,h_400/fill/w_400,h_262,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/FUSO%20BLANK.png',
    alt: 'Mitsubishi Fuso FE Series truck',
    title: 'Mitsubishi Fuso FE Series',
    description: 'Canter FE trucks from RM 90,800'
  },
  {
    src: 'https://static.wixstatic.com/media/dbadab_48724441551e45c6b25d6e1f6c65685a~mv2.png/v1/fill/w_400,h_262,al_c,lg_1,q_85,enc_avif,quality_auto/nprnqrpro-thumbnail.png',
    alt: 'Isuzu ELF commercial truck',
    title: 'Isuzu ELF Series',
    description: 'Commercial trucks from RM 92,500'
  },
  {
    src: 'https://static.wixstatic.com/media/dbadab_7edc2e510f6d435e80f1710ac4e00d41~mv2.png/v1/crop/x_4,y_0,w_502,h_340/fill/w_462,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/placer-x%20resized-cutout.png',
    alt: 'Maxus commercial vehicle',
    title: 'Other Brands',
    description: 'King Long, JBC, Maxus, and selected commercial vehicles'
  },
]

export function FleetShowcaseSection() {
  return (
    <section id="brands" className="relative py-24 overflow-hidden">
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
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">Brand Lineup</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Commercial Vehicles on the Lot
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            The current reference site presents Daihatsu, Hino, Isuzu, Mitsubishi Fuso, and selected other
            commercial brands including King Long, JBC, and Maxus.
          </p>
          
          {/* Gold divider */}
          <div className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {showcaseImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="overflow-hidden rounded-xl border border-border bg-card/30 transition-colors duration-500 group-hover:border-primary/30">
                <div className="relative aspect-[4/3] bg-background/50">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain p-5 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="border-t border-border bg-card/70 p-5">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {image.title}
                  </h3>
                  <p className="mt-2 min-h-10 text-sm leading-relaxed text-muted-foreground">
                    {image.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
