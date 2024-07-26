"use client"
import Link from "next/link"
import React from "react"
import Image from "next/image";
import { Menu } from "lucide-react"

const links = [
    {
      name: "Confession of Faith",
      href: "./confession-of-faith",
      Icon: "",
    },
    {
      name: "About Us",
      href: "./mission-vision",
      Icon: "",
      nested: [
          {
              name: "Our Story",
              href: "./our-story",
              Icon: "",
          },
          {
              name: "From Our Pastor",
              href: "./from-pastor",
              Icon: "",
          },
          {
              name: "Time And Location",
              href: "./time-location",
              Icon: "",
          },
          {
              name: "Mission And Vision",
              href: "./mission-vision",
              Icon: "",
            },
        ],
    },
    {
        name: "Our Story",
        href: "./our-story",
        Icon: "",
    },
    {
      name: "Contact",
      href: "./contact",
      Icon: "",
  }
]

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  
  return (
    <nav className="top-0 sticky z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow ">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            href="/"
            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          >
              <Image
                  src="/images/bgbc_logo.png"
                  width={300}
                  height={250}
                  alt="Logo"
                  className=" dark:scale-110 dark:border-stone-400"
              />
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Menu />
          </button>
        </div>
        <div
          className={"lg:flex flex-grow items-center bg-white md:bg-opacity-0 lg:shadow-none " + (navbarOpen? "block":"hidden")}
        >
          <ul className="flex flex-col lg:flex-row list-none md:ml-auto text-md">
            {links.map((link, index) => (
              <li key= {index} className="group relative items-center">
                <>
                  <Link 
                      href={link.href}
                      className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center uppercase font-bold"
                  > 
                    {!link.Icon 
                      ? " " :
                      <Image 
                          src={link.Icon}
                          width={20}
                          height={20}
                          alt={link.name}
                      />
                    }
                      {link.name}
                  </Link>
                    {!(link.nested)? '':
                    <ul className={"list-none group-hover:block bg-white p-4 lg:hidden lg:absolute lg:left-[-10px] lg:top-7 lg:shadow-md  lg:min-w-max " + (navbarOpen? "block":"hidden") }>
                      {
                        link.nested.map(
                          (nestLink, index) => (
                            <li key={index} className="text-sm font-semibold flex flex-row my-2">
                              <Link
                                  href={nestLink.href}
                              >
                                  {nestLink.name}
                              </Link>
                            </li>
                          )
                        )
                      }
                    </ul>
                    }
                  </>                          
              </li> 
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
