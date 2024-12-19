"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function HacoLab({ lang }: any) {
  const t = useTranslations("haco-section");
  return (
    <>
      <>
        <div className="text-slate-600  px-2 container mx-auto 2xl:px-20 py-6 sm:py-20 block md:hidden">
          <div className="">
            <div className="pb-10 flex justify-center items-center flex-col gap-3">
              <h2 className="text-2xl font-[500] text-blue-950 ">
                {t("heading")}{" "}
              </h2>
              <div className="h-1 w-20 bg-orange-400"></div>
            </div>
          </div>

          <div className="">
            <ul className="flex flex-col items-center py-4">
              <li>
                <div className=" font-jpNoto text-2xl font-semibold text-orange-500">
                  HACO Lab.
                </div>
              </li>
              <li>
                <div className="text-base">{t("heading2")}</div>
                <div className="text-sm">
                  {t("p1")}
                  <br />
                  {t("p2")}
                  <br />
                  {t("p3")}
                </div>
              </li>
            </ul>

            <div className="grid grid-cols-12 gap-y-4">
              <div className="col-span-12">
                <section className="flex flex-col items-center">
                  <img
                    src="/img/mobile.png"
                    alt="Control with smartphone"
                    className="img-responsive img-center"
                  />
                  <div className="text-sm">
                    {t("1-1")}
                    <br />
                    {t("1-2")}
                    <br />
                    {t("1-3")}
                  </div>
                </section>
              </div>

              <div className="col-span-12">
                <section className="flex flex-col items-center">
                  <img
                    src="/img/server.png"
                    alt="Labeling containers for easy management"
                    className="img-responsive img-center"
                  />
                  <div className="text-sm">
                    {t("2-1")}
                    <br />
                    {t("2-2")}
                    <br />
                    {t("2-3")}
                  </div>
                </section>
              </div>

              <div className="col-span-12">
                <section className="flex flex-col items-center">
                  <img
                    src="/img/computer.png"
                    alt="Cloud-based information control"
                    className="img-responsive img-center"
                  />
                  <div className="text-sm">
                    {t("3-1")}
                    <br />
                    {t("3-2")}
                    <br />
                    {t("3-3")}
                  </div>
                </section>
                <div className="flex justify-center pt-10">
                  <Link
                    href={`/service`}
                    // href={`/${lang.toLowerCase()}/news-activity`}
                    className=" text-sm sm:text-base rounded-md border border-orange-400 px-4 py-2 flex items-center bg-white text-orange-400 hover:text-white hover:bg-orange-400 transition-all duration-500"
                  >
                    {t("see-more")}
                    {/* {t("button.see-all")} */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homeWarehouse py-20 hidden md:block">
          <div
            className="container  px-2 mx-auto 2xl:px-20 "
            style={{ background: "white" }}
          >
            <section
              className="wow fadeInUp"
              data-wow-offset="50"
              data-wow-delay="0.2s"
            >
              <div
                className="homeWarehouseBox "
                style={{
                  backgroundImage: 'url("/img/005.jpg")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="homeWarehouseTitle">
                  <div className="pb-10 flex justify-center items-center flex-col text-white gap-3">
                    <h2 className="text-2xl pageTitle1">{t("heading")}</h2>
                  </div>
                </div>

                <div className="homeWarehouseText">
                  <ul
                    className="homeWarehouseText_1 "
                    style={{ paddingBottom: "20px !important" }}
                  >
                    <li>
                      <div className="homeWarehouseTextTitle font-jpNoto">
                        HACO Lab.
                      </div>
                    </li>
                    <li>
                      <div style={{ fontSize: "20px", paddingBottom: "5px" }}>
                        {t("heading2")}
                      </div>
                      {t("p1")}
                      <br />
                      {t("p2")}
                      <br />
                      {t("p3")}
                    </li>
                  </ul>

                  <div className="grid grid-cols-12">
                    <div className="col-span-4">
                      <section className="flex flex-col items-center">
                        <img
                          src="/img/006.jpg"
                          alt="Control with smartphone"
                          className="img-responsive img-center"
                        />
                        <div className="homeWarehouseRowText">
                          {t("1-1")}
                          <br />
                          {t("1-2")}
                          <br />
                          {t("1-3")}
                        </div>
                      </section>
                    </div>

                    <div className="col-span-4">
                      <section className="flex flex-col items-center">
                        <img
                          src="/img/007.jpg"
                          alt="Labeling containers for easy management"
                          className="img-responsive img-center"
                        />
                        <div className="homeWarehouseRowText">
                          {t("2-1")}
                          <br />
                          {t("2-2")}
                          <br />
                          {t("2-3")}
                        </div>
                      </section>
                    </div>

                    <div className="col-span-4">
                      <section className="flex flex-col items-center">
                        <img
                          src="/img/008.jpg"
                          alt="Cloud-based information control"
                          className="img-responsive img-center"
                        />
                        <div className="homeWarehouseRowText">
                          {t("3-1")}
                          <br />
                          {t("3-2")}
                          <br />
                          {t("3-3")}
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="flex justify-center pt-10">
              <Link
                href={`/service/haco-lab`}
                // href={`/${lang.toLowerCase()}/news-activity`}
                className="  rounded-md border border-orange-400 px-4 py-2 flex items-center bg-white text-orange-400 hover:text-white hover:bg-orange-400 transition-all duration-500"
              >
                {t("see-more")}
                {/* {t("button.see-all")} */}
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
