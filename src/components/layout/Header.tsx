'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, Search, ChevronDown, ChevronUp, X } from 'lucide-react'

import Image from 'next/image'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Trang chủ', href: '/' },
  {
    label: 'Ô tô VinFast',
    href: '/vinfast-vf',
    subMenuItems: [
      { label: 'VinFast VF 3', href: '/vinfast-vf3' },
      { label: 'VinFast VF 5', href: '/vinfast-vf5' },
      { label: 'VinFast VF 6', href: '/vinfast-vf6' },
      { label: 'VinFast VF 7', href: '/vinfast-vf7' },
      { label: 'VinFast VF 8', href: '/vinfast-vf8' },
      { label: 'VinFast VF 9', href: '/vinfast-vf9' },
    ],
  },
  {
    label: 'VinFast Green',
    href: '/vinfast-green',
    subMenuItems: [
      { label: 'VinFast Mini Green', href: '/vinfast-mini-green' },
    ],
  },
  { label: 'Pin và trạm sạc', href: '/pin-tram-sac' },
  { label: 'Tin tức', href: '/tin-tuc' },
  { label: 'Liên hệ', href: '/lien-he' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const toggleSubmenu = (label: string) => {
    setExpanded(prev => (prev === label ? null : label))
  }

  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full bg-white transition-all duration-300',
        hasScrolled
          ? 'shadow-[1px_1px_10px_rgba(0,0,0,0.15)] animate-fade-down animate-once animate-ease-linear'
          : 'shadow-sm'
      )}
    >
      <div className="max-w-[1080px] mx-auto flex items-center justify-between px-4 py-1">
        {/* Mobile: Menu + Logo + Search */}
        <div className="flex items-center justify-between w-full md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className='cursor-pointer'>
            <Menu className="h-6 w-6 text-gray-700" />
          </button>

          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="VinFast Logo"
              width={200}
              height={56}
              className="object-contain h-full"
            />
          </Link>

          <button aria-label="Search">
            <Search className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Desktop: Full Nav */}
        <div className="hidden md:flex items-center w-full justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className='h-full'>
              <Image
                src="/images/logo.png"
                alt="VinFast Logo"
                width={200}
                height={56}
                className="object-contain h-full"
              />
            </Link>

            <nav className="flex gap-[14px] relative">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.subMenuItems && setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[16px] font-bold text-[#3c3c3c] whitespace-nowrap hover:text-[#1464f4] transition h-[70px] py-[10px] flex items-center justify-center"
                  >
                    {item.label}
                    {item.subMenuItems && (
                      <ChevronDown className="h-5 w-4 ml-0.5" />
                    )}
                  </Link>
                  {item.subMenuItems && hoveredItem === item.label && (
                    <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-200 rounded-md py-2 min-w-[200px] z-50">
                      {item.subMenuItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-[14px] text-[#666666] hover:text-[#1464f4] hover:bg-gray-50 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <Link
            href="/lai-thu"
            className="bg-[#1464f4] text-white text-[11px] xl:block hidden whitespace-nowrap font-semibold px-4 py-1 hover:bg-[#1436f4] transition"
          >
            LÁI THỬ XE VINFAST
          </Link>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 transition-opacity duration-300',
          open ? 'bg-black/40 visible opacity-100' : 'invisible opacity-0'
        )}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Slide Menu */}
      <div className={cn(
        'fixed top-0 right-0 h-screen w-[300px] bg-white z-50 shadow-lg transition-transform duration-300',
        open ? 'translate-x-0' : 'translate-x-full'
      )}>
        <div className="flex items-center justify-end px-4 py-3">
          <button onClick={() => setOpen(false)} aria-label="Close menu" className='cursor-pointer'>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col overflow-y-auto">
          {navItems.map((item) => {
            const hasSubmenu = !!item.subMenuItems?.length
            const isExpanded = expanded === item.label

            return (
              <div key={item.label}>
                <div
                  className={`flex justify-between items-center py-2 px-4 cursor-pointer h-[50px] font-semibold ${isExpanded ? 'bg-[#0000000d]' : ' border-b border-[#ececec]'} text-sm text-gray-800 hover:text-blue-600`}
                  onClick={() => hasSubmenu ? toggleSubmenu(item.label) : setOpen(false)}
                >
                  <span className="flex-1">{item.label}</span>
                  {hasSubmenu &&
                    (isExpanded
                      ? <ChevronUp className="w-4 h-4" />
                      : <ChevronDown className="w-4 h-4" />)
                  }
                </div>

                {hasSubmenu && isExpanded && (
                  <div className="pl-2 pb-[30px] bg-[#0000000d]">
                    {item.subMenuItems!.map(sub => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="py-[5px] pl-5 text-[16px] text-[#666666] flex items-center justify-start hover:text-blue-500"
                        onClick={() => setOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
