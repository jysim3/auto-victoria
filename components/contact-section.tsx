'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Northern Malaysia',
    detail: 'Serving the Northern Region'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+60 4-XXX XXXX',
    detail: 'Mon - Sat, 9AM - 6PM'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@autovictoria.my',
    detail: 'We reply within 24 hours'
  },
]

export function ContactSection() {
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
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Let&apos;s Start a Conversation
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Whether you&apos;re looking for commercial vehicles, fleet solutions, or partnership opportunities, 
            our team is ready to assist you.
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
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex gap-5 p-6 bg-card/20 backdrop-blur-sm border border-border rounded-lg hover:border-primary/40 hover:bg-card/40 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-lg bg-secondary/50 border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
                  <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <p className="text-lg font-semibold text-foreground mt-1">{item.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                </div>
              </motion.div>
            ))}

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
                  <p className="text-muted-foreground text-sm">Northern Malaysia</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 lg:p-10">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm text-muted-foreground mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                  >
                    <option value="" className="bg-card">Select a topic</option>
                    <option value="vehicle-inquiry" className="bg-card">Vehicle Inquiry</option>
                    <option value="fleet-solutions" className="bg-card">Fleet Solutions</option>
                    <option value="partnership" className="bg-card">Partnership Opportunity</option>
                    <option value="service" className="bg-card">Service &amp; Support</option>
                    <option value="other" className="bg-card">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300"
                >
                  Send Message
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
