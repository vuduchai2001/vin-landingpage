'use client'

import { Search } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="w-full flex justify-center px-4 py-12">
      <div className="max-w-[1080px] px-4 w-full flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* 404 text */}
        <div className="text-[96px] text-black/30 font-bold leading-none w-1/4">404</div>

        {/* Content */}
        <div className="flex-1">
          <h1 className="text-[20px] md:text-[24px] font-bold text-[#3c3c3c]">
            Rất tiếc! Không tìm thấy trang.
          </h1>
          <p className="text-[#3c3c3c] mt-2">
            Dường như không có gì được tìm thấy tại vị trí này. Có thể thử một trong các liên kết bên dưới hoặc tìm kiếm?
          </p>

          {/* Search form */}
          <div className="mt-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex border border-gray-300 rounded overflow-hidden"
            >
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="flex-1 px-4 py-2 text-sm text-[#3c3c3c] outline-none"
              />
              <button
                type="submit"
                className="bg-[#00adef] hover:bg-[#1464f4] px-2.5 border border-[#00adef] flex items-center justify-center"
              >
                <Search size={18} className="text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}