'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function NavBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
    setSearchQuery('')
    if (isMenuOpen) toggleMenu()
  }

  const handleDropdownClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    // Implement dropdown functionality here
    console.log('Dropdown clicked for:', href)
  }

  return (
    <nav className="bg-[#002165] text-white">
      {/* Mobile and Tablet NavBar */}
      <div className="2xl:hidden py-1 px-4 flex justify-between items-center">
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

      {/* Mobile and Tablet Menu */}
      {isMenuOpen && (
        <div className="2xl:hidden p-4">
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
        </div>
      )}

      {/* Desktop NavBar */}
      <div className="hidden 2xl:block py-6 px-4">
        <ul className="flex justify-center items-center relative text-2xl">
          <li className="px-[16.5px]">
            <Link href="/" className="hover:text-gray-300 transition-colors duration-200">Home</Link>
          </li>
          <li className="px-[16.5px]">
            <Link href="/about" className="hover:text-gray-300 transition-colors duration-200">About Us</Link>
          </li>
          <li className="flex items-center px-[16.5px]">
            <button 
              onClick={(e) => handleDropdownClick(e, '/recruitment')}
              className="flex items-center focus:outline-none hover:text-gray-300 transition-colors duration-200"
            >
              <span>Recruitment</span>
              <Image
                src="/header/downarrow.svg"
                alt="Dropdown arrow"
                width={20}
                height={20}
                className="ml-1"
              />
            </button>
          </li>
          <li className="flex items-center px-[16.5px]">
            <button 
              onClick={(e) => handleDropdownClick(e, '/learning')}
              className="flex items-center focus:outline-none hover:text-gray-300 transition-colors duration-200"
            >
              <span>Learning and Development</span>
              <Image
                src="/header/downarrow.svg"
                alt="Dropdown arrow"
                width={20}
                height={20}
                className="ml-1"
              />
            </button>
          </li>
          <li className="flex items-center px-[16.5px]">
            <button 
              onClick={(e) => handleDropdownClick(e, '/resources')}
              className="flex items-center focus:outline-none hover:text-gray-300 transition-colors duration-200"
            >
              <span>Resources</span>
              <Image
                src="/header/downarrow.svg"
                alt="Dropdown arrow"
                width={20}
                height={20}
                className="ml-1"
              />
            </button>
          </li>
          <li className="px-[16.5px]">
            <Link href="/faqs" className="hover:text-gray-300 transition-colors duration-200">FAQs</Link>
          </li>
          <li className="absolute right-[29px]">
            <button onClick={handleSearch} aria-label="Search" className="hover:opacity-80 transition-opacity duration-200">
              <Image
                src="/header/search.svg"
                alt="Search"
                width={32}
                height={32}
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}