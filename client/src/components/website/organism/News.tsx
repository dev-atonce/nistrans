import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import NewsCard from "../molecule/NewsCard";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsFillBoxSeamFill } from "react-icons/bs";

export default function News() {
  return (
    <div className=" px-0 sm:px-4 lg:px-20 xl:px-40  z-20 container mx-auto absolute top-90 ">
      <div className="w-full gap-4 border-slate-100 border shadow-md rounded-lg py-4 px-4 lg:px-4 bg-slate-200 grid grid-cols-12 text-slate-700 ">
        <div className="rounded-md col-span-10 grid-cols-12 grid gap-2">
          <div className="col-span-9 rounded-md grid grid-cols-1 gap-1 ">
            <NewsCard />
            <NewsCard />
          </div>
          <div className="col-span-1 rounded-md bg-white flex flex-col items-center justify-around">
            <div>
              <FaCaretUp size={40} />
            </div>
            <div>
              <FaCaretDown size={40} />
            </div>
          </div>
          <div className="col-span-2 rounded-md bg-white  flex items-center justify-center">
            <TfiMenuAlt size={42} className="" />
          </div>
        </div>
        <button className="bg-white rounded-md col-span-2 items-center flex flex-col justify-center gap-2">
          <div>
            <BsFillBoxSeamFill size={50} />
          </div>
          <div className="text-sm">ติดตามการขนส่งทางอากาศ</div>
        </button>
      </div>
    </div>
  );
}
