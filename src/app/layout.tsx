import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/widgets/Header'
import { Providers } from '@/store/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BMI app',
  description: 'BMI app ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <header>
            <Header />
          </header>
          <main>
            {children}
          </main>
          <footer></footer>
        </body>
      </Providers>
    </html>
  )
}
