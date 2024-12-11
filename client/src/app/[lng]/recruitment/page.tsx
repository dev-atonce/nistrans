import Cover from "@/components/website/layout/Cover";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import provinces from "@/assets/province.json";
import { Link } from "@/i18n/routing";

const fetchBlog = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/blog?type=recruitment`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data?.rows;
};

const pageName = "recruitment";
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lng = params.lng;
  const seoRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/seo/page-name/${pageName}`;
  // fetch data
  const response = await fetch(seoRoute, { cache: "no-store" }).then((res) =>
    res.json()
  );

  return {
    metadataBase: new URL("https://th.nissin-asia.com"),
    title: response[`seoTitle${lng}`],
    description: response[`seoDescription${lng}`],
    keywords: response[`seoKeyword${lng}`],
    alternates: {
      canonical: "./",
    },
  };
}

const pagename = {
  page: {
    th: "ข่าวรับสมัครบุคลากร",
    en: "Recruitment",
    jp: "採用情報",
  },
  home: {
    th: "หน้าแรก",
    en: "Home",
    jp: "ホームページ",
  },
  date: {
    th: "วันที่ลงประกาศ",
    en: "Date",
    jp: "掲載日",
  },
  position: {
    th: "ตำแหน่ง",
    en: "Position",
    jp: "ポジション",
  },
  location: {
    th: "สถานที่ทำงาน",
    en: "Location",
    jp: "勤務地",
  },
  view: {
    th: "ดูรายละเอียด",
    en: "View",
    jp: "データを表示",
  },
};

export default async function RecruitmentPage({
  params,
}: {
  params: { lng: string };
}) {
  const blogs = await fetchBlog();
  const lng = params.lng;

  const formattedDate = (date: any) => {
    const dateFormat = new Date(date); // Original date
    return `${dateFormat.getFullYear()}/${String(
      dateFormat.getMonth() + 1
    ).padStart(2, "0")}/${String(dateFormat.getDate()).padStart(2, "0")}`;
  };

  return (
    <>
      <Cover
        // @ts-ignore
        pageName={pagename.page[lng]}
        // @ts-ignore
        prevPage={{ pageName: pagename.home[lng], url: "/" }}
      />
      <div className="container px-4 md:px-6 xl:px-0 mx-auto text-slate-800 my-10">
        <div className="text-xs sm:text-sm md:text-base">
          <div className="grid grid-cols-12 pb-8 border-b border-slate-200 font-semibold">
            <span className="col-span-4 md:col-span-2 sm:col-span-2 flex items-center">
              {/* @ts-ignore */}
              {pagename.date[lng]}
            </span>

            <span className="col-span-5 md:col-span-4 sm:col-span-4 flex items-center">
              {/* @ts-ignore */}
              {pagename.position[lng]}
            </span>

            <span className="col-span-3 md:col-span-3 flex items-center">
              {/* @ts-ignore */}
              {pagename.location[lng]}
            </span>
            <span className="hidden md:flex md:col-span-2 sm:col-span-2"></span>
          </div>
          {blogs?.map((i: any) => (
            <div
              className="grid grid-cols-12 py-4 border-b border-slate-200"
              key={i?.id}
            >
              <span className="col-span-4 md:col-span-2 sm:col-span-2 flex items-center">
                {formattedDate(i?.createdAt)}
              </span>
              <span className="col-span-5 md:col-span-4 sm:col-span-4 flex items-center">
                {i[`blog_title_${lng}`]}
              </span>
              <span className="col-span-3 md:col-span-3 flex items-center">
                {/* @ts-ignore */}
                {provinces?.find((j: any) => j?.id == i?.location)["name_en"] ||
                  // @ts-ignore
                  provinces?.find((j: any) => j?.id == i?.location)?.name}
              </span>
              <span className="col-span-12 md:col-span-2 sm:col-span-2 mt-2 md:mt-0 flex justify-end md:justify-start">
                <Link
                  href={`recruitment/${i?.slug}`}
                  className="border-2 border-[#1d2f4f] flex items-center px-3 py-1 md:px-5 md:py-1.5 text-xs md:text-sm text-white bg-[#1d2f4f] hover:bg-white hover:text-[#1d2f4f]"
                >
                  {/* @ts-ignore */}
                  {pagename.view[lng]}
                </Link>
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <Image
            src="/img/recruitment/001.jpg"
            alt="recruitment"
            className="w-full object-cover"
            width={400}
            height={400}
          />
          <Image
            src="/img/recruitment/002.jpg"
            alt="recruitment"
            className="w-full object-cover"
            width={400}
            height={400}
          />
          <Image
            src="/img/recruitment/003.jpg"
            alt="recruitment"
            className="w-full object-cover"
            width={400}
            height={400}
          />
          <Image
            src="/img/recruitment/004.jpg"
            alt="recruitment"
            className="w-full object-cover"
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
}
