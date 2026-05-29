import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { PageHero } from '@/components/page-hero'
import { BrandStorySection } from '@/components/brand-story-section'
import { GrowthHighlightsSection } from '@/components/growth-highlights-section'
import { TrustedBusinessesSection } from '@/components/trusted-businesses-section'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'About Auto Victoria | Commercial Vehicle Dealership in Penang',
  description:
    'Learn about Auto Victoria SDN BHD, its commercial vehicle dealership journey, company vision, values, customer trust, and growth in Bukit Mertajam, Penang.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <PageHero
        eyebrow="About Auto Victoria"
        title="A Commercial Vehicle Company Built on Practical Trust"
        description="Auto Victoria grew from customer-service discipline into a trusted Bukit Mertajam dealership supporting businesses with commercial vehicles, financing coordination, registration support, and long-term after-sales care."
        primaryHref="/contact"
        primaryLabel="Contact the Team"
        secondaryHref="/services"
        secondaryLabel="View Services"
      />
      <BrandStorySection />
      <GrowthHighlightsSection />
      <TrustedBusinessesSection />
      <Footer />
    </main>
  )
}
