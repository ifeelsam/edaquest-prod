import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Providers from '@/lib/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EdaQuest - Level Up Your Learning Journey',
  description: 'Where Education Meets Adventure in the Digital Realm',
  icons: {
    icon: "/diamond.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Providers>
          <Header />
          <main className="flex-grow grid-background">
            {children}
          </main>
          <Footer />
        </Providers>

      </body>
    </html>
  )
}

