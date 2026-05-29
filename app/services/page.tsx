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
        zh={{
          eyebrow: '服务',
          title: '销售之后，持续支援',
          description:
            'Auto Victoria 为商业客户提供销售咨询、融资、保险、PUSPAKOM、JPJ、服务中心、零件、维修支援与实地评估建议。',
          primaryLabel: '请求支援',
          secondaryLabel: '查看车辆',
        }}
      />
      <SixSCommitmentSection />
      <ServicesSection />
      <SalesEcosystemSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
