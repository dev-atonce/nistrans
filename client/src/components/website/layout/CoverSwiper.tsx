"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";
import { ApiResponse, BannerProps } from "@/types/bannerType";
import News from "../organism/News";

interface BannerSlideProps {
  banner: ApiResponse;
}

export default function CoverSwiper({ banner, lang }: any) {
  return (
    <div className="header-slider">
      <div className="w-full header-cover">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={true}
          loop={true}
          speed={1200}
          effect="fade"
        >
          <ul>
            {banner["rows"].map((item: BannerProps, key: number) => {
              return (
                <SwiperSlide key={key} className=" ">
                  <div className="">
                    <div className="container mx-auto relative ">
                      <div
                        className="absolute lg:top-[80px] w-full top-0 left-0 right-0  flex flex-col items-center gap-4"
                        style={{ textShadow: "1px 1px #2F2F2F" }}
                      >
                        <h1 className="text-white text-2xl md:text-5xl py-4 ">
                          Reaching and Delivering to the World
                        </h1>
                        <p className="text-white text-sm sm:text-lg md:text-3xl">
                          A pioneer in international multimodal logistics
                        </p>
                        <p className="text-white text-sm sm:text-lg md:text-xl w-[50%] text-center">
                          SIAM NISTRANS (Thai Nissin) is committed to extending
                          its business overseas, and providing innovative
                          strategies in order to meet different business needs
                          and be a real Global Logistics Service Provider.
                        </p>
                      </div>
                      <News />
                    </div>
                    <Image
                      src={"/img/banner1.png"}
                      // src={`${process.env.NEXT_PUBLIC_BASE_URL}${
                      //   item?.image"
                      // } `}
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
      </div>
    </div>
  );
}
