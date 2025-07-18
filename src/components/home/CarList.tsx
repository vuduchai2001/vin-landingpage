'use client'

import Image from 'next/image'
import { Gift, Menu } from 'lucide-react'
import { vinfastCars } from '@/data/mock-data'
import ButtonCustom from '../ui/ButtonCustom'

export default function CarList() {
  return (
    <div className="max-w-[1080px] mx-auto py-8">
      <h2 className="text-[30px] font-bold text-black mb-4 text-center">XE Ô TÔ ĐIỆN VINFAST</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
            <div className='flex flex-col items-start w-full px-5'>
              <h3 className="font-bold text-lg">{car.name}</h3>
              <p className="text-[#1464f4] font-semibold text-sm mt-1 mb-4">
                GIÁ TỪ: {car.price}
              </p>
            </div>
            <div className="flex gap-2 w-full px-5">
              <ButtonCustom
                label="BÁO GIÁ LĂN BÁNH"
                variant="primary"
                icon={<Gift size={14} />}
                className="text-[12px] px-3 py-1"
              />
              <ButtonCustom
                label="XEM XE"
                variant="outline"
                icon={<Menu size={14} />}
                className="text-[12px] px-3 py-1"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
