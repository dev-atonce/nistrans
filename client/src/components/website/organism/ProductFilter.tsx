import Dropdown from "../molecule/Dropdown";
import provinces from "@/assets/province.json";
import jobTypes from "@/assets/jobType.json";

interface filterProps {
  keyword: string;
  province: string;
  job_type: string;
}

interface ProductFilterProps {
  filter: filterProps;
  setFilter: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onClear: () => void;
  onSearch: () => void;
}

export default function ProductFilter({
  filter,
  setFilter,
  onClear,
  onSearch,
}: ProductFilterProps) {
  return (
    <div className="w-full flex flex-col gap-4 border-slate-100 border shadow-md rounded-lg py-6 px-4 lg:px-20 bg-white">
      <h2 className="text-2xl text-[#0DA1DB] ">ค้นหางาน</h2>
      <div className="grid grid-cols-12 gap-4">
        <input
          name="keyword"
          value={filter?.keyword}
          onChange={setFilter}
          type="text"
          placeholder="คำค้นหา"
          className="focus:ring-0 focus:outline-none lg:col-span-4 col-span-12 bg-slate-100 rounded-md px-4 py-2 text-slate-700"
        />
        <div className="lg:col-span-4 col-span-12">
          <Dropdown
            list={jobTypes}
            label="ประเภทงาน"
            topLabel={false}
            selectedOption={filter.job_type}
            setSelectedOption={setFilter}
            keyProp="job_type"
            status={false}
          />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <Dropdown
            list={provinces}
            label="เลือกจังหวัด"
            topLabel={false}
            selectedOption={filter.province}
            setSelectedOption={setFilter}
            keyProp="province"
            status={false}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 w-full">
        <button
          className="py-2 px-10 bg-[#ED1F23] rounded-lg text-white md:w-fit w-full"
          onClick={onClear}
        >
          รีเซ็ต
        </button>
        <button
          className="py-2 px-10 bg-[#0DA1DB] rounded-lg text-white md:w-fit w-full"
          onClick={onSearch}
        >
          ค้นหา
        </button>
      </div>
    </div>
  );
}
