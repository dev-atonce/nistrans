import Link from "next/link";
import ProductCard from "../molecule/ProductCard";

export default async function ServiceSection({ data, page, lang }: any) {
  const lng = lang.toUpperCase();

  const mocks = [
    {
      serviceNameTH: "การขนส่งทางทะเล",
      serviceNameEN: "Sea Freight Forwarding",
      id: "6723623a3bfe8293c45a61e7",
      url: "sea-freight",
      image: "/img/sea-freight.jpg",
    },
    {
      serviceNameTH: "การขนส่งทางอากาศ",
      serviceNameEN: "Air Freight Forwarding",
      id: "672362703bfe8293c45a6204",
      url: "sea-freight",
      image: "/img/air-freight.jpg",
    },
    {
      serviceNameTH: "การขนส่งทางบก",
      serviceNameEN: "Land Transportation",
      id: "6725f68bba81c2130216fe4e",
      url: "sea-freight",
      image: "/img/land.jpg",
    },
    {
      serviceNameTH: "ธุรกิจคลังสินค้า",
      serviceNameEN: "Warehouse",
      id: "6725f68bba81c2130216fe4e",
      url: "sea-freight",
      image: "/img/warehouse.jpg",
    },
  ];
  const mock2 = [
    {
      serviceNameTH: "การขนส่งทางทะเล",
      serviceNameEN: "Sea Freight Forwarding",
      id: "6723623a3bfe8293c45a61e7",
      url: "sea-freight",
      image: "/img/sea-freight.jpg",
    },
    {
      serviceNameTH: "การขนส่งทางอากาศ",
      serviceNameEN: "Air Freight Forwarding",
      id: "672362703bfe8293c45a6204",
      url: "sea-freight",
      image: "/img/air-freight.jpg",
    },
    {
      serviceNameTH: "การขนส่งทางบก",
      serviceNameEN: "Land Transportation",
      id: "6725f68bba81c2130216fe4e",
      url: "sea-freight",
      image: "/img/land.jpg",
    },
    {
      serviceNameTH: "ธุรกิจคลังสินค้า",
      serviceNameEN: "Warehouse",
      id: "6725f68bba81c2130216fe4e",
      url: "sea-freight",
      image: "/img/warehouse.jpg",
    },
    {
      serviceNameTH: "การขนส่งเครื่องจักร",
      serviceNameEN: "Machinery Installation",
      id: "6723623a3bfe8293c45a61e7",
      url: "sea-freight",
      image: "/img/machine.jpg",
    },
    {
      serviceNameTH: "ธุรกิจงานขนย้าย",
      serviceNameEN: "House Moving",
      id: "672362703bfe8293c45a6204",
      url: "sea-freight",
      image: "/img/moving.jpg",
    },
    {
      serviceNameTH: "งานบรรจุภัณฑ์",
      serviceNameEN: "Packing・Loading",
      id: "6725f68bba81c2130216fe4e",
      url: "sea-freight",
      image: "/img/packing.jpg",
    },
    {
      serviceNameTH: "งานพิธีการศุลกากร",
      serviceNameEN: "Customs Clearance",
      id: "6725f68bba81c2130216fe4e",
      url: "sea-freight",
      image: "/img/customs.jpg",
    },
    {
      serviceNameTH: "SCM Solution",
      serviceNameEN: "SCM Solution",
      id: "6725f68bba81c2130216fe4e",
      url: "sea-freight",
      image: "/img/solution.jpg",
    },
  ];
  const list = page ? mock2 : mocks;
  return (
    <div className="container mx-auto py-20">
      <div className="pb-20 flex justify-center items-center flex-col text-blue-950 gap-3">
        <h2 className="text-3xl">บริการของ Siam Nistrans</h2>
        <div className="h-1 w-20 bg-orange-400"></div>
      </div>
      <div className="grid grid-cols-12 gap-6 px-20 ">
        {list?.map((i: any, k: any) => (
          <ProductCard item={i} key={k} lng={lng} />
        ))}
      </div>
      {!page && (
        <div className="flex justify-center">
          <Link
            href={`/${lang}/service`}
            className="  rounded-md border border-orange-400 px-4 py-2 flex items-center bg-white text-orange-400 hover:text-white hover:bg-orange-400 transition-all duration-500"
          >
            บริการทั้งหมดของเรา
            {/* {t("button.see-all")} */}
          </Link>
        </div>
      )}
    </div>
  );
}

// "use client";
// import ProductCard from "../ProductCard/ProductCard";
// import { useTranslation } from "next-i18next";
// export default function ServiceSection({ lang, services, page }: any) {
//   const { t } = useTranslation(lang);
//   return (
//     <div className="">
//       {page && (
//         <h2 className="text-2xl font-semibold text-slate-800 text-start mb-4">
//           {t("page.service")}
//         </h2>
//       )}

//       <div className="grid grid-cols-12 gap-4">
//         {services?.map((i: any, k: any) => (
//           <ProductCard item={i} key={k} lang={lang} />
//         ))}
//       </div>
//     </div>
//   );
// }
