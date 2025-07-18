import ButtonCustom from "../ui/ButtonCustom";

export default function PromotionSection() {
  return (
    <div className="bg-[#e0e0e0] min-h-[185px] flex items-center">
      <div className="mx-auto max-w-[1080px] w-full px-4 py-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="w-full lg:w-2/3">
          <h2 className="text-[20px] lg:text-[24px] font-bold text-[#2b2b2b]">
            KHUYẾN MÃI & ƯU ĐÃI
          </h2>
          <p className="mt-4 lg:mt-[22px] text-[15px] lg:text-[16px] text-[#333] leading-relaxed">
            Quà tặng dành cho khách hàng gửi yêu cầu báo giá Online. <br />
            <em className="text-sm text-[#2b2b2b] italic">
              *Quý khách vui lòng liên hệ hotline tư vấn, nhận thông tin khuyến mãi và ưu đãi.
            </em>
          </p>
        </div>
        <div className="w-full lg:w-auto">
          <ButtonCustom
            href="tel:0968225709"
            label="Hotline: 0968225709"
            variant="primary"
            className="font-bold w-full lg:w-auto text-center px-6 py-2 text-[14px]"
          />
        </div>
      </div>
    </div>
  );
}
