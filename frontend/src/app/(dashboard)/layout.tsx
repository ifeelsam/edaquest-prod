import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopBar from '@/components/topbar'
import LeftSidebar from '@/components/leftSidebar'
import RightSidebar from '@/components/rightSidebar'
import Providers from '@/lib/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EdaQuest Dashboard',
  description: 'Educational Gaming Dashboard',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen p-1 flex flex-col`}>
        <Providers>
          <TopBar />
          <div className="flex-grow flex flex-col lg:flex-row">
            <LeftSidebar />
            <main className="flex-grow p-4 overflow-auto order-first lg:order-none">
              {children}
            </main>
            <RightSidebar />
          </div>
        </Providers>
      </body>
    </html>
  )
}


