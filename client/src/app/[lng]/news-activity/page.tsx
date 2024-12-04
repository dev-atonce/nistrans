import Cover from "@/components/website/layout/Cover";
import Blog from "@/components/website/layout/Blog";
import { Metadata, ResolvingMetadata } from "next";

const fetchBlog = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/blog?limit=8&type=blog`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};
const pageName = "blog";
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
export default async function BlogPage() {
  const blogs = await fetchBlog();

  return (
    <>
      <Cover
        pageName="บทความ"
        engName="Blog"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto ">
        <Blog home={false} limit={8} blogs={blogs} />
      </div>
    </>
  );
}
