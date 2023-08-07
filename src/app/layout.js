import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jasaka Company Limited',
  description: 'The best B2B distribution company in Ghana',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className={inter.className}>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
