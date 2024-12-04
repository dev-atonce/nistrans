import Cover from "@/components/website/layout/Cover";
import Image from "next/image";

const fetchBlog = async ({ id }: { id: string }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/blog/slug/${id}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

export default async function ServicePage({
  params,
}: {
  params: { id: string, lng: string };
}) {
  const { id } = params;
  const blog = await fetchBlog({ id });
  const lng = params.lng;
  const blogTitleKey = `blog_title_${lng}`;
  const blogImageKey = `blog_image`;
  const blogDetailKey = `blog_detail_${lng}`;

  const blogTitle = blog[0][blogTitleKey];
  const blogImage = blog[0][blogImageKey];
  const blogDetail = blog[0][blogDetailKey];

  return (
    <>
      <Cover
        noHeading={true}
        pageName="บทความ"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black py-10">
        <h1 className="text-red-600 text-2xl mb-5">{blogTitle}</h1>
        <div className="lg:px-20 flex justify-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${blogImage}`}
            alt={blogTitle}
            width={500}
            height={500}
            quality={80}
            loading="lazy"
            className="h-[500px] object-contain"
          />
        </div>
        <div className="py-10">
          <div dangerouslySetInnerHTML={{ __html: blogDetail }} />
        </div>
      </div>
    </>
  );
}
