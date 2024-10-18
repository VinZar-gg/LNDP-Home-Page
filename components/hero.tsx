'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 6

  // Comment out the unused functions
  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % totalSlides)
  // }

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  // }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="h-[50vh] md:h-[70vh]">
        <Image
          src="/hero.png"
          alt="Quezon City at night"
          layout="fill"
          objectFit="cover"
          objectPosition="75% center"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-start md:justify-center items-center text-white p-4 pt-16 md:pt-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-4 leading-tight">
          Welcome to the<br />
          Quezon City Government<br />
          Human Resource
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-2xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum pharetra sagittis. Sed sit amet mi sem. Mauris enim sapien, tincidunt ut tempor in, vulputate a justo.
        </p>
        <button className="bg-white text-black py-2 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300 mb-12 md:mb-24 text-sm sm:text-base">
          CTA Button
        </button>
        <div className="flex space-x-2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}