'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
    setSearchQuery('')
    if (isMenuOpen) toggleMenu()
  }

  return (
    <header className="w-full">
      {/* Mobile Header */}
      <div className="md:hidden bg-primary text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="p-1">
            {isMenuOpen ? <X size={40} strokeWidth={2.5} /> : <Menu size={40} strokeWidth={2.5} />}
          </button>
          <Image
            src="/logo.svg"
            alt="Lungsod ng Quezon Logo"
            width={40}
            height={40}
          />
        </div>
        <Link href="/signin" className="text-sm">
          Sign-in
        </Link>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="bg-white p-4">
          <Image
            src="/logo.svg"
            alt="Lungsod ng Quezon Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>
        <nav className="bg-primary text-white p-4">
          <ul className="flex justify-center items-center space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/recruitment">Recruitment</Link></li>
            <li><Link href="/learning">Learning and Development</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li>
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-2 py-2 text-primary rounded-l-md focus:outline-none"
                />
                <button type="submit" className="bg-[#0042CB] text-white px-3 py-2 rounded-r-md hover:bg-[#003399] focus:outline-none">
                  <Search size={24} />
                </button>
              </form>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary text-white p-4">
          <nav>
            <ul className="space-y-4">
              <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link href="/about" onClick={toggleMenu}>About Us</Link></li>
              <li><Link href="/recruitment" onClick={toggleMenu}>Recruitment</Link></li>
              <li><Link href="/learning" onClick={toggleMenu}>Learning and Development</Link></li>
              <li><Link href="/resources" onClick={toggleMenu}>Resources</Link></li>
              <li><Link href="/faqs" onClick={toggleMenu}>FAQs</Link></li>
              <li>
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-2 py-2 text-primary rounded-l-md focus:outline-none w-full"
                  />
                  <button type="submit" className="bg-[#0042CB] text-white px-3 py-2 rounded-r-md hover:bg-[#003399] focus:outline-none">
                    <Search size={24} />
                  </button>
                </form>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}