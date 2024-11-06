// export default function Footer() {
//   return (
//     <footer className="bg-[#ED1F23] py-20 sm:py-24">
//       <div className="mx-auto container flex justify-between">
//         <div className="flex flex-col gap-4">
//           <div className="border-b border-white pb-4 w-[50%] font-bold">
//             <p className=" leading-5 text-white ">Blue Assistance Co., Ltd.</p>
//             <p className=" leading-5 text-white ">
//               ブルーアシスタンス　株式会社
//             </p>
//           </div>
//           <div className="">
//             <p className=" leading-5 text-white w-[50%] ">
//               No.D 9th Floor, PRIME BUILDING, 24 Sukhumvit Soi 21(Asoke),
//               Sukhumvit Road, Klongtoey-Nua, Wattana, Bangkok 10110, Thailand.
//             </p>
//           </div>
//         </div>
//         <div className="flex gap-4 text-white">
//           <div>
//             <div className="flex flex-col gap-2">
//               <p className=" leading-5 ">TEL : +66 (0)2-661-7687～88</p>
//               <p className=" leading-5 ">FAX : +66 (0)2-661-7689</p>
//             </div>
//           </div>
//           <div className="flex flex-col gap-2">
//             <p className=" leading-5 ">医療アシスタンス業務</p>
//             <p className=" leading-5 ">medical@blue-assistance.co.th</p>
//             <p className=" leading-5 ">ビザ&労働許可証コンサルタント業務</p>
//             <p className=" leading-5 ">visa@blue-assistance.co.th</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";
import { useContext } from "react";
import { Logo } from "@/components/website/atom/logo/Logo";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import Link from "next/link";

import { FaPhone } from "react-icons/fa6";

import Image from "next/image";

import { MdEmail, MdOutlineMailOutline } from "react-icons/md";

import menuItem from "@/assets/menuItem.json";

export default function Footer({ logo, contact }: any) {
  const { primaryColor }: any = useContext(PageSettingContext);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="text-white bg-[#ED1F23] ">
      <div className="">
        <div className="container mx-auto pt-4   ">
          <div className=" border-b border-white/60 py-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Logo img={logo} />
              <div>
                <p className="text-2xl">
                  YMC Recruitment Translation Center Co., Ltd.
                </p>
                <p>บริษัท จัดหางาน วาย เอ็ม ซี ทรานสเลชั่น เซนเตอร์ จำกัด</p>
              </div>
            </div>
            <div className="hidden lg:flex">
              {menuItem.map((item: any, key: number) => {
                return (
                  <Link
                    key={key}
                    href={item?.href}
                    className={`menu-item px-4 py-3 nav-button hover:text-white hover:bg-red-700`}
                  >
                    {item?.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-4">
        <div className="flex justify-start  flex-col lg:flex-row lg:justify-between lg:gap-20 mb-4 ">
          <div className="flex flex-col items-start lg:items-start lg:basis-1/2  mb-2">
            <div className="flex-col flex items-start gap-3 pb-6  ">
              <span className="text-base ">{contact?.addressTH}</span>
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1">
                <div className="w-2 bg-slate-300 h-4"></div> Social
              </label>
              <div className="flex items-center gap-6">
                <a href={contact?.facebook}>
                  <Image
                    src="/img/fbLogo.png"
                    alt="soccial"
                    width={25}
                    height={25}
                  />
                </a>
                <a href={contact?.line}>
                  <Image
                    src="/img/lineLogo.png"
                    alt="social"
                    width={25}
                    height={25}
                  />
                </a>
                <a href={contact?.instagram}>
                  <Image
                    src="/img/igLogo.png"
                    alt="social"
                    width={25}
                    height={25}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex lg:basis-1/2 sm:flex-row flex-col items-start ">
            <div className="xl:basis-3/4 w-full sm:basis-3/5 hidden sm:block">
              <div className="flex flex-col gap-2 mb-3">
                <label className="flex items-center gap-1">
                  <div className="w-2 bg-slate-300 h-4"></div>
                  Contact
                </label>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <FaPhone size={20} />
                    <div className="flex flex-col">
                      <span>{contact?.telephone}</span>
                      <span>{contact?.telephone2}</span>
                      <span>{contact?.telephone3}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MdEmail size={20} />
                    <div className="flex flex-col">
                      <span>{contact?.email}</span>
                      <span>{contact?.email2}</span>
                      <span>{contact?.email3}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start  flex-col lg:flex-row lg:justify-between lg:gap-20  "></div>
      </div>
      <div className="">
        <div className="container mx-auto py-4  flex items-center justify-center  text-xs">
          <div>
            <span className="">
              ©Copyright {currentYear} YMC Translation Co., Ltd. - All Rights
              Reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
