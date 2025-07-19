import { articles } from '@/data/mock-data';
import Image from 'next/image';
import Link from 'next/link';

export default function News() {
  return (
    <div className="w-full flex justify-center px-4 py-[30px]">
      <div className="max-w-[1080px] w-full grid md:grid-cols-[1fr_240px] gap-14">
        {/* Left list */}
        <div className="flex flex-col gap-[30px]">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.link}
              className="flex flex-col md:flex-row bg-white shadow-[0_1px_3px_-2px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] overflow-hidden"
            >
              <div className="relative w-full md:w-[220px] lg:w-[310px] h-[160px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                {article.video && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="group w-10 h-10 rounded-full border-2 border-white flex items-center justify-center transition-colors duration-300 hover:bg-[#1464f4] hover:border-[#1464f4]">
                      <svg
                        className="w-8 h-8 text-white group-hover:text-white transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
              <div className="flex items-center px-4 py-4 flex-1">
                <h3 className="text-[17px] text-[#333333] relative after:content-[''] after:block after:w-[30px] after:h-[2px] after:bg-[rgba(0,0,0,0.1)] after:mt-1 hover:text-[#00adef]">
                  {article.title}
                </h3>

              </div>
            </Link>
          ))}
        </div>

        {/* Sidebar */}
        <div>
          <h3 className="text-[26px] font-bold mb-[10px] text-[#3c3c3c]">Bài viết mới</h3>
          <ul className="space-y-2">
            {articles.map((article, index) => (
              <li key={index}>
                <Link
                  href={article.link}
                  className="text-[#1464f4] text-sm hover:underline"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}