'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function NavBar() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
    setSearchQuery('')
  }

  const handleDropdownClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    // Implement dropdown functionality here
    console.log('Dropdown clicked for:', href)
  }

  return (
    <nav className="bg-[#002165] text-white py-6 px-4">
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
    </nav>
  )
}