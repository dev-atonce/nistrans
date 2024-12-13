"use client";
import { Link } from "@/i18n/routing";
import ProductCard from "../molecule/ProductCard";
import { useTranslations } from "next-intl";

export default function ServiceSection({ data, page, lang }: any) {
  const lng = lang.toUpperCase();
  const t = useTranslations("service-section");

  const mocks = [
    {
      serviceNameTH: "การขนส่งทางทะเล",
      serviceNameEN: "Sea Freight Forwarding",
      serviceNameJP: "シー フレイト フォワーディング",
      id: "6723623a3bfe8293c45a61e7",
      url: "sea-freight",
      image: "/img/sea-freight.jpg",
    },
    {
      serviceNameTH: "การขนส่งทางอากาศ",
      serviceNameEN: "Air Freight Forwarding",
      serviceNameJP: "エアー フレイト フォワーディング",
      id: "672362703bfe8293c45a6204",
      url: "air-freight",
      image: "/img/air-freight.jpg",
    },
    {
      serviceNameTH: "การขนส่งทางบก",
      serviceNameEN: "Land Transportation",
      serviceNameJP: "陸上輸送",
      id: "6725f68bba81c2130216fe4e",
      url: "land-transportation",
      image: "/img/land.jpg",
    },
    {
      serviceNameTH: "ธุรกิจคลังสินค้า",
      serviceNameEN: "Warehouse",
      serviceNameJP: "倉庫・保管",
      id: "6725f68bba81c2130216fe4e",
      url: "warehouse",
      image: "/img/warehouse.jpg",
    },
  ];
  const mock2 = [
    {
      serviceNameTH: "การขนส่งทางทะเล",
      serviceNameEN: "Sea Freight Forwarding",
      serviceNameJP: "シー フレイト フォワーディング",
      id: "6723623a3bfe8293c45a61e7",
      url: "sea-freight",
      image: "/img/sea-freight.jpg",
    },
    {
      serviceNameTH: "การขนส่งทางอากาศ",
      serviceNameEN: "Air Freight Forwarding",
      serviceNameJP: "エアー フレイト フォワーディング",
      id: "672362703bfe8293c45a6204",
      url: "air-freight",
      image: "/img/air-freight.jpg",
    },
    {
      serviceNameTH: "การขนส่งทางบก",
      serviceNameEN: "Land Transportation",
      serviceNameJP: "陸上輸送",
      id: "6725f68bba81c2130216fe4e",
      url: "land-transportation",
      image: "/img/land.jpg",
    },
    {
      serviceNameTH: "ธุรกิจคลังสินค้า",
      serviceNameEN: "Warehouse",
      serviceNameJP: "倉庫・保管",
      id: "6725f68bba81c2130216fe4e",
      url: "warehouse",
      image: "/img/warehouse.jpg",
    },
    {
      serviceNameTH: "การขนส่งเครื่องจักร",
      serviceNameEN: "Machinery Installation",
      serviceNameJP: "設備輸送",
      id: "6723623a3bfe8293c45a61e7",
      url: "machinery-installation",
      image: "/img/machine.jpg",
    },
    {
      serviceNameTH: "ธุรกิจงานขนย้าย",
      serviceNameEN: "House Moving",
      serviceNameJP: "引越",
      id: "672362703bfe8293c45a6204",
      url: "house-moving",
      image: "/img/moving.jpg",
    },
    {
      serviceNameTH: "งานบรรจุภัณฑ์",
      serviceNameEN: "Packing・Loading",
      serviceNameJP: "梱包",
      id: "6725f68bba81c2130216fe4e",
      url: "packing-loading",
      image: "/img/packing.jpg",
    },
    {
      serviceNameTH: "งานพิธีการศุลกากร",
      serviceNameEN: "Customs Clearance",
      serviceNameJP: "通関",
      id: "6725f68bba81c2130216fe4e",
      url: "custom-clearance",
      image: "/img/customs.jpg",
    },
    {
      serviceNameTH: "SCM Solution",
      serviceNameEN: "SCM Solution",
      serviceNameJP: "SCM ソリューション",
      id: "6725f68bba81c2130216fe4e",
      url: "scm-solutions",
      image: "/img/solution.jpg",
    },
  ];
  const list = page ? mock2 : mocks;
  return (
    <div className="container  px-2 mx-auto 2xl:px-20 py-20">
      <div className="pb-20 flex justify-center items-center flex-col text-blue-950 gap-3">
        <h2 className="text-3xl font-[500]"> {t("heading")}</h2>
        <div className="h-1 w-20 bg-orange-400"></div>
      </div>
      <div className="grid grid-cols-12 gap-6 md:px-20 ">
        {list?.map((i: any, k: any) => (
          <ProductCard item={i} key={k} lng={lng} />
        ))}
      </div>
      {!page && (
        <div className="flex justify-center">
          <Link
            href={`/service`}
            className="  rounded-md border border-orange-400 px-4 py-2 flex items-center bg-white text-orange-400 hover:text-white hover:bg-orange-400 transition-all duration-500"
          >
            {t("see-more")}
          </Link>
        </div>
      )}
    </div>
  );
}
