"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import { ApiResponse, BannerProps } from "@/types/bannerType";
import News from "../organism/News";
import { useTranslations } from "next-intl";

interface BannerSlideProps {
  banner: ApiResponse;
}

export default function CoverSwiper({ banner, lang, home, limit }: any) {
  const t = useTranslations("cover");
  return (
    <div className="header-slider">
      <div className="w-full header-cover relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={true}
          loop={true}
          speed={1200}
          effect="fade"
        >
          <ul className="">
            {banner["rows"].map((item: BannerProps, key: number) => {
              return (
                <SwiperSlide key={key} className=" ">
                  <div className="">
                    <div className="container  px-2 mx-auto   ">
                      <div
                        className="absolute xl:top-[40px] 2xl:top-[100px] w-full top-0 left-0 right-0  flex flex-col items-center gap-4"
                        style={{ textShadow: "1px 1px #2F2F2F" }}
                      >
                        <p className="text-white text-3xl xl:text-5xl py-4 text-center font-[600]">
                          {t("h1")}
                        </p>
                        <p className="text-white text-sm sm:text-lg xl:text-3xl hidden sm:block font-[500]">
                          {t("h2")}
                        </p>
                        <p className="text-white text-sm sm:text-lg xl:text-xl xl:w-[70%] text-center hidden md:block">
                          {t("p")}
                        </p>
                      </div>
                    </div>
                    <Image
                      // src={"/img/banner1.png"}
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image} `}
                      alt={item.image_alt}
                      width={1920}
                      height={500}
                      className=" object-cover  w-full aspect-[3/1]"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </ul>
        </Swiper>
        <div className="container mx-auto">
          <News lang={lang} home={home} limit={limit} />
        </div>
      </div>
    </div>
  );
}
