'use client'
import Link from "next/link"
import Image from "next/image"
import { 
  Map, 
  PhoneIcon, 
  MailIcon,

} from "lucide-react"

import Container from "./container"
import { useMediaQuery } from "@/lib/use-media-query"

export default function Footer(props:Settings) {
  const isMobile = useMediaQuery("(max-width:1024px)");

  // Footer Links 
  const quicklinks = [
    {
      href: '/confession-of-faith',
      label: 'Statement of Faith',
    },
    {
      href: '/how-to-get-saved',
      label: 'How To Get Saved',
    },
    {
      href: '/every-christian-should-seek-to-answer',
      label: 'Every Christian Should Seek To Answer',
    },
    {
      href: '/confession-of-faith',
      label: 'What We Believe',
    },
  ]

  const pages = [
    {
      href: '/',
      label: 'Adult Sunday School',
    },
    {
      href: '/',
      label: 'Children Sunday School',
    },
    {
      href: '/',
      label: 'Ladies Fellowship',
    },
    {
      href: '/',
      label: 'Training Men on the Ministry',
    },
    {
      href: '/',
      label: 'Online Bible Study',
    },
  ]
  
  return (
    <footer className="relative bg-slate-800 text-gray-300 pt-14">
      <Container>
        <section className="grid grid-cols-1 gap-y-10 gap-x-5 lg:grid-cols-5 text-xl">
          <div className="flex flex-col gap-y-3 lg:gap-y-3 lg:col-span-2">
           <div className="mb-8">
              {props.logo ? (
                <div className="relative">
                  <Image
                    src={props.logo}
                    width={450}
                    height={250}
                    alt="Logo"
                  />
                </div>
            ) : (
              <h3 className="block uppercase md:hidden lg:block text-center">
                {props.sitename}
              </h3>
            )}
           </div>

          <div className="flex gap-3">
            <Map className="flex-none min-w-8 w-8 h-8" />
            <p className="flex-1 text-md">
              No. 12 Rua do S. Jose, Edificio Hang Wan R/C,Macau SAR China
            </p>
          </div>

          <div className="flex gap-3 text-md">
            <PhoneIcon className="flex-none w-7 h-7" />
            <Link href={`tel:${props.phone}`}>
              {props.phone}
            </Link>
          </div>
          
          <div className="flex gap-3 text-md">
            <MailIcon className="min-w-7 w-7 h-7" />
            <Link href={`mailto:${props.email}`}>
              {props.email}
            </Link>
          </div>
          </div>

          <div className="w-full">
            <span className="block uppercase text-md font-semibold mb-2">
              Useful Links
            </span>
            <ul className="list-unstyled text-md">
            {
              quicklinks.map((link)=>(
                <li key={link.href}>
                  <Link
                    className="text-gray-300 block pb-2 hover:text-gray-100"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))
            }
            </ul>
          </div>

          <div className="w-full">
            <div className="flex space-x-4 items-center mb-2">
              <span className="uppercase text-md font-semibold">
                Other Ministry
              </span>
            </div>
            <ul className="list-unstyled">
            {
              pages.map((link)=>(
                <li key={link.href}>
                  <Link
                    className="text-gray-300 block pb-2 hover:text-gray-100"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))
            }
            </ul>
          </div>
        </section>
      </Container>

      <Container className="mt-10 border-t border-gray-100/40 dark:border-gray-800">
        <div className="text-center text-sm">
          Copyright © {new Date().getFullYear()} Bordergate Baptist. All
          rights reserved.
        </div>
        <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
          <span>&middot;</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="mt-5">
            <a
              href="https://mybranches.net"
              target="_blank"
              rel="noopener"
              className="relative block w-44">
              <Image
                src='/images/mybranches.svg'
                alt="Powered by myBranches"
                unoptimized={true}
                width="150"
                height="25"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}