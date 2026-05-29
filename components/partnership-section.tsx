'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const copy = {
  en: {
    eyebrow: 'Partnership',
    titlePrefix: 'Your Strategic Partner in',
    titleHighlight: 'Commercial Mobility',
    intro:
      'AUTO VICTORIA SDN BHD is a trusted commercial vehicle sales company with Daihatsu as its current main dealership. Auto Victoria is ready to support the next stage of commercial vehicle growth with local market relationships, sales capability, financing support, multilingual sales communication, and a customer-first ownership model.',
    cta: 'WhatsApp Auto Victoria',
    dealerRank: 'Dealer Rank',
    yearsEstablished: 'Years Established',
    benefits: [
      'Commercial vehicle market experience from Bukit Mertajam, Pulau Pinang',
      'Proven track record with 300+ commercial vehicles sold yearly',
      'Comprehensive after-sales support network',
      'PUSPAKOM, JPJ, registration, licensing, insurance, and credit support',
      'Trusted by Banchuan Agency, Uni Distribution, Asia Power, LT Plus, Warisan Ali Group Sdn Bhd, and others',
      'Cooperation, mutual success, trust, and efficiency',
    ],
  },
  zh: {
    eyebrow: '合作伙伴',
    titlePrefix: '您的商用车战略伙伴',
    titleHighlight: '共创商业出行价值',
    intro:
      'AUTO VICTORIA SDN BHD 是值得信赖的商用车销售公司，目前以 Daihatsu 为主要代理品牌。Auto Victoria 凭借本地市场关系、销售能力、融资支援、多语言沟通与客户优先的用车模式，支持商用车业务的下一阶段增长。',
    cta: 'WhatsApp 联系 Auto Victoria',
    dealerRank: '代理排名',
    yearsEstablished: '创立年资',
    benefits: [
      '来自槟城大山脚的商用车市场经验',
      '每年销售 300+ 商用车的实际记录',
      '完整售后支援网络',
      'PUSPAKOM、JPJ、注册、执照、保险与信贷支援',
      '受 Banchuan Agency、Uni Distribution、Asia Power、LT Plus、Warisan Ali Group Sdn Bhd 等客户信任',
      '合作、共赢、信任与效率',
    ],
  },
}

const whatsappHref = 'https://wa.me/60135253333?text=Hi%20Auto%20Victoria%2C%20I%27d%20like%20to%20discuss%20a%20commercial%20vehicle%20or%20dealership%20partnership%20opportunity.'

export function PartnershipSection() {
  const { locale } = useLanguage()
  const text = copy[locale]

  return (
    <section id="partnership" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-primary/5" />
      
      {/* Ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">{text.eyebrow}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {text.titlePrefix} <span className="text-primary">{text.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {text.intro}
            </p>

            {/* Benefits list */}
            <div className="space-y-4 mb-10">
              {text.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={whatsappHref}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-all duration-300"
            >
              {text.cta}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto">
              {/* Main image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Office_1st_Customer_Room_02-lw2Xe4B4KT8t34WDzEY0Ww3IbzxS0e.jpg"
                  alt="Auto Victoria customer lounge"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-xl backdrop-blur-sm"
              >
                <span className="text-2xl font-bold text-primary">Top 3</span>
                <p className="text-xs text-muted-foreground">{text.dealerRank}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-xl backdrop-blur-sm"
              >
                <span className="text-2xl font-bold text-primary">10+</span>
                <p className="text-xs text-muted-foreground">{text.yearsEstablished}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
