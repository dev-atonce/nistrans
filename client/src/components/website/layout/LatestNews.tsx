"use client";

import { Link } from "@/i18n/routing";
import NewsCard from "../molecule/NewsCard";
import { useState, useEffect } from "react";
import AntPagination from "../molecule/AntPagination";
import { useTranslations } from "next-intl";

export default function LatestNews({ home, lang, limit }: any) {
  const [page, setPage] = useState(1);
  const [newsList, setNewsList] = useState([]);
  const [total, setTotal] = useState(0);
  const t = useTranslations("blog-section");

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

  useEffect(() => {
    fetchNews(page, limit);
  }, [page, limit]);

  return (
    <>
      <div className="container mx-auto border-b border-slate-100 mb-10 pb-10 px-2 xl:px-0">
        {home && (
          <div
            className={`pb-20 flex justify-center items-center flex-col text-blue-950 gap-3`}
          >
            <h2 className="text-4xl font-[500]">{t("news")}</h2>
            <div className="h-1 w-20 bg-orange-400"></div>
          </div>
        )}
        <div className="lg:px-40 border-slate-200">
          {newsList?.map((i: any, index: number) => (
            <div key={index} className="border-b border-slate-200">
              <NewsCard item={i} lang={lang} />
            </div>
          ))}
        </div>
        {home && total > 0 && (
          <div className="flex justify-center pt-10">
            <Link
              href={`/news-activity`}
              className="  rounded-md border border-orange-400 px-4 py-2 flex items-center bg-white text-orange-400 hover:text-white hover:bg-orange-400 transition-all duration-500"
            >
              {t("more")}
            </Link>
          </div>
        )}
        {!home && total > limit && (
          <AntPagination
            total={total}
            currentPage={page}
            setCurrentPage={setPage}
            pageSize={limit}
          />
        )}
      </div>
    </>
  );
}
