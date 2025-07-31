import Contact from "@/components/website/layout/Contact";
import Cover from "@/components/website/layout/Cover";
import { Metadata, ResolvingMetadata } from "next";
import { useTranslations } from "next-intl";

const pageName = "contact";
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

export default function ContactPage() {
  const t = useTranslations("header");
  return (
    <>
      <Cover
        pageName={t("contact")}
        prevPage={{ pageName: t("home"), url: "/" }}
      />
      <div className="container mx-auto 2xl:px-20 px-2 xl:px-0">
        <Contact />
      </div>
    </>
  );
}
