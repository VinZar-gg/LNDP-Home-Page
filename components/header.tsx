'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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
            {isMenuOpen ? (
              <Image
                src="/header/close.svg"
                alt="Close menu"
                width={40}
                height={40}
              />
            ) : (
              <Image
                src="/header/menu.svg"
                alt="Open menu"
                width={40}
                height={40}
              />
            )}
          </button>
          <Image
            src="/logo.svg"
            alt="Lungsod ng Quezon Logo"
            width={40}
            height={40}
          />
        </div>
        <Link href="/signin" className="text-sm hover:text-gray-300 transition-colors duration-200">
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
          <Link href="/signin" className="text-2xl mt-6 hover:text-gray-600 transition-colors duration-200">
            Sign-in
          </Link>
        </div>
        
      </div>

      {/* Mobile and Tablet Menu */}
      {isMenuOpen && (
        <div className="2xl:hidden bg-[#002165] text-white p-4">
          <nav>
            <ul className="space-y-4">
              <li><Link href="/" onClick={toggleMenu} className="hover:text-gray-300 transition-colors duration-200">Home</Link></li>
              <li><Link href="/about" onClick={toggleMenu} className="hover:text-gray-300 transition-colors duration-200">About Us</Link></li>
              <li><Link href="/recruitment" onClick={toggleMenu} className="hover:text-gray-300 transition-colors duration-200">Recruitment</Link></li>
              <li><Link href="/learning" onClick={toggleMenu} className="hover:text-gray-300 transition-colors duration-200">Learning and Development</Link></li>
              <li><Link href="/resources" onClick={toggleMenu} className="hover:text-gray-300 transition-colors duration-200">Resources</Link></li>
              <li><Link href="/faqs" onClick={toggleMenu} className="hover:text-gray-300 transition-colors duration-200">FAQs</Link></li>
              <li>
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-2 py-2 text-primary rounded-l-md focus:outline-none w-full"
                  />
                  <button type="submit" className="bg-[#0042CB] text-white px-3 py-2 rounded-r-md hover:bg-[#003399] focus:outline-none transition-colors duration-200">
                    <Image
                      src="/header/search.svg"
                      alt="Search"
                      width={24}
                      height={24}
                    />
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