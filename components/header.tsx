'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full">
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
    </header>
  )
}