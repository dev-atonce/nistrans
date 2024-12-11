import CompoEn from "@/components/website/layout/CompanyProfile/CompoEn";
import CompoJp from "@/components/website/layout/CompanyProfile/CompoJp";
import CompoTh from "@/components/website/layout/CompanyProfile/CompoTh";
import Cover from "@/components/website/layout/Cover";
import { Metadata, ResolvingMetadata } from "next";

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
export default async function AboutPage({ params: { lng } }: any) {
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
        pageName="ข้อมูลบริษัท"
        engName="About Us"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      {content}
    </>
  );
}
