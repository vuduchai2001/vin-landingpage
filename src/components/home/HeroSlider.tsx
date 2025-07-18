'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const images = [
  {
    src: '/images/slider-home/banner-vinfast-vf8-24726-pc-08-1536x496.jpg',
    alt: 'VinFast Background',
  },
  {
    src: '/images/slider-home/vinfast-vf9-241212-banner-pc01-2048x661.jpg',
    alt: 'Banner VF8',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null)
  const holdIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const changeSlide = (newIndex: number, dir: 'left' | 'right') => {
    setPrev(current)
    setCurrent(newIndex)
    setDirection(dir)
  }

  const nextSlide = () => {
    changeSlide((current + 1) % images.length, 'right')
  }

  const prevSlide = () => {
    changeSlide((current - 1 + images.length) % images.length, 'left')
  }

  useEffect(() => {
    autoSlideRef.current = setInterval(nextSlide, 50000)
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current)
    }
  }, [current])

  const handleHoldStart = (dir: 'prev' | 'next') => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current)
    const fn = dir === 'next' ? nextSlide : prevSlide
    fn()
    holdIntervalRef.current = setInterval(fn, 50000)
  }

  const handleHoldEnd = () => {
    if (holdIntervalRef.current) clearInterval(holdIntervalRef.current)
    autoSlideRef.current = setInterval(nextSlide, 50000)
  }

  return (
    <div className="relative w-full overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px] group">
      {images.map((image, index) => {
        const isCurrent = index === current
        const isPrev = index === prev

        let animationClass = ''
        if (isCurrent && prev !== null) {
          animationClass = direction === 'right' ? 'slide-in-right' : 'slide-in-left'
        } else if (isPrev) {
          animationClass = direction === 'right' ? 'slide-out-left' : 'slide-out-right'
        }

        return (
          (isCurrent || isPrev) && (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${animationClass} z-0`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="w-full h-full object-cover"
                priority={isCurrent}
              />
            </div>
          )
        )
      })}

      <button
        onMouseDown={() => handleHoldStart('prev')}
        onMouseUp={handleHoldEnd}
        onMouseLeave={handleHoldEnd}
        className="absolute left-2 sm:left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black opacity-0 transition-opacity group-hover:opacity-100"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onMouseDown={() => handleHoldStart('next')}
        onMouseUp={handleHoldEnd}
        onMouseLeave={handleHoldEnd}
        className="absolute right-2 sm:right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black opacity-0 transition-opacity group-hover:opacity-100"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 z-50 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index === current) return
              changeSlide(index, index > current ? 'right' : 'left')
            }}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${current === index ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
