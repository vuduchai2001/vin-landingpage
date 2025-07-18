'use client'

import { greenCars } from "@/data/mock-data"
import { ChevronRight } from "lucide-react"
import ButtonCustom from "../ui/ButtonCustom"

export default function VinFastGreen() {
  return (
    <div
      className="w-full"
      style={{ backgroundImage: 'url("/images/vinfast-green-bg.jpg")' }}
    >
      <div className="mx-auto max-w-[1080px] px-4 pb-[100px] pt-[50px] text-center">
        <h2 className="text-[26px] font-semibold text-black">VINFAST GREEN</h2>
        <p className="mt-[13px] text-[17px] text-black">VINFAST GREEN – DÒNG XE DỊCH VỤ</p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {greenCars.map((car) => (
            <div
              key={car.name}
              className="flex flex-col items-center justify-between rounded bg-white px-[10px] pt-[0px] pb-[20px]"
            >
              <img src={car.image} alt={car.name} className="h-auto w-full object-contain" />
              <div className="w-full">
                <h3 className="mt-4 text-sm font-bold text-black">{car.name}</h3>
                <p className="text-[14px] font-bold text-[#1464f4] mt-1">GIÁ TỪ: {car.price}</p>
                <ul className="mt-2 text-left text-sm text-black leading-6">
                  <li> | {car.seats}</li>
                  <li> | {car.range}</li>
                  <li> | Công suất tối đa <strong>{car.power}</strong></li>
                </ul>
                <a
                  href="/o-to/vinfast-limo-green/"
                  className="relative inline-flex items-center text-[13px] font-bold uppercase text-[#333] transition-all duration-300 hover:text-[#1464f4] before:absolute before:bottom-[-5px] before:left-[20%] before:h-[2px] before:w-[60%] before:bg-current before:opacity-30 before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full hover:before:opacity-100"
                >
                  <span>Xem thêm</span>
                  <ChevronRight size={14} className="ml-1" />
                </a>
              </div>
              <ButtonCustom
                label="BÁO GIÁ LĂN BÁNH"
                variant="primary"
                icon={<span>🎁</span>}
                className="mt-4 w-full px-4 py-2 text-sm font-medium"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
