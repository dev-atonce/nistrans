import Link from "next/link";
import BlogSection from "@/components/website/organism/BlogSection";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Blog({ home, limit, blogs }: any) {
  return (
    <div className="border-slate-200 py-12 ">
      {home && (
        <div className="pb-4 border-b ">
          <span className="text-red-600">BLOG</span>
          <h2 className="text-black text-2xl ">บทความ</h2>
        </div>
      )}
      <div className="py-6">
        <BlogSection
          home={home}
          limit={limit}
          blogs={blogs}
        />
        {home && (
          <div className="flex justify-center pt-10">
            <Link
              className="rounded-xl px-4 py-2 bg-[#E00A0A]  "
              href="/news-activity"
            >
              อ่านเพิ่มเติม
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
