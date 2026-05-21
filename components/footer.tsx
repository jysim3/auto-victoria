'use client'

import { motion } from 'framer-motion'

const footerLinks = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Brands', href: '#brands' },
    { name: 'Our Growth', href: '#growth' },
    { name: 'Services', href: '#services' },
    { name: 'Sales Ecosystem', href: '#ecosystem' },
    { name: 'Partnership', href: '#partnership' },
  ],
  services: [
    { name: 'Vehicle Sales', href: '#services' },
    { name: 'PUSPAKOM Inspection', href: '#services' },
    { name: 'JPJ Services', href: '#services' },
    { name: 'Body & Paint', href: '#services' },
  ],
  contact: [
    { name: 'Tel: 04-5082 333', href: 'tel:045082333' },
    { name: 'Mobile: 013-525 3333', href: 'tel:60135253333' },
    { name: 'Fax: 04-5025 333', href: '#contact' },
    { name: 'sptan@autovictoria.com.my', href: 'mailto:sptan@autovictoria.com.my' },
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
                alt="AUTO VICTORIA SDN BHD"
                className="h-14 w-auto"
              />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              AUTO VICTORIA SDN BHD is a trusted commercial vehicle dealer and growing van and truck dealership in Bukit Mertajam, Pulau Pinang.
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
            <h4 className="text-foreground font-semibold mb-6 text-sm tracking-wide">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
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
              © {new Date().getFullYear()} AUTO VICTORIA SDN BHD. All rights reserved.
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
