import CorBeEN from "@/components/website/layout/corporateBehavior/CorBeEn";
import CorBeJP from "@/components/website/layout/corporateBehavior/CorBeJp";
import CorBeTH from "@/components/website/layout/corporateBehavior/CorBeTh";
import Cover from "@/components/website/layout/Cover";
import { Metadata, ResolvingMetadata } from "next";
import { useTranslations } from "next-intl";

const pageName = "about-us";
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
export default function AboutPage({ params: { lng } }: any) {
  const t = useTranslations("about-pages");
  const h = useTranslations("header");
  const content =
    lng === "th" ? (
      <CorBeTH />
    ) : lng === "en" ? (
      <CorBeEN />
    ) : lng === "jp" ? (
      <CorBeJP />
    ) : (
      <CorBeTH />
    );
  return (
    <>
      <Cover
        pageName={t("behavior")}
        engName="Company Policy"
        prevPage={{ pageName: h("home"), url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black">{content}</div>
    </>
  );
}
