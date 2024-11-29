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
          <div className=" py-5 flex items-center justify-between">
            <div className="flex items-start gap-4 flex-col">
              <Logo img={logo} />
              <span className="text-base ">address</span>
              <div className="flex items-center gap-4">
                <FaPhone size={20} />
                <span>โทรศัพท์ 012345678</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Certificate</label>
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
            <span className="">©Siam Nistrans Co., Ltd.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
