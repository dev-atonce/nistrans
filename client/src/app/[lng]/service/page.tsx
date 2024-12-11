import Cover from "@/components/website/layout/Cover";
import ServiceSection from "@/components/website/layout/ServiceSection";
import { Metadata, ResolvingMetadata } from "next";

const pageName = "service";
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
export default function ServicePage({ params: { lng } }: any) {
  const lang = lng;
  return (
    <>
      <Cover
        pageName="บริการของเรา"
        engName="Service"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto ">
        <ServiceSection page={true} lang={lang} />
      </div>
    </>
  );
}
