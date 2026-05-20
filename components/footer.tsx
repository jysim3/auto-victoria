'use client'

import { motion } from 'framer-motion'

const footerLinks = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Growth', href: '#growth' },
    { name: 'Services', href: '#services' },
    { name: 'Partnership', href: '#partnership' },
  ],
  services: [
    { name: 'Vehicle Sales', href: '#services' },
    { name: 'Financing', href: '#services' },
    { name: 'Fleet Support', href: '#services' },
    { name: 'Body Repair', href: '#services' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
}

export function Footer() {
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
            <a href="#" className="flex items-center gap-3 mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AutoVICpng-ThXmYs14zqqSGRgFKbLabpxC2USggD.png"
                alt="Auto Victoria Group"
                className="h-14 w-auto"
              />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Young, Agile, and Built for Growth. Your trusted partner for commercial vehicles in Malaysia.
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-foreground font-semibold mb-6 text-sm tracking-wide">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
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
            <h4 className="text-foreground font-semibold mb-6 text-sm tracking-wide">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
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
            <h4 className="text-foreground font-semibold mb-6 text-sm tracking-wide">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
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
              © {new Date().getFullYear()} Auto Victoria Group. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs">
              Crafted with excellence in Malaysia
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
