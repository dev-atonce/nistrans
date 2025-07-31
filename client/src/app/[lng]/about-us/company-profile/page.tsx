import CompoEn from "@/components/website/layout/CompanyProfile/CompoEn";
import CompoJp from "@/components/website/layout/CompanyProfile/CompoJp";
import CompoTh from "@/components/website/layout/CompanyProfile/CompoTh";
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
      <CompoTh />
    ) : lng === "en" ? (
      <CompoEn />
    ) : lng === "jp" ? (
      <CompoJp />
    ) : (
      <CompoTh />
    );
  return (
    <>
      <Cover
        pageName={t("profile")}
        engName="About Us"
        image="/img/service/comin_banner.jpg"
        prevPage={{ pageName: h("home"), url: "/" }}
      />
      {content}
    </>
  );
}
