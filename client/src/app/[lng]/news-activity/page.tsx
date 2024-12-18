import Cover from "@/components/website/layout/Cover";
import Blog from "@/components/website/layout/Blog";
import { Metadata, ResolvingMetadata } from "next";
import { useTranslations } from "next-intl";
import LatestNews from "@/components/website/layout/LatestNews";

const pageName = "blog";
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

export default function BlogPage({ params }: { params: { lng: string } }) {
  const t = useTranslations("header");
  return (
    <>
      <Cover
        pageName={t("news")}
        image="/img/service/news_banner.jpg"
        prevPage={{ pageName: t("home"), url: "/" }}
      />
      <div className="container mx-auto 2xl:px-20 px-2 xl:px-0">
        <div className="border-slate-200">
          <LatestNews home={false} lang={params.lng} limit={10} />
        </div>
        <div className="py-4 flex flex-col gap-3 mt-10">
          <h1 className="text-black text-2xl ">{t("blog")}</h1>
          <div className="h-1 w-20 bg-orange-400"></div>
        </div>
        <Blog home={false} limit={6} lng={params.lng} />
      </div>
    </>
  );
}
