'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

const footerLinks = {
  en: {
    companyHeading: 'Company',
    servicesHeading: 'Services',
    contactHeading: 'Contact',
    blurb:
      'AUTO VICTORIA SDN BHD is an established commercial vehicle dealer for vans, trucks, financing, registration support, and after-sales coordination in Bukit Mertajam, Pulau Pinang.',
    rights: 'All rights reserved.',
    languageLine: 'Commercial vehicle support in English, Bahasa Malaysia, and Chinese',
    company: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Vehicles & Brands', href: '/vehicles' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Vehicle Sales', href: '/services' },
      { name: 'PUSPAKOM Inspection', href: '/services' },
      { name: 'JPJ Services', href: '/services' },
      { name: 'Body & Paint', href: '/services' },
    ],
    contact: [
      { name: 'Tel: 04-5082 333', href: 'tel:045082333' },
      { name: 'Mobile: 013-525 3333', href: 'tel:60135253333' },
      { name: 'WhatsApp Sales', href: 'https://wa.me/60135253333?text=Hi%20Auto%20Victoria%2C%20I%27d%20like%20to%20ask%20about%20commercial%20vehicles.' },
      { name: 'Fax: 04-5025 333', href: '/contact' },
      { name: 'sptan@autovictoria.com.my', href: 'mailto:sptan@autovictoria.com.my' },
    ],
  },
  zh: {
    companyHeading: '公司',
    servicesHeading: '服务',
    contactHeading: '联系',
    blurb:
      'AUTO VICTORIA SDN BHD 是大山脚、槟城成熟的商用车经销商，提供厢式车、货车、融资、注册支援与售后协调。',
    rights: '版权所有。',
    languageLine: '商用车支援语言：英文、马来文与中文',
    company: [
      { name: '首页', href: '/' },
      { name: '关于我们', href: '/about' },
      { name: '商用车与品牌', href: '/vehicles' },
      { name: '服务', href: '/services' },
      { name: '联系', href: '/contact' },
    ],
    services: [
      { name: '车辆销售', href: '/services' },
      { name: 'PUSPAKOM 验车', href: '/services' },
      { name: 'JPJ 服务', href: '/services' },
      { name: '车身与喷漆', href: '/services' },
    ],
    contact: [
      { name: '电话：04-5082 333', href: 'tel:045082333' },
      { name: '手机：013-525 3333', href: 'tel:60135253333' },
      { name: 'WhatsApp 销售咨询', href: 'https://wa.me/60135253333?text=Hi%20Auto%20Victoria%2C%20I%27d%20like%20to%20ask%20about%20commercial%20vehicles.' },
      { name: '传真：04-5025 333', href: '/contact' },
      { name: 'sptan@autovictoria.com.my', href: 'mailto:sptan@autovictoria.com.my' },
    ],
  },
}

export function Footer() {
  const { locale } = useLanguage()
  const text = footerLinks[locale]

  const renderFooterLink = (link: { name: string; href: string }) => {
    const className = 'text-muted-foreground text-sm hover:text-primary transition-colors duration-300'

    if (link.href.startsWith('/')) {
      return (
        <Link href={link.href} className={className}>
          {link.name}
        </Link>
      )
    }

    return (
      <a href={link.href} className={className}>
        {link.name}
      </a>
    )
  }

  return (
    <footer className="relative py-16 overflow-hidden border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AutoVICpng-ThXmYs14zqqSGRgFKbLabpxC2USggD.png"
                alt="AUTO VICTORIA SDN BHD"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{text.blurb}</p>
            <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-foreground font-semibold mb-6 text-sm tracking-wide">{text.companyHeading}</h4>
            <ul className="space-y-3">
              {text.company.map((link) => (
                <li key={link.name}>
                  {renderFooterLink(link)}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-foreground font-semibold mb-6 text-sm tracking-wide">{text.servicesHeading}</h4>
            <ul className="space-y-3">
              {text.services.map((link) => (
                <li key={link.name}>
                  {renderFooterLink(link)}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-foreground font-semibold mb-6 text-sm tracking-wide">{text.contactHeading}</h4>
            <ul className="space-y-3">
              {text.contact.map((link) => (
                <li key={link.name}>
                  {renderFooterLink(link)}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} AUTO VICTORIA SDN BHD. {text.rights}
            </p>
            <p className="text-muted-foreground text-xs">
              {text.languageLine}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
