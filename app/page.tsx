import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { SixSCommitmentSection } from '@/components/six-s-commitment-section'
import { GrowthHighlightsSection } from '@/components/growth-highlights-section'
import { PartnershipSection } from '@/components/partnership-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <SixSCommitmentSection />
      <GrowthHighlightsSection />
      <PartnershipSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
