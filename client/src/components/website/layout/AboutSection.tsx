import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutSection({ description }: any) {
  const t = useTranslations("about-section");
  return (
    <div className="mt-6 sm:mt-14 pt-6 sm:pb-14 sm:pt-20 relative project shadow-md">
      <div className="absolute top-0 right-0 bottom-0 left-0 ">
        <Image
          src={`/img/about_bg.png`}
          alt="banner"
          width={2000}
          height={500}
          quality={100}
          className="h-full w-full object-cover"
        />
        {/* <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/90"></div> */}
      </div>
      <div className="container mx-auto flex flex-col items-center gap-4 sm:gap-10 relative">
        <div className="flex flex-col items-center gap-4">
          <h1
            className="text-base sm:text-xl font-semibold text-white"
            style={{ textShadow: "black 1px 1px 1px" }}
          >
            {t("heading")}
          </h1>
          <p className="text-white text-sm sm:text-base text-center">
            {t("p")}
          </p>
        </div>
      </div>
      ;
    </div>
  );
}
