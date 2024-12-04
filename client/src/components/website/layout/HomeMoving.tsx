import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HomeMoving({ lang }: any) {
  const t = useTranslations("moving-section");
  return (
    <div className="py-20">
      <div className="container mx-auto text-slate-700">
        <div className="pb-20 flex justify-center items-center flex-col text-blue-950 gap-3">
          <h2 className="text-3xl">{t("heading")}</h2>
          <div className="h-1 w-20 bg-orange-400"></div>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
          <div className="col-span-4">
            <section className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center p-6 rounded-full border-2 border-black text-center gap-2 w-[200px] h-[200px]">
                <div className="text-xs ">
                  <br />
                  {t("1-1")}
                </div>
                <div className="text-orange-500">{t("1-2")}</div>
                <img className="w-[50px] rounded-full" src="../img/001.jpg" />
              </div>
              <div className="">{t("1-3")}</div>
            </section>
          </div>

          <div className="col-span-4">
            <section className="flex flex-col items-center gap-4">
              <div className=" flex flex-col items-center p-6 rounded-full border-2 border-black text-center gap-2 w-[200px] h-[200px]">
                <div className="text-xs">{t("2-1")}</div>
                <div className=" text-orange-500">{t("2-2")}</div>
                <img className="w-[50px] " src="../img/002.jpg" />
              </div>
              <div className="">{t("2-3")}</div>
            </section>
          </div>

          <div className="col-span-4">
            <section className=" flex flex-col items-center gap-4">
              <div className=" flex flex-col items-center p-6 rounded-full border-2 border-black text-center gap-2 w-[200px] h-[200px]">
                <div className="text-xs">{t("3-1")}</div>
                <div className=" text-orange-500">{t("3-2")}</div>
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="../img/003.jpg"
                />
              </div>
              <div className="">{t("3-3")}</div>
            </section>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href={`${lang}/service/moving`}
            className="  rounded-md border border-orange-400 px-4 py-2 flex items-center bg-white text-orange-400 hover:text-white hover:bg-orange-400 transition-all duration-500"
          >
            รายละเอียดเพิ่มเติม
            {/* {t("button.see-all")} */}
          </Link>
        </div>
      </div>
    </div>
  );
}
