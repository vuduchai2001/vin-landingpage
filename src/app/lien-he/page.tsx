import ButtonCustom from "@/components/ui/ButtonCustom";
import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <div
      className="w-full min-h-[550px] bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: "url('/images/vinfast-contact-bg.jpg')" }}
    >
      <div className="max-w-[1065px] w-full">
        <p className="text-[20px] font-semibold">SHOWROOM</p>
        <h1 className="text-[30px] font-bold mt-1">VINFAST NGUYỄN VĂN LINH</h1>
        <p className="text-[15px] mt-4">
          Địa Chỉ: Số 1 Nguyễn Văn Linh, Gia Thụy, Long Biên, Hà Nội.
        </p>
        <ButtonCustom
          href="tel:0968225709"
          label="0968225709"
          variant="primary"
          icon={<Phone className="w-4 h-4 mr-1" />}
          className="font-bold w-fit text-center px-6 py-2 text-[14px] mt-5"
        />
      </div>
    </div>
  );
}
