'use client'

import { PlayCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const NewsSection = () => {
  const mainVideo = {
    image: '/images/news/video-thumbnail.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=xxxxxxxxxxx',
    alt: 'VinFast Video',
  }

  const newsItems = [
    {
      image: '/images/news/item-1.jpg',
      title: 'Hướng dẫn sử dụng trạm sạc',
      link: '#',
    },
    {
      image: '/images/news/item-2.jpg',
      title: 'Pin và trạm sạc ô tô điện',
      link: '#',
    },
    {
      image: '/images/news/item-3.jpg',
      title: 'Thiết bị sạc di động',
      link: '#',
    },
  ]

  return (
    <section className="bg-[#f0f0f0] py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            TIN TỨC & SỰ KIỆN
          </h2>
          <Link href="#" className="text-white bg-blue-600 px-4 py-2 text-sm rounded hover:bg-blue-700">
            Xem thêm
          </Link>
        </div>
        <p className="text-gray-600 mb-6 max-w-4xl">
          Những mẫu xe VinFast hoàn toàn mới, sự kết hợp tinh hoa giữa công nghệ tối tân và thiết kế sang trọng.
          Cập nhật thông tin và bảng giá sản phẩm mới nhất từ VinFast Long Biên - Hà Nội.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main video */}
          <div className="relative col-span-1 md:col-span-2">
            <Link href={mainVideo.youtubeLink} target="_blank" rel="noopener noreferrer">
              <div className="relative aspect-[3/1] w-full overflow-hidden rounded">
                <Image
                  src={mainVideo.image}
                  alt={mainVideo.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <PlayCircle className="text-white w-16 h-16 opacity-90" />
                </div>
              </div>
            </Link>
          </div>

          {/* News items */}
          <div className="space-y-4">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="flex bg-white rounded shadow-sm overflow-hidden"
              >
                <div className="w-1/3 relative aspect-square">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="w-2/3 p-3 flex flex-col justify-between">
                  <div className="text-sm font-semibold text-gray-800">{item.title}</div>
                  <Link href={item.link} className="text-blue-600 text-xs mt-2 hover:underline">
                    XEM THÊM
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
