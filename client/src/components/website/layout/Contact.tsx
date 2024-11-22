import Image from "next/image";

import Contactform from "../organism/ContactForm";
import { FaFacebookF, FaLine, FaPhoneAlt } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";

export default function Contact({ contact }: any) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-full py-10">
        <div className="flex flex-col gap-6 text-black col-span-2 lg:col-span-1">
          <div className="border-b border-slate-200 pb-10">
            <p className="font-semibold">
              บริษัท จัดหางาน วาย เอ็ม ซี ทรานสเลชั่น เซนเตอร์ จำกัด
            </p>
            <p>Address</p>
          </div>
          <div>
            <p className="font-semibold">ติดต่อ</p>
            <p>{contact?.email}</p>
            <p>{contact?.email2}</p>
            <p>{contact?.email3}</p>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 ">
          <h2 className="text-xl  text-black">ฟอร์มติดต่อ</h2>
          <Contactform />
        </div>
      </div>

      <div className="py-10">
        <div dangerouslySetInnerHTML={{ __html: contact?.gMap }} />
      </div>
    </>
  );
}
