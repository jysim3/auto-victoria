'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Calendar, Handshake, Truck, Trophy, Users } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const statIcons = [Calendar, Truck, Trophy, Handshake, Users, BadgeCheck]

const copy = {
  en: {
    eyebrow: 'Credibility Check',
    title: 'Established, Local, and Built for Business Buyers',
    intro:
      'Auto Victoria combines showroom presence, commercial vehicle experience, financing support, and long-term customer relationships from Bukit Mertajam, Penang.',
    stats: [
      { value: '2013', label: 'Established', description: 'Over a decade of excellence' },
      {
        value: '300+',
        label: 'Vehicles Sold Yearly',
        description: 'Commercial vehicles delivered for local SMEs, fleet operators, and growing businesses',
      },
      {
        value: '5+',
        label: 'Brand Groups',
        description: 'Daihatsu, Hino, Isuzu, Mitsubishi Fuso, King Long, JBC, Maxus, and selected others',
      },
      {
        value: 'BM',
        label: 'Bukit Mertajam',
        description: 'Located at Jalan Besar Bukit Minyak, Mukim 14, Pulau Pinang',
      },
      {
        value: '100+',
        label: 'Repeat Fleet Units',
        description: 'Major commercial customers have each purchased over 100 units through Auto Victoria',
      },
      {
        value: '3',
        label: 'Languages Supported',
        description: 'Sales support available for English, Bahasa Malaysia, and Chinese-speaking customers',
      },
    ],
  },
  zh: {
    eyebrow: '实力一览',
    title: '扎根本地，专为商业买家而建',
    intro: 'Auto Victoria 结合展厅实力、商用车经验、融资支援与长期客户关系，服务槟城大山脚及周边企业。',
    stats: [
      { value: '2013', label: '创立年份', description: '超过十年的专业积累' },
      {
        value: '300+',
        label: '年销售车辆',
        description: '为本地中小企业、车队营运商与成长型业务交付商用车',
      },
      {
        value: '5+',
        label: '品牌组',
        description: '涵盖 Daihatsu、Hino、Isuzu、Mitsubishi Fuso、King Long、JBC、Maxus 等',
      },
      {
        value: 'BM',
        label: '大山脚',
        description: '位于槟城 Bukit Minyak, Mukim 14, Jalan Besar',
      },
      {
        value: '100+',
        label: '回购车队单位',
        description: '主要商业客户各自通过 Auto Victoria 购买超过 100 辆单位',
      },
      {
        value: '3',
        label: '支持语言',
        description: '销售团队支持英文、马来文与中文客户沟通',
      },
    ],
  },
}

export function GrowthHighlightsSection() {
  const { locale } = useLanguage()
  const text = copy[locale]

  return (
    <section id="growth" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {text.stats.map((stat, index) => {
            const Icon = statIcons[index]

            return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8 h-full hover:border-primary/50 hover:bg-card/50 transition-all duration-500 overflow-hidden">
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Value */}
                <div className="relative">
                  <span className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                    {stat.value}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
