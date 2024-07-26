import './globals.css'
import type { Metadata } from 'next'

import { Providers } from './providers'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
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

  const sites = {
    sitename: "Bordergate Baptist Church",
    logo: "/images/bgbc_logo_white_font.png",
    phone: "+853 2878 2305",
    email: "bdgate@macau.ctm.net",
    address: "No. 12 Rua do S. Jose, Edificio Hang Wan R/C, Macau SAR China"
  }

  return (
    <html lang="en" className={poppins.className}>
      <body className="text-slate-700 antialiased">
        <Nav />
          <Providers>{children}</Providers>     
        <Footer {...sites} />
      </body>
    </html>
  )
}
