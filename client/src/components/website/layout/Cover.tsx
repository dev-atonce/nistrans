import Image from "next/image";
import Breadcrumb from "../molecule/Breadcrumb";
import { useTranslations } from 'next-intl';

export default function Cover({ pageName, prevPage, noHeading }: any) {
  const t = useTranslations('cover');

  return (
    <div className="w-full ">
      <div className="relative lg:block hidden">
        <Image
          className="w-full shadow-sm"
          src="/img/cover_img.png"
          width={2000}
          height={500}
          quality={80}
          alt="cover"
          priority={true}
        />
        <div className=" container mx-auto px-2 xl:px-0">
          <div
            className="absolute top-[15%] hidden xl:block"
            style={{ textShadow: "1px 1px #2F2F2F" }}
          >
            <p className="text-white  text-3xl py-2">
              {t('h1')}
            </p>
            <p className="text-white text-2xl py-2">
              {t('h2')}
            </p>
            <p className="text-white text-base w-[70%]">
              {t('p')}
            </p>
          </div>
        </div>
        <div className="bg-slate-500/20 w-full">
          <div className=" hidden md:block container mx-auto px-2 xl:px-0">
            <Breadcrumb pageName={pageName} prevPage={prevPage} />
          </div>
        </div>
      </div>
      {!noHeading && (
        <div className="container mx-auto mt-4 px-2 xl:px-0">
          <div className="py-4 flex flex-col gap-3 ">
            <h1 className="text-black text-2xl ">{pageName}</h1>
            <div className="h-1 w-20 bg-orange-400"></div>
          </div>
        </div>
      )}
    </div>
  );
}
