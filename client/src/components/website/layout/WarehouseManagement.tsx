import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Warehouse({ lang }: any) {
  const t = useTranslations("warehouse-section");
  return (
    <div className="">
      <div className="container mx-auto">
        <section className="md:w-[80%] w-full md:mx-auto">
          <div className="flex items-center text-slate-700">
            <div className="bg-slate-100 p-10 rounded-lg">
              <div className="py-10 flex justify-center items-center flex-col text-blue-950 gap-3">
                <h2 className="text-2xl">{t("heading")}</h2>
                <div className="h-1 w-20 bg-orange-400"></div>
              </div>

              <div className="pb-4">{t("p")}</div>

              <section className="bg-white my-1">
                <ul className="grid grid-cols-12">
                  <li className="col-span-2 flex flex-col items-center gap-1 bg-blue-950 text-white py-2">
                    <div className="nNumText">{t("point")}</div>
                    <div className="nNumNum">01</div>
                  </li>
                  <li className="col-span-10 px-4 py-2">{t("1")}</li>
                </ul>
              </section>

              <section className="bg-white my-1">
                <ul className="grid grid-cols-12">
                  <li className="col-span-2 flex flex-col items-center gap-1 bg-blue-950 text-white py-2">
                    <div className="nNumText">{t("point")}</div>
                    <div className="nNumNum">02</div>
                  </li>
                  <li className="col-span-10 px-4 py-2">{t("2")}</li>
                </ul>
              </section>

              <section className="my-1 bg-white">
                <ul className="grid grid-cols-12">
                  <li className="col-span-2 flex flex-col items-center gap-1 bg-blue-950 text-white py-2">
                    <div className="nNumText">{t("point")}</div>
                    <div className="nNumNum">03</div>
                  </li>
                  <li className="col-span-10 px-4 py-2">{t("3")}</li>
                </ul>
              </section>

              <section
                className="my-1 bg-white"
                data-wow-offset="50"
                data-wow-delay="1.4s"
              >
                <ul className="grid grid-cols-12">
                  <li className="col-span-2 flex flex-col items-center gap-1 bg-blue-950 text-white py-2">
                    <div className="nNumText">{t("point")}</div>
                    <div className="nNumNum">04</div>
                  </li>
                  <li className="col-span-10 px-4 py-2">{t("4")}</li>
                </ul>
              </section>
            </div>

            <img src="../img/004.jpg" className="rounded-lg xl:block hidden" />

            {/* <a className="pageBtnMore pageBtnMore_1" href="warehouse.php">
              <div className="pageBtnMoreBg"></div>
              <div className="pageBtnMoreHover"></div>
              <div className="pageBtnMoreText">รายละเอียดเพิ่มเติม</div>
            </a> */}
          </div>
          <div className="flex justify-center pt-10">
            <Link
              href={`${lang}/service/warehouse`}
              // href={`/${lang.toLowerCase()}/news-activity`}
              className="  rounded-md border border-orange-400 px-4 py-2 flex items-center bg-white text-orange-400 hover:text-white hover:bg-orange-400 transition-all duration-500"
            >
              {t("see-more")}
              {/* {t("button.see-all")} */}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
