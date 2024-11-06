import Link from "next/link";
import { JobPostProps } from "@/types/jobPostType";
import AntPagination from "../molecule/AntPagination";
import jobTypes from "@/assets/jobType.json";

interface JobPostProp {
  pageState: number;
  setPageState: (page: number) => void;
  total: number;
  data: JobPostProps[];
}

export default function JobListingTable({
  data,
  total,
  pageState,
  setPageState,
}: JobPostProp) {
  return (
    <div className="w-full flex flex-col gap-1 text-xs sm:text-base">
      <div className="flex bg-[#ED1F23] rounded-lg py-4 px-4 text-white">
        <div className="w-[25%]">Type of Work</div>
        <div className="w-[40%]">Position</div>
        <div className="w-[20%]">Location</div>
        <div className="w-[15%]">Salary</div>
      </div>
      <div className="text-slate-600">
        {data.map((item: JobPostProps, index: number) => (
          <Link
            href={`job/${item.id}`}
            key={index}
            className="flex rounded-lg py-4 px-4 border-b border-white hover:bg-slate-200 group"
          >
            <div className="w-[25%]">
              {jobTypes.find((type) => type.id === item.job_type)?.name}
            </div>
            <div className="w-[40%] group-hover:text-red-600">
              {item.job_position}
            </div>
            <div className="w-[20%]">{item.location}</div>
            <div className="w-[15%] notranslate">
              <span className="group-hover:text-red-600">$</span>
              {item.salary}
            </div>
          </Link>
        ))}
        {total > 10 && (
          <AntPagination
            total={total}
            currentPage={pageState}
            setCurrentPage={setPageState}
            pageSize={10}
          />
        )}
      </div>
    </div>
  );
}
