import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { PageHero } from '@/components/page-hero'
import { BrandStorySection } from '@/components/brand-story-section'
import { GrowthHighlightsSection } from '@/components/growth-highlights-section'
import { TrustedBusinessesSection } from '@/components/trusted-businesses-section'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Built on Trust | Auto Victoria',
  description:
    'Learn about Auto Victoria SDN BHD, its commercial vehicle dealership journey, company vision, values, customer trust, and growth in Bukit Mertajam, Penang.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <PageHero
        eyebrow="About Auto Victoria"
        title="Built on Trust"
        description="Auto Victoria grew from customer-service discipline into a trusted Bukit Mertajam dealership supporting businesses with commercial vehicles, financing coordination, registration support, and long-term after-sales care."
        primaryHref="/contact"
        primaryLabel="Contact the Team"
        secondaryHref="/services"
        secondaryLabel="View Services"
        zh={{
          eyebrow: '关于 Auto Victoria',
          title: '以信任成就事业',
          description:
            'Auto Victoria 从重视客户服务的实践出发，成长为大山脚值得信赖的商用车经销商，为企业提供商用车、融资协调、注册支援与长期售后照护。',
          primaryLabel: '联系团队',
          secondaryLabel: '查看服务',
        }}
      />
      <BrandStorySection />
      <GrowthHighlightsSection />
      <TrustedBusinessesSection />
      <Footer />
    </main>
  )
}
