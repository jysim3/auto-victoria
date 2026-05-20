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
  title: 'Auto Victoria Group | Malaysia Commercial Vehicle Dealership',
  description: 'Young, Agile, and Built for Growth. A fast-growing commercial vehicle dealership built on trust, speed, and long-term customer support.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: `${basePath}/icon-light-32x32.png`,
        media: '(prefers-color-scheme: light)',
      },
      {
        url: `${basePath}/icon-dark-32x32.png`,
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: `${basePath}/icon.svg`,
        type: 'image/svg+xml',
      },
    ],
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
