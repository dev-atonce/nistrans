import Link from "next/link";
import BlogSection from "@/components/website/organism/BlogSection";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Blog({ home, limit, blogs }: any) {
  return (
    <div className="border-slate-200 py-12 ">
      {home && (
        <div className="pb-20 flex justify-center items-center flex-col text-blue-950 gap-3">
          <h2 className="text-3xl">บทความ</h2>
          <div className="h-1 w-20 bg-orange-400"></div>
        </div>
      )}
      <div className="py-6">
        <BlogSection home={home} limit={limit} blogs={blogs} />
        {home && (
          <div className="flex justify-center pt-10">
            <Link
              href={`/service`}
              // href={`/${lang.toLowerCase()}/news-activity`}
              className="  rounded-md border border-orange-400 px-4 py-2 flex items-center bg-white text-orange-400 hover:text-white hover:bg-orange-400 transition-all duration-500"
            >
              รายละเอียดเพิ่มเติม
              {/* {t("button.see-all")} */}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
