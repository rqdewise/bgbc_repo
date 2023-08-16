"use client"
import Link from "next/link"
import React from "react"
import { Menu } from "lucide-react"

// import {
//     useParams,
//     usePathname,
//     useSelectedLayoutSegments,
// } from "next/navigation"

// import { ReactNode, useEffect, useMemo, useState } from "react";
import Image from "next/image";

const links = [
    {
        id:1,
        name: "About Us",
        href: "./confession-of-faith",
        Icon: "",
    },
    {
        id:2,
        name: "From The Pastor",
        href: "./from-pastor",
        Icon: "",
    },
    {
        id:3,
        name: "Our Story",
        href: "./our-story",
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
                className=" text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                >
                    <Image
                        src="/images/bgbc_logo.png"
                        width={200}
                        height={100}
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
                className={
                    "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none " + (navbarOpen? "block":"hidden")
                }
                id="example-navbar-warning"
            >
                <ul className="flex flex-col lg:flex-row-reverse list-none lg:ml-auto">
                    {links.map( (link) => (
                        <li key= {link.id} className="flex items-center">
                            <Link 
                                href={link.href}
                                className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
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
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}
