import ServiceCard from "../molecule/ServiceCard";

export default async function ServiceSection({ data }: any) {
  const mocks = [
    {
      serviceNameTH: "ตัวแทนจัดหางาน",
      serviceNameEN: "Recruitment Agency",
      id: "6723623a3bfe8293c45a61e7",
      image: "ser_icon_1.png",
    },
    {
      serviceNameTH: "ล่าม และแปลภาษา",
      serviceNameEN: "Interpreter and Translator",
      id: "672362703bfe8293c45a6204",
      image: "ser_icon_2.png",
    },
    {
      serviceNameTH: "จัดหางาน",
      serviceNameEN: "Recruitment Service Outsourcing",
      id: "6725f68bba81c2130216fe4e",
      image: "ser_icon_3.png",
    },
  ];
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-10 px-20 pt-10 pb-20">
        {mocks?.map((i: any, k: any) => (
          <ServiceCard item={i} key={k} />
        ))}
      </div>
    </div>
  );
}
