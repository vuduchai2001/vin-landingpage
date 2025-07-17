export default function PromotionSection() {
  return (
    <div className="bg-[#e0e0e0] h-[185px] flex items-center">
      <div className="mx-auto max-w-[1080px] w-full px-4 flex justify-between items-center">
        <div>
          <h2 className="text-[24px] font-bold text-[#2b2b2b]">KHUYẾN MÃI & ƯU ĐÃI</h2>
          <p className="mt-[22px] text-[16px] text-[#333]">
            Quà tặng dành cho khách hàng gửi yêu cầu báo giá Online. <br />
            <em className="text-sm text-[#2b2b2b] italic">
              *Quý khách vui lòng liên hệ hotline tư vấn, nhận thông tin khuyến mãi và ưu đãi.
            </em>
          </p>
        </div>
        <a
          href="tel:0968225709"
          className="bg-[#1464f4] text-white font-bold px-6 py-2 text-[14px] rounded-sm hover:bg-[#1254d9] transition-colors"
        >
          Hotline: 0968225709
        </a>
      </div>
    </div>
  )
}
