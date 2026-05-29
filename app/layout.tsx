import type { Metadata } from 'next'
import { Cormorant_Garamond, Noto_Serif_SC } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

const basePath = process.env.NODE_ENV === 'production' ? '/auto-victoria' : ''

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const longCang = localFont({
  src: './fonts/LongCang-Regular.ttf',
  variable: '--font-title',
  display: 'swap',
})

const notoSerifSc = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cjk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AUTO VICTORIA SDN BHD | Malaysia Commercial Vehicle Dealership',
  description: 'AUTO VICTORIA SDN BHD is an established commercial vehicle dealer in Bukit Mertajam, Pulau Pinang for vans, trucks, financing, insurance, JPJ, PUSPAKOM, body work, and after-sales support.',
  generator: 'v0.app',
  icons: {
    icon: `${basePath}/favicon.ico`,
    apple: `${basePath}/apple-icon.png`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`${cormorantGaramond.variable} ${longCang.variable} ${notoSerifSc.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
