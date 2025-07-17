'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Lên đầu trang"
      className={cn(
        'fixed bottom-5 right-5 z-50 p-3 rounded-full border border-gray-300 bg-white text-gray-700 shadow-md transition-opacity duration-300 hover:bg-gray-100 hover:text-black',
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}
