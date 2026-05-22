'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const brandGroups = [
  {
    brand: 'Hino',
    image: 'https://static.wixstatic.com/media/dbadab_38b9cc9032b94c668dd54438e7e2d090~mv2.jpg/v1/crop/x_0,y_2,w_557,h_446/fill/w_668,h_535,al_c,lg_1,q_80,enc_avif,quality_auto/HINO%20300.jpg',
    alt: 'Hino 300 Series commercial truck',
    summary: 'HINO 300 Series light-duty trucks',
    models: [
      'XZU600J',
      'XZU600K',
      'XZU640K',
      'XZU710K',
      'XZU720K',
      'XZU710L',
      'XZU720L',
      'XZU730L',
      'XZU720LA',
      'XZU730LA',
      'XZU720LC',
      'XZU720L8',
      'XZU730L8',
    ],
  },
  {
    brand: 'Isuzu',
    image: 'https://static.wixstatic.com/media/dbadab_48724441551e45c6b25d6e1f6c65685a~mv2.png/v1/crop/x_9,y_31,w_284,h_233/fill/w_396,h_326,al_c,lg_1,q_85,enc_avif,quality_auto/nprnqrpro-thumbnail.png',
    alt: 'Isuzu ELF commercial truck',
    summary: 'ELF truck range and D-Max listings',
    models: [
      'NLR PRO & NLR 130',
      'NPR PRO',
      'NPR 150 & NQR PRO',
      'Isuzu D-Max Premium',
      'Isuzu D-Max Type B',
    ],
  },
  {
    brand: 'Daihatsu',
    image: 'https://static.wixstatic.com/media/dbadab_47628464464648b28342db9fe7010758~mv2.png/v1/crop/x_0,y_34,w_846,h_573/fill/w_680,h_454,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/mobilecafe-master2.png',
    alt: 'Daihatsu Gran Max mobile cafe commercial vehicle',
    summary: 'Gran Max pickup and van conversion range',
    models: [
      'Steel Cargo',
      'Mobile Cafe',
      'Mobile Stage',
      'Hawker Van',
      'Wooden Cargo',
      'Utility Pick Up',
      'Luton Box',
      'Aluminium Hawker Van',
      'Chiller Van',
      'Panel Van (Manual)',
      'Semi Panel Van (Manual)',
      'Panel Van (Auto)',
      'Semi Panel Van (Auto)',
      'Security Van',
      'Utility Van',
      'Pest Control Van',
    ],
  },
  {
    brand: 'Mitsubishi Fuso',
    image: 'https://static.wixstatic.com/media/dbadab_ee98160f375b4ccd8093569bc3186264~mv2.png/v1/crop/x_498,y_280,w_571,h_422/fill/w_632,h_454,al_c,lg_1,q_85,enc_avif,quality_auto/FUSO%20BLANK.png',
    alt: 'Mitsubishi Fuso FE Series truck',
    summary: 'Canter FE Series commercial truck line',
    models: ['FUSO FE Series'],
  },
  {
    brand: 'Other Brands',
    image: 'https://static.wixstatic.com/media/dbadab_a10b10db0f744b2d897bd83521f0d237~mv2.jpg/v1/fill/w_978,h_565,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MAXUS%20V80.jpg',
    alt: 'Maxus V80 commercial vehicle',
    summary: 'Additional brands and vehicles listed on the legacy site',
    models: ['JBC', 'Placer-X', 'Maxus V80', 'King Long'],
  },
]

const sitePhotos = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OutSide_03_Night-Bb6m3kv3o8vW9ylPBdxWxa225y3lub.jpg',
    alt: 'Auto Victoria dealership exterior at night',
    label: 'Showroom exterior',
  },
  {
    src: 'https://static.wixstatic.com/media/dbadab_47628464464648b28342db9fe7010758~mv2.png/v1/crop/x_0,y_34,w_846,h_573/fill/w_680,h_454,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/mobilecafe-master2.png',
    alt: 'Daihatsu Gran Max mobile cafe conversion',
    label: 'Body conversions',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Office_1st_Customer_Room_02-lw2Xe4B4KT8t34WDzEY0Ww3IbzxS0e.jpg',
    alt: 'Auto Victoria customer room',
    label: 'Consultation space',
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
            The legacy Auto Victoria site listed these brand pages, truck models, body styles, and other
            commercial vehicles across its Hino, Isuzu, Daihatsu, Mitsubishi Fuso, and Other Brand sections.
          </p>
          
          {/* Gold divider */}
          <div className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {sitePhotos.map((photo, index) => (
            <motion.div
              key={photo.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative min-h-72 overflow-hidden rounded-lg border border-border bg-card/40"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-transparent" />
              <p className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                {photo.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {brandGroups.map((group, index) => (
            <motion.div
              key={group.brand}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="grid h-full overflow-hidden rounded-lg border border-border bg-card/30 transition-colors duration-500 group-hover:border-primary/30 sm:grid-cols-[240px_1fr]">
                <div className="relative min-h-56 bg-background/50">
                  <Image
                    src={group.image}
                    alt={group.alt}
                    fill
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="border-t border-border bg-card/70 p-6 sm:border-l sm:border-t-0">
                  <p className="text-xs uppercase tracking-[0.22em] text-primary">Brand</p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {group.brand}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {group.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.models.map((model) => (
                      <span
                        key={model}
                        className="border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
