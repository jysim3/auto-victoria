'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/components/language-provider'

const copy = {
  en: {
    eyebrow: 'Our Journey',
    title: 'A Decade of Building Trust',
    intro:
      'From early customer-service experience to an established commercial vehicle dealership, our journey is defined by practical know-how, trusted relationships, and long-term support.',
    principles: [
      {
        title: 'Vision',
        description: 'To become a leading truck dealership known for reliability, service excellence, and customer-focused solutions in Malaysia and beyond.',
      },
      {
        title: 'Mission',
        description: 'To deliver reliable commercial vehicles, provide professional after-sales support, and serve customers with integrity and efficiency.',
      },
      {
        title: 'Core Values',
        description: 'Cooperation, mutual success, trust, and efficiency guide the way Auto Victoria builds long-term customer relationships.',
      },
    ],
    timeline: [
      {
        year: '2004-2006',
        title: 'Customer Service Foundation',
        description:
          'The founder built early frontline experience as a hairstylist, developing the service mindset and relationship skills that later shaped the company.',
      },
      {
        year: '2007-2008',
        title: 'Dealership Exposure',
        description:
          'Through Sun Lean Auto, a small new and used commercial vehicle dealer, the founder gained exposure to Isuzu dealership operations in 2007 and Honda dealership operations in 2008.',
      },
      {
        year: '2013',
        title: 'Auto Victoria Established',
        description:
          'AUTO VICTORIA SDN BHD was established in Bukit Mertajam, Penang as a used commercial vehicle dealer, supplying carefully selected pre-owned vans and trucks to businesses.',
      },
      {
        year: 'Growth',
        title: 'New Vehicle Sales',
        description:
          'As demand grew, the business expanded from used commercial vehicles into new van and truck sales, serving agriculture, logistics, construction, trading, and transportation sectors.',
      },
      {
        year: 'Daihatsu',
        title: 'Main Dealership',
        description:
          "Daihatsu is currently Auto Victoria's main dealership, supported by sales, servicing access, inspection, registration, licensing, insurance, and credit services.",
      },
      {
        year: 'Today',
        title: 'Trusted Partner',
        description:
          'Recognised as a trusted commercial vehicle dealership with over 300 commercial vehicles sold yearly and major customers including Banchuan Agency, Uni Distribution, Asia Power, LT Plus, and Warisan Ali Group Sdn Bhd.',
      },
    ],
  },
  zh: {
    eyebrow: '我们的旅程',
    title: '十年积累，信任为本',
    intro: '从早期客户服务经验到成熟商用车经销商，我们的成长源于务实经验、可信关系与长期支援。',
    principles: [
      {
        title: '愿景',
        description: '成为马来西亚及更广区域内以可靠、卓越服务与客户导向方案闻名的领先货车经销商。',
      },
      {
        title: '使命',
        description: '交付可靠商用车，提供专业售后支援，并以诚信与效率服务客户。',
      },
      {
        title: '核心价值',
        description: '合作、共赢、信任与效率，指引 Auto Victoria 建立长期客户关系。',
      },
    ],
    timeline: [
      {
        year: '2004-2006',
        title: '客户服务基础',
        description: '创办人早期作为发型师累积一线服务经验，培养了后来塑造公司的服务意识与关系经营能力。',
      },
      {
        year: '2007-2008',
        title: '汽车经销经验',
        description: '通过 Sun Lean Auto 这家小型新旧商用车经销商，创办人于 2007 年接触 Isuzu 代理营运，并于 2008 年接触 Honda 代理营运。',
      },
      {
        year: '2013',
        title: 'Auto Victoria 成立',
        description: 'AUTO VICTORIA SDN BHD 于槟城大山脚成立，起步为二手商用车经销商，为企业供应严选二手厢式车与货车。',
      },
      {
        year: '成长',
        title: '新车销售',
        description: '随着需求增长，公司从二手商用车扩展至全新厢式车与货车销售，服务农业、物流、建筑、贸易与运输行业。',
      },
      {
        year: 'Daihatsu',
        title: '主要代理品牌',
        description: 'Daihatsu 目前是 Auto Victoria 的主要代理品牌，并由销售、保养、验车、注册、执照、保险与信贷服务支持。',
      },
      {
        year: '今日',
        title: '可信赖伙伴',
        description: 'Auto Victoria 已成为值得信赖的商用车经销商，每年销售超过 300 辆商用车，主要客户包括 Banchuan Agency、Uni Distribution、Asia Power、LT Plus 与 Warisan Ali Group Sdn Bhd。',
      },
    ],
  },
}

export function BrandStorySection() {
  const { locale } = useLanguage()
  const text = copy[locale]
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

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {text.principles.map((item, index) => (
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
            {text.timeline.map((item, index) => (
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
