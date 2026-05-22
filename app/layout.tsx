import type { Metadata } from 'next'
import { Inter, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const basePath = process.env.NODE_ENV === 'production' ? '/auto-victoria' : ''

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const cinzel = Cinzel({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
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
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${cinzel.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
