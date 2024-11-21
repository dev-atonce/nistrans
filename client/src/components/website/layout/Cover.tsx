import Image from "next/image";
import Breadcrumb from "../molecule/Breadcrumb";
export default function Cover({ pageName, prevPage, engName, noHeading }: any) {
  return (
    <div className="w-full ">
      <div className="relative  lg:block hidden">
        <Image
          className="w-full shadow-sm"
          src="/img/cover_img.png"
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
            <p className="text-white  text-3xl py-2">
              Reaching and Delivering to the World{" "}
            </p>
            <p className="text-white text-2xl py-2">
              A pioneer in international multimodal logistics
            </p>
            <p className="text-white text-base w-[70%]">
              SIAM NISTRANS (Thai Nissin) is committed to extending its business
              overseas, and providing innovative strategies in order to meet
              different business needs and be a real Global Logistics Service
              Provider.
            </p>
          </div>
        </div>
        <div className="bg-slate-500/20 w-full">
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
