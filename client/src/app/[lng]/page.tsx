import CoverSwiper from "@/components/website/layout/CoverSwiper";
import JobList from "@/components/website/layout/JobList";
import Blog from "@/components/website/layout/Blog";

const fetchBlog = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/blog/limit/4`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

const fetchBanner = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/banner`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

export default async function Home() {
  const blogs = await fetchBlog();
  const banner = await fetchBanner();

  return (
    <>
      {/* Banner */}
      <CoverSwiper banner={banner} />

      {/* Job List */}
      <JobList />

      {/* Blog */}
      <div className="container mx-auto">
        <Blog home={true} limit={4} blogs={blogs} />
      </div>
    </>
  );
}
