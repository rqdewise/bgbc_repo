"use client"
import Link from "next/link"
import React from "react"
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react"

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/mission-vision",
    nested: [
      { name: "Our Story",        href: "/our-story" },
      { name: "Mission & Vision", href: "/mission-vision" },
      { name: "From Our Pastor",  href: "/from-pastor" },
      { name: "Time & Location",  href: "/time-location" },
    ],
  },
  {
    name: "Ministries",
    href: "/ministries",
  },
  {
    name: "Beliefs",
    href: "/confession-of-faith",
    nested: [
      { name: "Confession of Faith",    href: "/confession-of-faith" },
      { name: "How To Get Saved",       href: "/how-to-get-saved" },
      { name: "Biblical Teachings",     href: "/confession-of-faith" },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
  },
]

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => (prev === name ? null : name));
  };

  return (
    <nav className="top-0 sticky z-50 w-full bg-white shadow-md">
      <div className="container px-4 mx-auto flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/bgbc_logo.png"
            width={260}
            height={220}
            alt="Bordergate Baptist Church Logo"
            className="h-12 lg:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <Link
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-700 uppercase tracking-wide hover:text-sky-500 transition-colors duration-150"
              >
                {link.name}
                {link.nested && <ChevronDown className="w-3 h-3 mt-0.5 group-hover:rotate-180 transition-transform duration-200" />}
              </Link>
              {link.nested && (
                <ul className="absolute left-0 top-full pt-1 hidden group-hover:block min-w-max bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  {link.nested.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className="block px-5 py-2 text-sm text-slate-600 hover:text-sky-500 hover:bg-sky-50 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-gray-100"
          onClick={() => setNavbarOpen(!navbarOpen)}
          aria-label="Toggle menu"
        >
          {navbarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
          <ul className="flex flex-col py-2">
            {links.map((link) => (
              <li key={link.name}>
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    className="flex-1 px-5 py-3 text-sm font-semibold text-slate-700 uppercase tracking-wide hover:text-sky-500 hover:bg-sky-50"
                    onClick={() => setNavbarOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.nested && (
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="px-4 py-3 text-slate-500"
                      aria-label="Expand"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {link.nested && openDropdown === link.name && (
                  <ul className="bg-gray-50 pl-4 pb-2">
                    {link.nested.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className="block px-5 py-2 text-sm text-slate-600 hover:text-sky-500"
                          onClick={() => setNavbarOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
