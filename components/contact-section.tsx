'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Languages, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const whatsappHref = 'https://wa.me/60135253333?text=Hi%20Auto%20Victoria%2C%20I%27d%20like%20to%20ask%20about%20commercial%20vehicles.%20My%20business%20needs%3A'

const contactIcons = [MapPin, Phone, Phone, Mail, Phone, Languages]

const copy = {
  en: {
    eyebrow: 'Get In Touch',
    title: 'Speak Directly with Auto Victoria',
    intro:
      'For vehicle inquiries, fleet needs, after-sales support, or dealership partnership discussions, call or WhatsApp the Bukit Mertajam team directly.',
    mapLabel: 'Bukit Minyak, Bukit Mertajam, Pulau Pinang',
    responseEyebrow: 'Fastest Response',
    responseTitle: 'Start with WhatsApp or a phone call',
    responseText:
      'Share the vehicle type, business use case, and timing. The team can guide options for sales, financing, insurance, PUSPAKOM, JPJ, and after-sales support.',
    whatsapp: 'WhatsApp Sales',
    callMobile: 'Call Mobile',
    callOffice: 'Call Office',
    email: 'Email',
    helpfulDetails: 'Helpful details to send',
    contactInfo: [
      {
        label: 'Location',
        value: 'No. 1857, MK 14 Jalan Besar Bukit Minyak',
        detail: '14000 Bukit Mertajam, Pulau Pinang',
      },
      { label: 'Phone', value: '04-5082 333', detail: 'Main office line' },
      { label: 'Mobile', value: '013-525 3333', detail: 'Call or WhatsApp sales' },
      { label: 'Email', value: 'sptan@autovictoria.com.my', detail: 'Business inquiries' },
      { label: 'Fax', value: '04-5025 333', detail: 'Office fax' },
      { label: 'Languages', value: 'EN / BM / 中文', detail: 'Sales support for local business buyers' },
    ],
    inquirySteps: [
      'Vehicle type or body style needed',
      'Business use case and load requirements',
      'Financing, insurance, JPJ, or PUSPAKOM support',
      'Preferred delivery timing',
    ],
  },
  zh: {
    eyebrow: '联系我们',
    title: '直接联系 Auto Victoria 团队',
    intro: '无论是车辆咨询、车队需求、售后支援或代理合作讨论，欢迎直接致电或 WhatsApp 大山脚团队。',
    mapLabel: '槟城大山脚 Bukit Minyak',
    responseEyebrow: '最快回应',
    responseTitle: '从 WhatsApp 或电话开始',
    responseText:
      '请分享所需车型、业务用途与时间安排。团队可协助销售、融资、保险、PUSPAKOM、JPJ 与售后支援等选项。',
    whatsapp: 'WhatsApp 销售咨询',
    callMobile: '拨打手机',
    callOffice: '拨打办公室',
    email: '电邮',
    helpfulDetails: '建议提供的资料',
    contactInfo: [
      {
        label: '地址',
        value: 'No. 1857, MK 14 Jalan Besar Bukit Minyak',
        detail: '14000 Bukit Mertajam, Pulau Pinang',
      },
      { label: '电话', value: '04-5082 333', detail: '办公室主线' },
      { label: '手机', value: '013-525 3333', detail: '致电或 WhatsApp 销售团队' },
      { label: '电邮', value: 'sptan@autovictoria.com.my', detail: '商业咨询' },
      { label: '传真', value: '04-5025 333', detail: '办公室传真' },
      { label: '语言', value: 'EN / BM / 中文', detail: '支持本地商业买家沟通' },
    ],
    inquirySteps: ['所需车型或车厢形式', '业务用途与载重需求', '融资、保险、JPJ 或 PUSPAKOM 支援', '预计交车时间'],
  },
}

export function ContactSection() {
  const { locale } = useLanguage()
  const text = copy[locale]

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />

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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid xl:grid-cols-2 gap-6">
              {text.contactInfo.map((item, index) => {
                const Icon = contactIcons[index]

                return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-5 p-6 bg-card/20 backdrop-blur-sm border border-border rounded-lg hover:border-primary/40 hover:bg-card/40 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-lg bg-secondary/50 border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
                    <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <p className="text-lg font-semibold text-foreground mt-1">{item.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                  </div>
                </motion.div>
                )
              })}
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="aspect-video bg-card/20 backdrop-blur-sm border border-border rounded-lg overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">{text.mapLabel}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Inquiry Actions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 lg:p-10">
              <span className="text-xs uppercase tracking-[0.24em] text-primary">{text.responseEyebrow}</span>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">{text.responseTitle}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {text.responseText}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={whatsappHref}
                  className="group inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-6 py-4 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90"
                >
                  <MessageCircle size={18} />
                  {text.whatsapp}
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="tel:60135253333"
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-primary/40 px-6 py-4 font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  <Phone size={18} />
                  {text.callMobile}
                </a>
                <a
                  href="tel:045082333"
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-border px-6 py-4 font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  <Phone size={18} />
                  {text.callOffice}
                </a>
                <a
                  href="mailto:sptan@autovictoria.com.my?subject=Vehicle%20Inquiry%20from%20Auto%20Victoria%20Website"
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-border px-6 py-4 font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  <Mail size={18} />
                  {text.email}
                </a>
              </div>

              <div className="mt-8 border-t border-border pt-8">
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">{text.helpfulDetails}</h4>
                <div className="mt-5 grid gap-3">
                  {text.inquirySteps.map((step) => (
                    <div key={step} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
