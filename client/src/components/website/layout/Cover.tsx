import Image from "next/image";
import Breadcrumb from "../molecule/Breadcrumb";
export default function Cover({ pageName, prevPage, engName, noHeading }: any) {
  return (
    <div className="w-full ">
      <div className="relative  lg:block hidden">
        <Image
          className="w-full shadow-sm"
          src="/img/cover_ymc.jpg"
          width={2000}
          height={500}
          quality={80}
          alt="cover"
          priority={true}
        />
        <div className=" container mx-auto">
          <div
            className="absolute top-[15%] hidden xl:block"
            style={{ textShadow: "1px 1px #2F2F2F" }}
          >
            <p className="text-red-600  text-3xl py-4">
              ศูนย์รวมงานบริษัทญี่ปุ่น
            </p>
            <p className="text-white text-3xl">
              ล่ามภาษาญี่ปุ่น งานที่ใช้ภาษาญี่ปุ่น และตำแหน่งอื่นๆ
            </p>
          </div>
        </div>
        <div className="bg-slate-500/20 absolute bottom-0 w-full">
          <div className=" hidden md:block container mx-auto">
            <Breadcrumb pageName={pageName} prevPage={prevPage} />
          </div>
        </div>
      </div>
      {!noHeading && (
        <div className="container mx-auto mt-4 ">
          <div className="pb-4 border-b mb-4">
            <span className="text-red-600">{engName}</span>
            <h1 className="text-black text-2xl ">{pageName}</h1>
          </div>
        </div>
      )}
    </div>
  );
}
