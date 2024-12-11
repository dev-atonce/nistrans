"use client";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import NewsCard from "../molecule/NewsCard";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function News({ lang, home, limit }: any) {
  const t = useTranslations("blog-section");
  const [page, setPage] = useState(1);
  const [newsList, setNewsList] = useState([]);
  const [total, setTotal] = useState(0);
  const fetchNews = async (page: number, limit: number) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/blog?limit=${limit}&type=news&page=${page}`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    setNewsList(data?.rows);
    setTotal(data?.total);
  };

  const nextPage = () => {
    if (page * limit < total) {
      setPage((prev: any) => prev + 1);
    }
  };
  const prevPage = () => {
    if (page != 1) {
      setPage((prev: any) => prev - 1);
    }
  };
  useEffect(() => {
    fetchNews(page, limit);
  }, [page, limit]);

  return (
    <div className=" px-0 sm:px-4 lg:px-0  xl:px-20 2xl:px-40  z-20 container mx-auto hidden absolute lg:block md:top-[200px] top-[100px] xl:top-[280px] 2xl:top-[360px]">
      <div className="w-full gap-4 border-slate-100 border shadow-md rounded-lg py-4 px-4 lg:px-4 bg-slate-200 grid grid-cols-12 text-slate-700 ">
        <div className="rounded-md col-span-10 grid-cols-12 grid gap-2">
          <div className="col-span-9 rounded-md grid grid-cols-1 gap-1 ">
            {newsList?.map((i: any, index: any) => (
              <NewsCard lang={lang} item={i} key={index} />
            ))}
          </div>
          <div className="col-span-1 rounded-md bg-white flex flex-col items-center justify-around">
            <button className="">
              <FaCaretUp
                size={40}
                onClick={prevPage}
                className={`${page == 1 && "text-slate-200"}`}
              />
            </button>
            <button>
              <FaCaretDown
                size={40}
                onClick={nextPage}
                className={`${page * limit >= total - 1 && "text-slate-200"}`}
              />
            </button>
          </div>
          <Link
            href="/news-activity"
            className="col-span-2 hover:bg-black hover:text-white transition-all rounded-md bg-white  flex items-center justify-center"
          >
            <TfiMenuAlt size={42} className="" />
          </Link>
        </div>
        <a
          href="https://www2.nissin-tw.co.jp/trace/cgi-bin/index.asp?language=0"
          className="hover:bg-black hover:text-white transition-all bg-white rounded-md col-span-2 items-center flex flex-col justify-center gap-2 py-4"
        >
          <div>
            <BsFillBoxSeamFill size={50} />
          </div>
          <div className="text-sm text-center hidden lg:block ">
            {t("tracking")}
          </div>
        </a>
      </div>
    </div>
  );
}
