import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { BrandStorySection } from '@/components/brand-story-section'
import { GrowthHighlightsSection } from '@/components/growth-highlights-section'
import { FleetShowcaseSection } from '@/components/fleet-showcase-section'
import { ServicesSection } from '@/components/services-section'
import { PartnershipSection } from '@/components/partnership-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <BrandStorySection />
      <GrowthHighlightsSection />
      <FleetShowcaseSection />
      <ServicesSection />
      <PartnershipSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
