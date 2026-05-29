import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { PageHero } from '@/components/page-hero'
import { ContactSection } from '@/components/contact-section'
import { PartnershipSection } from '@/components/partnership-section'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Contact Auto Victoria',
  description:
    'Contact Auto Victoria SDN BHD in Bukit Mertajam, Penang for commercial vehicle sales, financing, service, JPJ, PUSPAKOM, and after-sales support.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <PageHero
        eyebrow="Contact"
        title="Contact Auto Victoria"
        description="Reach the Bukit Mertajam team for commercial vehicle inquiries, fleet requirements, financing, JPJ or PUSPAKOM support, service coordination, and partnership discussions."
        primaryHref="tel:60135253333"
        primaryLabel="Call 013-525 3333"
        secondaryHref="/vehicles"
        secondaryLabel="View Vehicles"
        zh={{
          eyebrow: '联系',
          title: '联系 Auto Victoria',
          description:
            '欢迎联系大山脚团队，咨询商用车、车队需求、融资、JPJ 或 PUSPAKOM 支援、服务协调与合作洽谈。',
          primaryLabel: '拨打 013-525 3333',
          secondaryLabel: '查看车辆',
        }}
      />
      <ContactSection />
      <PartnershipSection />
      <Footer />
    </main>
  )
}
