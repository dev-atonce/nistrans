import Cover from "@/components/website/layout/Cover";
import Image from "next/image";

const fetchService = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/jobservice/home/${id}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

export default async function ServicePage({ params }: { params: { id: any } }) {
  const { id } = params;
  const service = await fetchService(id);
  console.log(service);

  const { service_name_th, service_detail } = service;
  return (
    <>
      <Cover
        noHeading={true}
        pageName="บริการของเรา"
        engName="Service"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black py-10">
        <h1 className="text-red-600 text-2xl">{service_name_th}</h1>
        <div className="py-10">
          <div dangerouslySetInnerHTML={{ __html: service_detail }} />
        </div>
      </div>
    </>
  );
}
