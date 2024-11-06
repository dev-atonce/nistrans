import { Divider, Card, Col } from "antd";

import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  data: any[];
}

const BlogCard = ({ data }: BlogCardProps) => {
  return data?.map((item: any, key: number) => {
    return (
      <Col
        xs={24}
        sm={12}
        md={12}
        lg={6}
        key={key}
      >
        <Link
          // @ts-ignore
          href={`/news-activity/${item?.slug}`}
        >
          <Card
            hoverable
            cover={
              <Image
                className="w-full aspect-[3/2] object-cover"
                alt="blog_image"
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.blog_image}`}
                width={500}
                height={300}
                quality={80}
                loading="lazy"
              />
            }
          >
            <div>
              <span
                className="line-clamp-2 text-base  text-slate-800 my-4"
              >
                {item?.blog_title}
              </span>
              <Divider className="mt-3 mb-2" />
              <p className="line-clamp-3 h-11 text-slate-600 ">
                {item?.blog_description}
              </p>
            </div>
          </Card>
        </Link>
      </Col>
    );
  });
};

export default BlogCard;
