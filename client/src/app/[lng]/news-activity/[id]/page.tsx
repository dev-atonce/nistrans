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
  params: { id: string };
}) {
  const { id } = params;
  const blog = await fetchBlog({ id });
  const { blog_title, blog_image, blog_detail } = blog[0];

  return (
    <>
      <Cover
        noHeading={true}
        pageName="บทความ"
        engName="Blog"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black py-10">
        <h1 className="text-red-600 text-2xl">{blog_title}</h1>
        <div className="lg:px-20 flex justify-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${blog_image}`}
            alt={blog_title}
            width={500}
            height={500}
            quality={80}
            loading="lazy"
            className="h-[500px] object-contain"
          />
        </div>
        <div className="py-10">
          <div dangerouslySetInnerHTML={{ __html: blog_detail }} />
        </div>
      </div>
    </>
  );
}
