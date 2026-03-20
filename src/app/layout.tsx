import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import '@/app/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yassine Laazizi — Software Engineer',
  description:
    'Senior software engineer specializing in frontend architecture, React, and full-stack TypeScript.',
  openGraph: {
    title: 'Yassine Laazizi — Software Engineer',
    description:
      'Senior software engineer specializing in frontend architecture, React, and full-stack TypeScript.',
    url: 'https://swe-portfolio-xi.vercel.app',
    siteName: 'Yassine Laazizi',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
