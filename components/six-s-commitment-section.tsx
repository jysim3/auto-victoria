'use client'

import { motion } from 'framer-motion'
import {
  ClipboardCheck,
  Clock3,
  CreditCard,
  Handshake,
  PackageCheck,
  UserRound,
  Wrench,
} from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const commitmentIcons = [UserRound, Wrench, Clock3, CreditCard, PackageCheck, ClipboardCheck]

const copy = {
  en: {
    eyebrow: 'Company Vision',
    title: '6S Commitment to Excellence',
    intro:
      'Auto Victoria is building a complete commercial vehicle ecosystem around six customer commitments: sales, service, urgent repair support, financing, spare parts, and practical survey advice.',
    closing:
      'Together, the 6S framework defines the company target: a trusted one-stop partner for vehicle ownership, uptime, financing, and long-term business support.',
    commitments: [
      {
        title: 'Sales',
        description: 'Professional consultation that matches each business with the right commercial vehicle solution.',
      },
      {
        title: 'Service',
        description: 'Expert care and reliable support to keep customer vehicles productive after purchase.',
      },
      {
        title: '24/7 Repair Service',
        description: 'Round-the-clock repair support for urgent operational needs and fleet continuity.',
      },
      {
        title: 'Financing',
        description: 'Flexible credit solutions designed to help customers grow with confidence.',
      },
      {
        title: 'Spare Parts',
        description: 'Genuine quality parts for lasting performance, dependable maintenance, and customer peace of mind.',
      },
      {
        title: 'Survey',
        description: 'On-site evaluation and trusted advice before customers commit to their fleet investment.',
      },
    ],
  },
  zh: {
    eyebrow: '公司愿景',
    title: '6S 卓越承诺',
    intro:
      'Auto Victoria 以六大客户承诺建立完整商用车生态：销售、服务、紧急维修支援、融资、零件供应与实地评估建议。',
    closing:
      '6S 框架体现公司的目标：成为车主在购车、营运、融资与长期业务支援上的一站式可靠伙伴。',
    commitments: [
      {
        title: '销售',
        description: '以专业咨询为每一家企业匹配合适的商用车方案。',
      },
      {
        title: '服务',
        description: '提供专业保养与可靠支援，让客户车辆在购车后持续高效运作。',
      },
      {
        title: '24小时维修服务',
        description: '全天候维修支援，协助处理紧急营运需求并维持车队连续性。',
      },
      {
        title: '融资',
        description: '灵活信贷方案，帮助客户更有信心地拓展业务。',
      },
      {
        title: '零件',
        description: '供应可靠优质零件，支持持久性能、稳定维护与安心用车。',
      },
      {
        title: '评估',
        description: '在客户投入车队前提供现场评估与可信建议。',
      },
    ],
  },
}

const companies = [
  {
    name: 'AUTO VICTORIA SDN BHD',
    registration: '1046923-P',
  },
  {
    name: 'AUTO VICTORIA SERVICE CENTRE',
    registration: '202401049886 / 1595730-V',
  },
  {
    name: 'VICTORIA CREDIT SDN BHD',
    registration: '200401033346 / 671854-K',
  },
]

export function SixSCommitmentSection() {
  const { locale } = useLanguage()
  const text = copy[locale]

  return (
    <section id="commitment" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-primary">{text.eyebrow}</span>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {text.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {text.intro}
          </p>
          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {text.commitments.map((item, index) => {
            const Icon = commitmentIcons[index]

            return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex h-full flex-col border border-primary/25 bg-card/25 p-5 text-center backdrop-blur-sm transition-all duration-500 hover:border-primary/60 hover:bg-card/45">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-background/70 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-12 border-y border-primary/25 bg-background/55 backdrop-blur-sm"
        >
          <div className="grid gap-px bg-primary/20 md:grid-cols-3">
            {companies.map((company) => (
              <div key={company.name} className="bg-background/85 px-6 py-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{company.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{company.registration}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-center"
        >
          <Handshake className="h-6 w-6 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {text.closing}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
