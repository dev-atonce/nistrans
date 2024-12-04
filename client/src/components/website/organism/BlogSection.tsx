"use client";
import { Row } from "antd";
import BlogCard from "../molecule/BlogCard";
import AntPagination from "@/components/website/molecule/AntPagination";
import { useEffect, useState } from "react";

interface BlogSectionProps {
  limit: number;
  home: boolean;
  lng: string;
}

const BlogSection = ({ limit, home, lng }: BlogSectionProps) => {
  const [page, setPage] = useState(1);
  const [blogList, setBlogList] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchBlog = async (page: number, limit: number) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/blog?limit=${limit}&type=blog&page=${page}`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    setBlogList(data?.rows);
    setTotal(data?.total);
  };

  useEffect(() => {
    fetchBlog(page, limit);
  }, [page, limit]);

  return (
    <>
      {!blogList?.length ? (
        <p className="text-center p-10">Coming Soon ...</p>
      ) : (
        <>
          <Row gutter={[16, 16]}>
            <BlogCard data={blogList} lng={lng}></BlogCard>
          </Row>
          {!home && (
            <AntPagination
              total={total}
              currentPage={page}
              setCurrentPage={setPage}
              pageSize={limit}
            />
          )}
        </>
      )}
    </>
  );
};

export default BlogSection;
