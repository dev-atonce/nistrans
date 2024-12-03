import Link from "next/link";
import NewsCard from "../molecule/NewsCard";

export default function LatestNews({ lang, news }: any) {
  return (
    <div className="container mx-auto border-b border-slate-100 pb-20">
      <div className="pb-20 flex justify-center items-center flex-col text-blue-950 gap-3">
        <h2 className="text-3xl">ข่าวสารล่าสุด</h2>
        <div className="h-1 w-20 bg-orange-400"></div>
      </div>
      <div className="lg:px-40 border-slate-200">
        {news?.map((i: any) => (
          <div className="border-b border-slate-200">
            <NewsCard />
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-10">
        <Link
          href={`/${lang}/news-activity`}
          // href={`/${lang.toLowerCase()}/news-activity`}
          className="  rounded-md border border-orange-400 px-4 py-2 flex items-center bg-white text-orange-400 hover:text-white hover:bg-orange-400 transition-all duration-500"
        >
          รายละเอียดเพิ่มเติม
          {/* {t("button.see-all")} */}
        </Link>
      </div>
    </div>
  );
}
