'use client'

import { Mail, Phone, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white h-auto md:h-[310px] w-full">
      <div className="max-w-[1080px] mx-auto px-4 py-8 flex flex-col justify-between h-full">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="text-lg font-bold mb-2">VINFAST LONG BIÊN</h3>
            <p>Showroom Ô Tô VinFast Nguyễn Văn Linh</p>
            <p>Địa Chỉ: Số 1 Nguyễn Văn Linh, Gia Thụy, Long Biên, Hà Nội</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">HỖ TRỢ KHÁCH HÀNG</h3>
            <p>Hotline: 0968225709</p>
            <p>Email: <a href="mailto:cskh@vinfastautolongbien.vn" className="no-underline">cskh@vinfastautolongbien.vn</a></p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">FOLLOW</h3>
            <div className="flex gap-4 mt-2">
              <a href="mailto:cskh@vinfastautolongbien.vn" className="p-2 rounded-full bg-white text-black hover:bg-gray-200">
                <Mail size={20} />
              </a>
              <a href="tel:0968225709" className="p-2 rounded-full bg-white text-black hover:bg-gray-200">
                <Phone size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white text-black hover:bg-gray-200">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-sm flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <div className="flex gap-6 mb-2 md:mb-0 text-gray-400">
            <Link href="#">TRANG CHỦ</Link>
            <Link href="#">TRẢI NGHIỆM KHÁCH HÀNG</Link>
            <Link href="#">LIÊN HỆ</Link>
          </div>
          <div className="text-gray-400">
            Copyright 2025 © vinfastautolongbien.vn
          </div>
        </div>
      </div>
    </footer>
  )
}
