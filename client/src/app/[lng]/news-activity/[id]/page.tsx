import Cover from "@/components/website/layout/Cover";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import 'react-quill/dist/quill.snow.css';

const fetchBlog = async ({ id }: { id: string }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/blog/slug/${id}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

const convertedDate = (date: any) => {
  const formattedDate = `${date.getFullYear()}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;

  return formattedDate;
};

const pagename = {
  home: {
    th: "หน้าแรก",
    en: "Home",
    jp: "ホームページ",
  },
  news: {
    th: "ข่าวสารล่าสุด",
    en: "News",
    jp: "ニュースと活動",
  },
  blog: {
    th: "บทความ",
    en: "Blog",
    jp: "ブログ",
  },
  announcement: {
    th: "ประกาศ",
    en: "Announcement",
    jp: "お知らせ",
  }
};

export default async function ServicePage({ params }: { params: { id: string, lng: string } }) {
  const { id } = params;
  const blog = await fetchBlog({ id });
  const lng = params.lng;
  const blogTitleKey = `blog_title_${lng}`;
  const blogImageKey = `blog_image`;
  const blogDetailKey = `blog_detail_${lng}`;

  const blogTitle = blog[0][blogTitleKey];
  const blogImage = blog[0][blogImageKey];
  const blogDetail = blog[0][blogDetailKey];
  const blogType = blog[0].type;
  const blogDate = new Date(blog[0].createdAt);

  return (
    <>
      <Cover
        noHeading={true}
        // @ts-ignore
        pageName={pagename[blogType][lng]}
        // @ts-ignore
        prevPage={{ pageName: pagename.home[lng], url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black py-10">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <h1 className="text-red-600 text-2xl">{blogTitle}</h1>
            {blogType == "news" &&
              <span className="bg-slate-700 rounded-xl px-1 py-1 text-xs text-white">
                {
                  // @ts-ignore
                  pagename.announcement[lng]}
              </span>
            }
          </div>
          <div className="text-slate-500 text-md flex items-center gap-2">
            <FaRegClock /><div>{convertedDate(blogDate)}</div>
          </div>
        </div>
        <div className="lg:px-20 flex justify-center">
          {blogImage &&
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${blogImage}`}
              alt={blogTitle}
              width={500}
              height={500}
              quality={80}
              loading="lazy"
              className="h-[500px] object-contain"
            />
          }
        </div>
        <div className="py-10 ql-editor">
          <div dangerouslySetInnerHTML={{ __html: blogDetail }} />
        </div>
      </div>
    </>
  );
}
