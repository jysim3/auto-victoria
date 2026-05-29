'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Languages, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

const navLinks = {
  en: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Vehicles', href: '/vehicles' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  zh: [
    { name: '首页', href: '/' },
    { name: '关于我们', href: '/about' },
    { name: '商用车', href: '/vehicles' },
    { name: '服务', href: '/services' },
    { name: '联系', href: '/contact' },
  ],
}

const whatsappHref = 'https://wa.me/60135253333?text=Hi%20Auto%20Victoria%2C%20I%27d%20like%20to%20ask%20about%20commercial%20vehicles.'

export function Navigation() {
  const { locale, toggleLocale } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const links = navLinks[locale]
  const whatsappLabel = locale === 'zh' ? 'WhatsApp 咨询' : 'WhatsApp'
  const mobileWhatsappLabel = locale === 'zh' ? 'WhatsApp 销售咨询' : 'WhatsApp Sales'
  const languageLabel = locale === 'zh' ? 'English' : '中文'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/90 backdrop-blur-md border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AutoVICpng-ThXmYs14zqqSGRgFKbLabpxC2USggD.png"
                alt="AUTO VICTORIA SDN BHD"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={whatsappHref}
              className="hidden md:inline-flex px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-all duration-300"
            >
              {whatsappLabel}
            </a>

            <button
              type="button"
              onClick={toggleLocale}
              className="hidden items-center gap-2 border border-primary/30 px-3 py-2 text-xs font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary md:inline-flex"
              aria-label={locale === 'zh' ? 'Switch language to English' : '切换到中文'}
            >
              <Languages size={15} />
              {languageLabel}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg pt-24 md:hidden"
          >
            <nav className="flex flex-col items-center gap-8 p-8">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl text-foreground hover:text-primary transition-colors duration-300 tracking-wide"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href={whatsappHref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-all duration-300"
              >
                {mobileWhatsappLabel}
              </motion.a>
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => {
                  toggleLocale()
                  setIsMobileMenuOpen(false)
                }}
                className="inline-flex items-center gap-3 border border-primary/35 px-6 py-3 text-sm font-semibold text-foreground"
              >
                <Languages size={16} />
                {languageLabel}
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
