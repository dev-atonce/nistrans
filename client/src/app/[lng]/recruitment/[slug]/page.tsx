import Cover from "@/components/website/layout/Cover";
import { Link } from "@/i18n/routing";
import { FaRegClock } from "react-icons/fa";
import 'react-quill/dist/quill.snow.css';

const fetchBlog = async ({ slug }: { slug: string }) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/blog/slug/${slug}`,
        {
            cache: "no-store",
        }
    );
    const data = await res.json();
    return data;
};

const convertedDate = (date: any) => {
    const formattedDate = `${date.getFullYear()}.${String(
        date.getMonth() + 1
    ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;

    return formattedDate;
};

const pagename = {
    page: {
        th: "ข่าวรับสมัครบุคลากร",
        en: "Recruitment",
        jp: "採用情報",
    },
    home: {
        th: "หน้าแรก",
        en: "Home",
        jp: "ホームページ",
    },
    date: {
        th: "วันที่ลงประกาศ",
        en: "Date",
        jp: "掲載日",
    },
    view: {
        th: "สมัครงานตำแหน่งนี้",
        en: "Apply for this position",
        jp: "募集内容に応募する",
    }
};

export default async function RecruitmentDetailPage({ params }: { params: { slug: string, lng: string } }) {
    const { slug } = params;
    const blog = await fetchBlog({ slug });
    console.log(blog);

    const lng = params.lng;
    const blogTitleKey = `blog_title_${lng}`;
    const blogDetailKey = `blog_detail_${lng}`;

    const blogTitle = blog[0][blogTitleKey];
    const blogDetail = blog[0][blogDetailKey];
    const blogDate = new Date(blog[0].createdAt);

    return (
        <>
            <Cover
                noHeading={true}
                // @ts-ignore
                pageName={pagename.page[lng]}
                // @ts-ignore
                prevPage={{ pageName: pagename.home[lng], url: "/" }}
            />
            <div className="container mx-auto pb-10 text-black py-10">
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                        <h1 className="text-red-600 text-2xl">{blogTitle}</h1>
                    </div>
                    <div className="text-slate-500 text-md flex items-center gap-2">
                        {/* @ts-ignore */}
                        {pagename.date[lng]} <FaRegClock /><div>{convertedDate(blogDate)}</div>
                    </div>
                </div>
                <div className="py-10 ql-editor">
                    <div dangerouslySetInnerHTML={{ __html: blogDetail }} />
                </div>
                <div className="flex justify-center items-center gap-2 mt-10">
                    {/* @ts-ignore */}
                    <Link href={`/contact`} className="border-2 border-[#1d2f4f] flex items-center px-10 py-1 text-sm text-white bg-[#1d2f4f] hover:bg-white hover:text-[#1d2f4f]">{pagename.view[lng]}</Link>
                </div>
            </div>
        </>
    );
}
