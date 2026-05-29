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
import { useLanguage } from '@/components/language-provider'

const serviceIcons = [Car, CreditCard, Shield, FileCheck, FileText, Wrench, Hammer, Users]

const copy = {
  en: {
    eyebrow: 'Dealership Ecosystem',
    title: 'Complete Business Solutions',
    intro:
      'From vehicle acquisition to ongoing maintenance, we provide a comprehensive ecosystem of services designed to keep your fleet running smoothly.',
    services: [
      {
        title: 'Vehicle Sales',
        description: 'New and used commercial vehicles, with Daihatsu as the current main dealership',
      },
      {
        title: 'Credit & Financing',
        description: 'Flexible financing solutions and credit services tailored to your business needs',
      },
      { title: 'Insurance', description: 'Comprehensive motor and non-motor insurance packages for complete protection' },
      {
        title: 'PUSPAKOM Inspection',
        description: 'Inspection service support for commercial vehicles purchased from Auto Victoria',
      },
      { title: 'JPJ Services', description: 'Road tax renewal, ownership transfer, registration, and licensing support' },
      { title: 'Service Centre', description: 'Easy access to servicing through the same company after vehicle purchase' },
      { title: 'Body Construction', description: 'Custom body construction, body repair, and body and paint services' },
      {
        title: 'After-Sales Support',
        description: 'Dedicated long-term customer support through professional service and transparent operations',
      },
    ],
  },
  zh: {
    eyebrow: '经销生态',
    title: '完整商业方案',
    intro: '从购车到持续维护，我们提供完整服务生态，协助您的车队顺畅运作。',
    services: [
      { title: '车辆销售', description: '全新与二手商用车销售，目前以 Daihatsu 为主要代理品牌' },
      { title: '信贷与融资', description: '根据企业需求定制灵活融资方案与信贷服务' },
      { title: '保险', description: '完整车险与非车险配套，提供周全保障' },
      { title: 'PUSPAKOM 验车', description: '为通过 Auto Victoria 购买的商用车提供验车支援' },
      { title: 'JPJ 服务', description: '路税更新、车主转名、注册与执照支援' },
      { title: '服务中心', description: '购车后可通过同一公司便捷获得保养服务' },
      { title: '车身建造', description: '定制车身建造、车身维修、车身与喷漆服务' },
      { title: '售后支援', description: '以专业服务与透明运营提供长期客户支援' },
    ],
  },
}

export function ServicesSection() {
  const { locale } = useLanguage()
  const text = copy[locale]

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
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">{text.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {text.title}
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            {text.intro}
          </p>
          
          {/* Gold divider */}
          <div className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {text.services.map((service, index) => {
            const Icon = serviceIcons[index]

            return (
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
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
