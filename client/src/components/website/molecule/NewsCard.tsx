import { FaRegFilePdf } from "react-icons/fa";

const convertedDate = (date: any) => {
  const formattedDate = `${date.getFullYear()}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;

  return formattedDate;
};

export default function NewsCard({ item }: any) {
  const date = new Date(item?.createdAt);
  return (
    <div className="bg-white p-4 rounded-md text-sm text-slate-700">
      <div className="grid grid-cols-12">
        <div className="col-span-2">{convertedDate(date)}</div>
        <div className="col-span-1 hidden lg:block">
          <span className="bg-slate-700 rounded-xl px-1 py-1 text-xs text-white ">
            ประกาศ
          </span>
        </div>
        <div className="col-span-8 border-l border-slate-200 px-2">
          {item?.blog_title_th}
        </div>
        <a
          href={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.attachment}`}
          className="col-span-1"
        >
          <FaRegFilePdf size={25} />
        </a>
      </div>
    </div>
  );
}
