'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'

const copy = {
  en: {
    eyebrow: 'Trusted by Businesses',
    title: 'Commercial Customers Rely on Auto Victoria for Practical, Fast Support',
    intro:
      'Auto Victoria serves a growing base of logistics, construction, trading, and transportation customers, from first-time business owners to established fleet operators.',
    customers: [
      { name: 'Banchuan Agency', category: 'Logistic & Distribution Operator', units: '100+ units' },
      { name: 'Uni Distribution', category: 'Regional Supply Chain Partner', units: '100+ units' },
      { name: 'Asia Power', category: 'Industrial & Equipment Transport', units: '100+ units' },
    ],
  },
  zh: {
    eyebrow: '企业信赖',
    title: '商业客户选择 Auto Victoria 的务实与快速支援',
    intro: 'Auto Victoria 服务持续增长的物流、建筑、贸易与运输客户群，从首次购车的业主到成熟车队营运商。',
    customers: [
      { name: 'Banchuan Agency', category: '物流与配送营运商', units: '100+ 辆' },
      { name: 'Uni Distribution', category: '区域供应链伙伴', units: '100+ 辆' },
      { name: 'Asia Power', category: '工业与设备运输', units: '100+ 辆' },
    ],
  },
}

export function TrustedBusinessesSection() {
  const { locale } = useLanguage()
  const text = copy[locale]

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
          <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-primary">{text.eyebrow}</span>
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            {text.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {text.intro}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {text.customers.map((customer, index) => (
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
