import Cover from "@/components/website/layout/Cover";
import jobTypes from "@/assets/jobType.json";
import Link from "next/link";

const fetchData = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/jobpost/job/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function JobPage({ params }: { params: { id: string } }) {
  const data = await fetchData(params.id);
  return (
    <>
      <Cover
        noHeading={true}
        pageName="สมัครงาน"
        engName="Job"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black py-10">
        <h1 className="text-black text-2xl">{data.job_position}</h1>
        <div className="flex flex-col gap-2">
          <div className="py-4">
            <label className="font-semibold text-red-500">ตำแหน่งงาน</label>
            <p>{data.job_position}</p>
          </div>
          <div className="py-4">
            <label className="font-semibold text-red-500">Code งาน</label>
            <p>{data.job_code}</p>
          </div>
          <div className="py-4">
            <label className="font-semibold text-red-500">รายละเอียดงาน</label>
            <div dangerouslySetInnerHTML={{ __html: data.job_description }} />
          </div>
          <div className="py-4">
            <label className="font-semibold text-red-500">เงินเดือน</label>
            <p>{data.salary}</p>
          </div>
          <div className="py-4">
            <label className="font-semibold text-red-500">ลักษณะงาน</label>
            <p>{jobTypes.find((type) => type.id === data.job_type)?.name}</p>
          </div>
          <div className="py-4">
            <label className="font-semibold text-red-500">สถานที่ทำงาน</label>
            <p>{data.location}</p>
          </div>
          <div className="py-4 text-red-500 font-semibold">
            <p>ใส่รายละเอียดสำหรับสมัครงานตำแหน่งนี้</p>
          </div>
          <div>
            <Link href={`/job/${params.id}/apply`} className="bg-red-600 py-2 px-4 rounded-xl text-white border-white border hover:border-red-600 hover:bg-white hover:text-red-600 transition-all">
              สมัคร
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
