import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { PageHero } from '@/components/page-hero'
import { SixSCommitmentSection } from '@/components/six-s-commitment-section'
import { ServicesSection } from '@/components/services-section'
import { SalesEcosystemSection } from '@/components/sales-ecosystem-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Support Beyond Sale | Auto Victoria',
  description:
    'Auto Victoria services include vehicle sales, service, 24/7 repair support, financing, spare parts, survey advice, JPJ, PUSPAKOM, insurance, body construction, and after-sales support.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <PageHero
        eyebrow="Services"
        title="Support Beyond Sale"
        description="Auto Victoria supports business customers through sales consultation, financing, insurance, PUSPAKOM, JPJ, service centre access, spare parts, repair support, and practical survey advice."
        primaryHref="/contact"
        primaryLabel="Request Support"
        secondaryHref="/vehicles"
        secondaryLabel="View Vehicles"
      />
      <SixSCommitmentSection />
      <ServicesSection />
      <SalesEcosystemSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
