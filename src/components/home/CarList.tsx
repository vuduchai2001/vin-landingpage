'use client'

import Image from 'next/image'
import { Gift, Menu } from 'lucide-react'
import { vinfastCars } from '@/data/mock-data'

export default function CarList() {
  return (
    <div className="max-w-[1080px] mx-auto px-4 py-8">
      <h2 className="text-[30px] font-bold text-black mb-4 text-center">XE Ô TÔ ĐIỆN VINFAST</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {vinfastCars.map((car, index) => (
          <div
            key={index}
            className="px-[15px] pb-[30px] flex flex-col items-center text-center"
          >
            <Image
              src={car.image}
              alt={car.name}
              width={300}
              height={160}
              className="object-contain mb-4"
            />
            <h3 className="font-bold text-lg">{car.name}</h3>
            <p className="text-[#1464f4] font-semibold text-sm mt-1 mb-4">
              GIÁ TỪ: {car.price}
            </p>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 border text-white bg-[#1464f4] border-[#1464f4] hover:bg-[#1436f4] cursor-pointer px-3 py-1 text-[12px] rounded-sm">
                <Gift size={14} />
                BÁO GIÁ LĂN BÁNH
              </button>
              <button className="flex items-center gap-1 border text-[#1464f4] border-[#1464f4] px-3 py-1 text-[12px] rounded-sm cursor-pointer hover:bg-[#1464f4] hover:text-white">
                <Menu size={14} />
                XEM XE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
