import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { PageHero } from '@/components/page-hero'
import { FleetShowcaseSection } from '@/components/fleet-showcase-section'
import { TrustedBusinessesSection } from '@/components/trusted-businesses-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Built for Business | Auto Victoria',
  description:
    'Explore commercial vehicle options from Auto Victoria including Daihatsu, Hino, Isuzu, Mitsubishi Fuso, Maxus, King Long, vans, trucks, and body styles for business use.',
}

export default function VehiclesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <PageHero
        eyebrow="Vehicles and Brands"
        title="Built for Business"
        description="Compare practical commercial vehicle options across truck chassis, van body styles, pickup conversions, chiller vans, mobile cafe builds, and fleet-use configurations."
        primaryHref="/contact"
        primaryLabel="Ask About Vehicles"
        secondaryHref="/services"
        secondaryLabel="Ownership Support"
      />
      <FleetShowcaseSection />
      <TrustedBusinessesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
