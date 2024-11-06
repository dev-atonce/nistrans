import Image from "next/image";

import CompanyContactform from "../organism/CompanyContactForm";

export default function CompanyContact() {
  return (
    <div className="py-2 grid grid-cols-2 gap-4 w-full">
      <Image
        className=" object-cover w-full col-span-2 lg:col-span-1 rounded-lg"
        alt={`contact`}
        src={`/img/company-contact.png`}
        width={834}
        height={436}
        quality={100}
        loading="lazy"
      />
      <div className="col-span-2 lg:col-span-1 ">
        <h3 className="text-xl  text-red-600">ฝากข้อมูลในการติดต่อกลับ</h3>
        <CompanyContactform />
      </div>
    </div>
  );
}
