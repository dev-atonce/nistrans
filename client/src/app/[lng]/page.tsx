import CoverSwiper from "@/components/website/layout/CoverSwiper";
import JobList from "@/components/website/layout/JobList";
import Blog from "@/components/website/layout/Blog";

import ServiceSection from "@/components/website/layout/ServiceSection";
import AboutSection from "@/components/website/layout/AboutSection";
import HomeMoving from "@/components/website/layout/HomeMoving";
import WarehouseManagement from "@/components/website/layout/WarehouseManagement";
import HacoLab from "@/components/website/layout/HacoLab";
import LatestNews from "@/components/website/layout/LatestNews";

interface Props {
  params: { lng: string };
}

const fetchBlog = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/blog/limit/3`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

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
  const blogs = await fetchBlog();
  const banner = await fetchBanner();

  return (
    <>
      {/* Banner */}
      <CoverSwiper banner={banner} lang={lng} />

      <ServiceSection lang={lng} />
      <AboutSection lang={lng} />
      <HomeMoving lang={lng} />
      <WarehouseManagement lang={lng} />
      <HacoLab lang={lng} />
      <LatestNews lang={lng} />
      {/* Blog */}
      <div className="container mx-auto">
        <Blog home={true} limit={3} blogs={blogs} lang={lng} />
      </div>
    </>
  );
}
