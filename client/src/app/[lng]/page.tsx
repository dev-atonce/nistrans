import CoverSwiper from "@/components/website/layout/CoverSwiper";
import Blog from "@/components/website/layout/Blog";
import ServiceSection from "@/components/website/layout/ServiceSection";
import AboutSection from "@/components/website/layout/AboutSection";
import HomeMoving from "@/components/website/layout/HomeMoving";
import WarehouseManagement from "@/components/website/layout/WarehouseManagement";
import HacoLab from "@/components/website/layout/HacoLab";
import LatestNews from "@/components/website/layout/LatestNews";
import Image from "next/image";

interface Props {
  params: { lng: string };
}

const fetchBanner = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/banner`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

export default async function Home({ params }: Props) {
  const lng = params.lng;
  const banner = await fetchBanner();

  return (
    <>
      {/* Banner */}
      <CoverSwiper banner={banner} lang={lng} home={true} limit={2} />
      <ServiceSection lang={lng} />
      <AboutSection lang={lng} />
      <HomeMoving lang={lng} />
      <WarehouseManagement lang={lng} />
      <HacoLab lang={lng} />
      <LatestNews home={true} lang={lng} limit={5} />
      {/* Blog */}
      <div className="container mx-auto 2xl:px-20 px-2">
        <Blog home={true} limit={3} lng={lng} />
        <div className="py-4 grid grid-cols-12 gap-4  md:w-[80%]  mx-auto">
          <a
            target="_blank"
            className="col-span-12 sm:col-span-4 "
            href="https://www.nissin-tw.com/english"
          >
            <Image
              src="/img/ex_1.jpg "
              className="w-full"
              width={400}
              height={200}
              alt="link"
            />
          </a>
          <a
            target="_blank"
            className="col-span-12 sm:col-span-4 "
            href="https://www.nissin-trvl.co.jp/en/overview"
          >
            <Image
              src="/img/ex_2.jpg "
              width={400}
              height={200}
              alt="link"
              className="w-full"
            />
          </a>
          <a
            target="_blank"
            className="col-span-12 sm:col-span-4 "
            href="https://www.siamnissin-seo.com/en/index.html"
          >
            <Image
              src="/img/ex_3.jpg "
              className="w-full"
              width={400}
              height={200}
              alt="link"
            />
          </a>
        </div>
      </div>
    </>
  );
}
