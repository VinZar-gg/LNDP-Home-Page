'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, Search, X, ChevronDown } from 'lucide-react'

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
      {/* Mobile and Tablet Header */}
      <div className="2xl:hidden bg-[#002165] text-white py-1 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
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
      <div className="hidden 2xl:block">
        <div className="bg-white py-8 px-6 flex justify-between items-center">
          <Image
            src="/logo.svg"
            alt="Lungsod ng Quezon Logo"
            width={160}
            height={160}
          />
          <h1 className="text-5xl font-extrabold">Quezon City Government Human Resources</h1>
          <Link href="/signin" className="text-2xl mt-6">
            Sign-in
          </Link>
        </div>
        <nav className="bg-[#002165] text-white py-6 px-4">
          <ul className="flex justify-center items-center relative text-2xl">
            <li className="px-[16.5px]"><Link href="/">Home</Link></li>
            <li className="px-[16.5px]"><Link href="/about">About Us</Link></li>
            <li className="flex items-center px-[16.5px]">
              <Link href="/recruitment">Recruitment</Link>
              <ChevronDown size={28} className="ml-1" />
            </li>
            <li className="flex items-center px-[16.5px]">
              <Link href="/learning">Learning and Development</Link>
              <ChevronDown size={28} className="ml-1" />
            </li>
            <li className="flex items-center px-[16.5px]">
              <Link href="/resources">Resources</Link>
              <ChevronDown size={28} className="ml-1" />
            </li>
            <li className="px-[16.5px]"><Link href="/faqs">FAQs</Link></li>
            <li className="absolute right-[29px]">
              <button onClick={handleSearch} aria-label="Search">
                <Search size={32} />
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile and Tablet Menu */}
      {isMenuOpen && (
        <div className="2xl:hidden bg-[#002165] text-white p-4">
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