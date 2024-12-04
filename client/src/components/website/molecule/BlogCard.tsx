import { Card, Col } from "antd";
import Image from "next/image";
import { Link } from '@/i18n/routing';

interface BlogCardProps {
  data: any[];
  lng: string;
}

const BlogCard = ({ data, lng }: BlogCardProps) => {
  return data?.map((item: any, key: number) => {
    return (
      <Col xs={24} sm={12} md={12} lg={8} key={key}>
        <Link
          // @ts-ignore
          href={`/news-activity/${item?.slug}`}
        >
          <Card
            className="z-1"
            hoverable
            cover={
              <Image
                className="w-full aspect-[3/2] object-cover"
                alt="blog_image"
                // src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.blog_image}`}
                src={`/img/about.png`}
                width={500}
                height={300}
                quality={80}
                loading="lazy"
              />
            }
          >
            <div>
              <span className="line-clamp-2 text-base text-slate-800 mb-1">
                {item[`blog_title_${lng}`]}
              </span>
              <p className="line-clamp-3 h-11 text-slate-600">
                {item[`blog_description_${lng}`]}
              </p>
            </div>
          </Card>
        </Link>
      </Col>
    );
  });
};

export default BlogCard;
