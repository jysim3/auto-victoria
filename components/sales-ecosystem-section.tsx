'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Banknote, ClipboardCheck, Handshake, Settings } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const stepIcons = [Handshake, Banknote, ClipboardCheck, Settings, BadgeCheck]

const copy = {
  en: {
    eyebrow: 'Complete Sales Ecosystem',
    title: 'Built to Convert Demand into Delivered Vehicles',
    intro:
      'Auto Victoria operates as an end-to-end ownership partner, not only a sales counter. Each step is designed to move business customers from first inquiry to completed delivery and after-sales support.',
    steps: [
      {
        number: '01',
        title: 'Sales',
        description: 'Build demand through strong local relationships, fast response, and practical use-case driven recommendations.',
      },
      {
        number: '02',
        title: 'Financing',
        description: 'Convert interest into confirmed purchases through coordinated financing partners and SME affordability support.',
      },
      {
        number: '03',
        title: 'Documentation',
        description: 'Handle compliance and delivery processes including PUSPAKOM inspection, JPJ registration, and ownership transfer.',
      },
      {
        number: '04',
        title: 'Vehicle Setup',
        description: 'Prepare vehicles for real business use with body construction, body repair, and paint services.',
      },
      {
        number: '05',
        title: 'Service',
        description: 'Maintain performance after delivery through servicing access and ongoing maintenance coordination.',
      },
    ],
  },
  zh: {
    eyebrow: '完整销售生态',
    title: '从需求到交车，系统化完成',
    intro: 'Auto Victoria 不只是销售柜台，而是端到端用车伙伴。每一步都帮助商业客户从初次咨询走向完成交付与售后支援。',
    steps: [
      {
        number: '01',
        title: '销售',
        description: '通过稳固本地关系、快速回应与务实用途建议建立需求。',
      },
      {
        number: '02',
        title: '融资',
        description: '通过协调融资伙伴与中小企业负担能力支援，将兴趣转化为确认购买。',
      },
      {
        number: '03',
        title: '文件',
        description: '处理 PUSPAKOM 验车、JPJ 注册与车主转名等合规及交付流程。',
      },
      {
        number: '04',
        title: '车辆配置',
        description: '以车身建造、维修与喷漆服务，准备适合真实商业用途的车辆。',
      },
      {
        number: '05',
        title: '服务',
        description: '交车后通过保养渠道与持续维护协调，维持车辆表现。',
      },
    ],
  },
}

export function SalesEcosystemSection() {
  const { locale } = useLanguage()
  const text = copy[locale]

  return (
    <section id="ecosystem" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute left-0 top-0 h-full w-1/3 bg-primary/90 [clip-path:polygon(0_0,70%_0,100%_100%,0_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/95 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-primary">{text.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              {text.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {text.intro}
            </p>
          </motion.div>

          <div className="grid gap-4">
            {text.steps.map((step, index) => {
              const Icon = stepIcons[index]

              return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group grid gap-5 border border-border bg-card/40 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-primary/50 sm:grid-cols-[72px_1fr]"
              >
                <div className="flex items-center gap-3 sm:block">
                  <span className="block text-2xl font-bold text-primary">{step.number}</span>
                  <div className="mt-0 flex h-10 w-10 items-center justify-center border border-primary/25 bg-primary/10 sm:mt-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
