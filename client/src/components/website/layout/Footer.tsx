import { Logo } from "@/components/website/atom/logo/Logo";
import { FaPhone } from "react-icons/fa6";
import Image from "next/image";

export default function Footer({ logo }: any) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="text-black bg-slate-200 ">
      <div className="">
        <div className="container mx-auto pt-4   ">
          <div className="gap-4 md:gap-0 py-5 flex items-center justify-between flex-col md:flex-row">
            <div className="flex items-start gap-4 flex-col">
              <Logo img={logo} />
              <span className="text-base text-center md:text-left ">
                ชั้น 15 เลขที่ 191/66, 68-69 CTI TOWER ถนนรัชดาภิเษก <br />{" "}
                เขตคลองเตย กรุงเทพมหานคร 10110
              </span>
              <div className="flex items-center gap-4">
                <FaPhone size={20} />
                <span>โทรศัพท์ : (+66)-2-261-1080～5 or 261-5343～6</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="md:block hidden">Certificate</label>
              <Image
                src="/img/footerCertificate.png"
                width={300}
                height={300}
                alt="cert"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-950 text-white">
        <div className="container mx-auto py-4  flex justify-start  text-xs">
          <div>
            <span className="">© Siam Nistrans Co., Ltd.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
