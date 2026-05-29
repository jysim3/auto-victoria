import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { PageHero } from '@/components/page-hero'
import { ContactSection } from '@/components/contact-section'
import { PartnershipSection } from '@/components/partnership-section'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Contact Auto Victoria | Bukit Mertajam, Penang',
  description:
    'Contact Auto Victoria SDN BHD in Bukit Mertajam, Penang for commercial vehicle sales, financing, service, JPJ, PUSPAKOM, and after-sales support.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <PageHero
        eyebrow="Contact"
        title="Speak Directly with Auto Victoria"
        description="Reach the Bukit Mertajam team for commercial vehicle inquiries, fleet requirements, financing, JPJ or PUSPAKOM support, service coordination, and partnership discussions."
        primaryHref="tel:60135253333"
        primaryLabel="Call 013-525 3333"
        secondaryHref="/vehicles"
        secondaryLabel="View Vehicles"
      />
      <ContactSection />
      <PartnershipSection />
      <Footer />
    </main>
  )
}
