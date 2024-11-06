"use client";
import { Row } from "antd";
import BlogCard from "../molecule/BlogCard";
import AntPagination from "@/components/website/molecule/AntPagination";
import { useEffect, useState } from "react";

interface BlogSectionProps {
  limit: number;
  home: boolean;
  blogs?: any;
}

const BlogSection = ({ limit, home, blogs }: BlogSectionProps) => {
  const [page, setPage] = useState(1);
  const [blogList, setBlogList] = useState([]);
  const [total, setTotal] = useState(0);

  async function blogFetch() {
    if (blogs?.rows) {
      setBlogList(blogs?.rows);
    }
    setTotal(blogs?.total);
  }

  useEffect(() => {
    blogFetch();
  }, [page]);

  return (
    <>
      {!blogList?.length ? (
        <p className="text-center p-10">Coming Soon ...</p>
      ) : (
        <>
          <Row gutter={[16, 16]}>
            <BlogCard data={blogList}></BlogCard>
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
