'use client'

import { ChevronRight } from "lucide-react"

export default function VinFastGreen() {
  const cars = [
    {
      name: 'VINFAST MINIO GREEN',
      price: '269.000.000 VNĐ',
      seats: '4 chỗ',
      range: '>170 km/lần sạc',
      power: '20 kw',
      image: '/images/cars/vinfast-minio.png',
    },
    {
      name: 'VINFAST HERIO GREEN',
      price: '499.000.000 VNĐ',
      seats: '5 chỗ',
      range: '326 km/lần sạc',
      power: '100 kw',
      image: '/images/cars/vinfast-herio.png',
    },
    {
      name: 'VINFAST NERIO GREEN',
      price: '668.000.000 VNĐ',
      seats: '5 chỗ',
      range: '318,6 km/lần sạc',
      power: '110 kw',
      image: '/images/cars/vinfast-nerio.png',
    },
    {
      name: 'VINFAST LIMO GREEN',
      price: '749.000.000 VNĐ',
      seats: '7 chỗ',
      range: '450 km/lần sạc',
      power: '150 kw',
      image: '/images/cars/vinfast-limo.png',
    },
  ]

  return (
    <div
      className="w-full"
      style={{ backgroundImage: 'url(https://vinfastautolongbien.vn/wp-content/uploads/2025/03/bg-vgd.jpg)' }}
    >
      <div className="mx-auto max-w-[1080px] px-4 pb-[60px] pt-[50px] text-center">
        <h2 className="text-[26px] font-semibold text-black">VINFAST GREEN</h2>
        <p className="mt-[13px] text-[17px] text-black">VINFAST GREEN – DÒNG XE DỊCH VỤ</p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cars.map((car) => (
            <div
              key={car.name}
              className="flex flex-col items-center justify-between rounded bg-white px-[10px] pt-[0px] pb-[20px]"
            >
              <img src={car.image} alt={car.name} className="h-auto w-full object-contain" />
              <div className="w-full">
                <h3 className="mt-4 text-sm font-bold text-black">{car.name}</h3>
                <p className="text-[14px] font-bold text-blue-700 mt-1">GIÁ TỪ: {car.price}</p>
                <ul className="mt-2 text-left text-sm text-black leading-6">
                  <li> | {car.seats}</li>
                  <li> | {car.range}</li>
                  <li> | Công suất tối đa <strong>{car.power}</strong></li>
                </ul>
                <a
                  href="/o-to/vinfast-limo-green/"
                  className="relative inline-flex items-center text-[13px] font-bold uppercase text-[#333] transition-all duration-300 hover:text-blue-600 before:absolute before:bottom-[-5px] before:left-[20%] before:h-[2px] before:w-[60%] before:bg-current before:opacity-30 before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full hover:before:opacity-100"
                >
                  <span>Xem thêm</span>
                  <ChevronRight size={14} className="ml-1" />
                </a>
              </div>
              <button className="mt-4 w-full rounded bg-[#1464f4] border-[#1464f4] cusor-pointer hover:bg-[#1436f4] px-4 py-2 text-white text-sm font-medium">
                🎁 BÁO GIÁ LĂN BÁNH
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
