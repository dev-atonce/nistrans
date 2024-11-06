"use client";
import { useEffect, useState } from "react";
import ProductFilter from "../organism/ProductFilter";
import Image from "next/image";
import Link from "next/link";
import JobListingTable from "../organism/JobListingTable";
import CompanyContact from "./CompanyContact";

interface filterProps {
  keyword: string;
  province: string;
  job_type: string;
}

export default function JobList() {
  // const [isFullTimeJob, setIsFullTimeJob] = useState(true);
  const [menuListState, setMenuListState] = useState(true);
  const [pageState, setPageState] = useState(1);
  const [query, setQuery] = useState("");
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState<filterProps>({
    keyword: "",
    job_type: "",
    province: "",
  });

  const fetchJob = async () => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/jobpost?page=${pageState}&${query}`,
      {
        cache: "no-store",
      }
    );
    data.json().then((data) => {
      setData(data?.rows);
      setTotal(data?.total);
    });
  };

  const onChangeFilter = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const query = new URLSearchParams(
      Object.entries(filter).reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {} as Record<string, string>)
    ).toString();
    setQuery(query)
  }, [filter]);

  const onClear = () => {
    setPageState(1);
    setFilter({ keyword: "", province: "", job_type: "" });
  };

  const onSearch = () => {
    fetchJob();
  };

  useEffect(() => {
    fetchJob();
  }, [pageState]);

  return (
    <div>
      <div className=" px-0 sm:px-4 lg:px-20 xl:px-40 md:mt-[-70px] relative z-20 container mx-auto">
        <ProductFilter
          filter={filter}
          setFilter={onChangeFilter}
          onClear={onClear}
          onSearch={onSearch}
        />
      </div>
      <div className="text-black relative pt-20">
        <div className="flex justify-center gap-2 translate-y-2 relative z-0 md:text-xl ">
          <button
            className={`${!menuListState ? "bg-white" : "bg-[#F6F6F6] "
              } p-4 rounded-xl flex flex-col sm:flex-row gap-4 items-center border-slate-200 border transition-all duration-100 hover:cursor-pointer`}
            onClick={() => setMenuListState(true)}
          >
            <div className="bg-[#ED1F23] rounded-full p-4">
              <Image
                src="/img/building_vector.png"
                height="50"
                width="50"
                alt="icon"
              />
            </div>
            <div>
              <div className="text-red-600 ">หางานสำหรับผู้สมัคร</div>
              <div>For Candidate</div>
            </div>
          </button>
          <button
            className={`${menuListState ? "bg-white" : "bg-[#F6F6F6] "
              } p-4 rounded-xl flex flex-col sm:flex-row gap-4 items-center border-slate-200 border transition-all duration-100 hover:cursor-pointer`}
            onClick={() => setMenuListState(false)}
          >
            <div className="bg-[#ED1F23] rounded-full p-4">
              <Image
                src="/img/people_vector.png"
                height="50"
                width="50"
                alt="icon"
              />
            </div>
            <div>
              <div className="text-red-600">หาคนสำหรับบริษัท</div>
              <div>For Corporate</div>
            </div>
          </button>
        </div>
        <div className="bg-[#F6F6F6]  py-10 relative z-10 ">
          {menuListState ? (
            <div className="container mx-auto">
              <div className="flex justify-end gap-1">
                {/* <div className="flex  gap-1 md:gap-3">
                  <button
                    className={`${isFullTimeJob
                      ? "border border-red-500 text-red-600"
                      : " bg-slate-200"
                      } px-1 md:px-4 md:py-2 rounded-lg transition-all duration-100 `}
                    onClick={() => setIsFullTimeJob(true)}
                  >
                    Full-Time Jobs
                  </button>
                  <button
                    onClick={() => setIsFullTimeJob(false)}
                    className={`${!isFullTimeJob
                      ? "border border-red-500 text-red-600"
                      : " bg-slate-200"
                      } px-1 md:px-4 md:py-2 rounded-lg transition-all duration-100 `}
                  >
                    Freelance Jobs
                  </button>
                </div> */}

                <Link
                  href="/resume"
                  className={`bg-[#0DA1DB] px-1 md:px-4 md:py-2 rounded-lg transition-all duration-100 text-white `}
                >
                  ฝากประวัติ
                </Link>
              </div>
              <div className="py-4">
                <JobListingTable
                  pageState={pageState}
                  setPageState={setPageState}
                  data={data}
                  total={total}
                />
              </div>
            </div>
          ) : (
            <div className="container mx-auto  ">
              <h2 className="text-center text-2xl py-4">
                สำหรับบริษัทที่ต้องการสรรหาบุคคล
              </h2>
              <div className="bg-white p-10 reounded-xl">
                <CompanyContact />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
