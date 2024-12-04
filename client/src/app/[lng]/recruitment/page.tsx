import Cover from "@/components/website/layout/Cover";
import Blog from "@/components/website/layout/Blog";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import provinces from "@/assets/province.json";

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
const pageName = "blog";
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lng = "TH";

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
export default async function RecruitmentPage({ params: { lang } }: any) {
  const blogs = await fetchBlog();

  const formattedDate = (date: any) => {
    const dateFormat = new Date(date); // Original date
    return `${dateFormat.getFullYear()}/${String(
      dateFormat.getMonth() + 1
    ).padStart(2, "0")}/${String(dateFormat.getDate()).padStart(2, "0")}`;
  };

  return (
    <>
      <Cover
        pageName="ข่าวรับสมัครบุคลากร"
        engName="Recruitment"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto text-slate-800 py-10">
        <div className="text-xs md:text-base">
          {/* <Blog home={false} limit={8} blogs={blogs} /> */}
          <div className="grid grid-cols-12 pb-8 border-b border-slate-200 font-semibold">
            <span className="col-span-3">วันที่ลงประกาศ</span>
            <span className="col-span-5">ตำแหน่ง</span>
            <span className="col-span-4">สถานที่ทำงาน</span>
            {/* <span className="col-span-2"></span> */}
          </div>
          {blogs?.map((i: any) => (
            <div className="grid grid-cols-12 py-4 border-b border-slate-200">
              <span className="col-span-3">{formattedDate(i?.createdAt)} </span>
              <span className="col-span-5">
                {i[`blog_title_${lang}`] || i?.blog_title_th}
              </span>
              <span className="col-span-4">
                {/* @ts-ignore */}
                {provinces?.find((j: any) => j?.id == i?.location)["name_en"] ||
                  // @ts-ignore
                  provinces?.find((j: any) => j?.id == i?.location)?.name}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 md:grid-cols-12 py-4 gap-4 ">
          <Image
            src="/img/recruitment/001.jpg"
            alt="recruitment"
            className="col-span-3"
            width={400}
            height={400}
          />
          <Image
            src="/img/recruitment/002.jpg"
            alt="recruitment"
            className="col-span-3"
            width={400}
            height={400}
          />
          <Image
            src="/img/recruitment/003.jpg"
            alt="recruitment"
            className="col-span-3"
            width={400}
            height={400}
          />
          <Image
            src="/img/recruitment/004.jpg"
            alt="recruitment"
            className="col-span-3"
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
}
