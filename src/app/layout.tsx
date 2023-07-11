import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/structuralComponents/header/Header'
import ContextComponent from '../context/ContextComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VIRDICON Ltd - Construction Services and Solutions | Company Overview',
  description: 'Discover VIRDICON Ltd, a leading construction company providing exceptional services and solutions. Established in 2012, we prioritize quality, safety, and customer satisfaction. Our team of experienced professionals delivers projects of the highest standard, fostering strong relationships and embracing sustainability. Choose VIRDICON for excellence in construction.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextComponent>
        <Header></Header>
        {children}
        </ContextComponent>
        </body>
    </html>
  )
}
