import Image from "next/image";

import Contactform from "../organism/ContactForm";
import { FaFacebookF, FaLine, FaPhoneAlt } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";

export default function Contact({ contact }: any) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-full py-10">
        <div className="flex flex-col gap-6 text-black col-span-2 lg:col-span-1">
          <div>
            <p className="font-semibold">
              บริษัท จัดหางาน วาย เอ็ม ซี ทรานสเลชั่น เซนเตอร์ จำกัด
            </p>
            <p>
              บริการสรรหามืออาชีพ: ล่าม, พนักงาน, แปลเอกสาร
              และแรงงานซัพคอนแทรคแบบครบวงจร
            </p>
          </div>
          <div>
            <p className="font-semibold">อีเมล</p>
            <p>{contact?.email}</p>
            <p>{contact?.email2}</p>
            <p>{contact?.email3}</p>
          </div>
          <a href="https://www.ymc.co.th/">
            <Image
              className=" object-cover w-full col-span-2 lg:col-span-1 rounded-lg"
              alt={`contact`}
              src={`/img/ymc_machine.png`}
              width={834}
              height={436}
              quality={100}
              loading="lazy"
            />
          </a>
        </div>
        <div className="col-span-2 lg:col-span-1 ">
          <h2 className="text-xl  text-black">ฟอร์มติดต่อ</h2>
          <Contactform />
        </div>
      </div>
      <div className="py-10 border-t border-b border-slate-200">
        <h2 className="text-center text-black text-lg mb-5">
          ติดต่อสอบถามเพิ่มเติมได้ที่
        </h2>
        <div className="flex justify-center flex-col sm:flex-row gap-4 text-white">
          <div
            className="py-1 px-4  rounded-full flex items-center gap-2 text"
            style={{
              background:
                "linear-gradient(155deg, rgba(205,9,10,1) 0%, rgba(133,66,66,1) 96%)",
            }}
          >
            <FaPhoneAlt />
            02 346 0173
          </div>
          <div
            className="py-1 px-4  rounded-full flex items-center gap-2"
            style={{
              background:
                "linear-gradient(155deg, rgba(205,9,10,1) 0%, rgba(133,66,66,1) 96%)",
            }}
          >
            <MdOutlinePhoneIphone />
            099-364-4569
          </div>
          <div
            className="py-1 px-4 bg-red-200 rounded-full flex items-center gap-2"
            style={{
              background:
                "linear-gradient(155deg, rgba(95,205,9,1) 0%, rgba(98,163,93,1) 96%)",
            }}
          >
            <FaLine />
            YMC Translation
          </div>
          <div
            className="py-1 px-4 bg-red-200 rounded-full flex items-center gap-2"
            style={{
              background:
                "linear-gradient(155deg, rgba(9,66,205,1) 0%, rgba(93,141,163,1) 96%)",
            }}
          >
            <FaFacebookF />
            YMC Recuitment
          </div>
        </div>
      </div>
      <div className="py-10">
        <h2 className="mb-5 text-black">Google Map</h2>
        <div dangerouslySetInnerHTML={{ __html: contact?.gMap }} />
      </div>
    </>
  );
}
