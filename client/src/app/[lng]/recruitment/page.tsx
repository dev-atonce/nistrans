import Cover from "@/components/website/layout/Cover";
import Blog from "@/components/website/layout/Blog";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

const fetchBlog = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/blog/limit/8`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
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
    metadataBase: new URL("https://ymctranslation.com"),
    title: response[`seoTitle${lng}`],
    description: response[`seoDescription${lng}`],
    keywords: response[`seoKeyword${lng}`],
    alternates: {
      canonical: "./",
    },
  };
}
export default async function RecruitmentPage() {
  const blogs = await fetchBlog();
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
          <div className="grid grid-cols-12 py-4 border-b border-slate-200">
            <span className="col-span-3">2023/09/22 </span>
            <span className="col-span-5">Warehouse Supervisor </span>
            <span className="col-span-4">Laem Chabang</span>
          </div>
          <div className="grid grid-cols-12 py-4 border-b border-slate-200">
            <span className="col-span-3">2023/09/22 </span>
            <span className="col-span-5">Warehouse Supervisor </span>
            <span className="col-span-4">Laem Chabang</span>
          </div>
          <div className="grid grid-cols-12 py-4 border-b border-slate-200">
            <span className="col-span-3">2023/09/22 </span>
            <span className="col-span-5">Warehouse Supervisor </span>
            <span className="col-span-4">Laem Chabang</span>
          </div>
          <div className="grid grid-cols-12 py-4 border-b border-slate-200">
            <span className="col-span-3">2023/09/22 </span>
            <span className="col-span-5">Warehouse Supervisor </span>
            <span className="col-span-4">Laem Chabang</span>
          </div>
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
