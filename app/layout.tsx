import './globals.css'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import {Poppins} from 'next/font/google'

const title = "Bordergate Baptist Church Macau - Baptist Church at Macau SAR China"
const description = "Bordergate Baptist Church BGBC, Called out assembly of baptized believer"
const poppins = Poppins({
  subsets:['latin'],
  weight: ['400','700']
})

export const metadata: Metadata = {
  title,
  description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="text-slate-700 antialiased">
        <Nav />
        {children}      
        <Footer />
      </body>
    </html>
  )
}
