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

interface BannerSlideProps {
  banner: ApiResponse;
}

export default function CoverSwiper({ banner }: BannerSlideProps) {
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
            {banner['rows'].map((item: BannerProps, key: number) => {
              return (
                <SwiperSlide key={key} className="ralative ">
                  <Link href={item.link ? item.link : '/'} className="relative">
                    <div className=" container mx-auto">
                      <div
                        className="absolute lg:top-[30%] top-0  "
                        style={{ textShadow: "1px 1px #2F2F2F" }}
                      >
                        <h1 className="text-black text-2xl md:text-5xl py-4">
                          ศูนย์รวมงานบริษัทญี่ปุ่น
                        </h1>
                        <p className="text-red-600 text-sm sm:text-lg md:text-3xl">
                          ล่ามภาษาญี่ปุ่น งานที่ใช้ภาษาญี่ปุ่น และตำแหน่งอื่นๆ
                        </p>
                      </div>
                    </div>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                      alt={item.image_alt}
                      width={1920}
                      height={500}
                      className=" object-cover  w-full aspect-[4/1]"
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </ul>
        </Swiper>
      </div>
    </div >
  );
}
