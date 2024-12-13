import Cover from "@/components/website/layout/Cover";
import { useTranslations } from "next-intl";

export default function MachineInstallation() {
  const h = useTranslations("header");
  const t = useTranslations("machinery-installation");
  const b = useTranslations("branchs");
  return (
    <>
      <Cover
        noHeading={true}
        pageName={t("h1")}
        engName="Service"
        prevPage={{ pageName: h("home"), url: "/" }}
        image="/img/service/machinery-installation/banner.jpg"
      />
      <div className="container px-2 xl:px-0 mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">{t("h1")}</h1>
        <div className="py-10">
          <div className="branchesTopic text-center no-padding-l no-padding-r">
            <div>{t("section1.p")}</div>
          </div>

          <h2 className="pageTitle1">{t("h2")}</h2>

          <div className="mt-10 mb-20">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-2 hidden xl:block"></div>
              <div className="col-span-3 md:col-span-2 xl:col-span-1">
                <div className="relative flex">
                  <div className="bg-orange-50 h-40">
                    <p className="[writing-mode:vertical-lr] h-full text-center p-3">
                      {t("section1.1.1")}
                    </p>
                  </div>
                  <div className="arrow-right"></div>
                </div>
                <img src="/img/service/service-7.png" alt={t("section1.1")} />
              </div>
              <div className="col-span-3 md:col-span-2 xl:col-span-1">
                <div className="relative flex">
                  <div className="bg-orange-50 h-40 min-w-16">
                    <p className="[writing-mode:vertical-lr] h-full text-center p-3">
                      {t("section1.1.2")}
                    </p>
                  </div>
                  <div className="arrow-right"></div>
                </div>
                <img src="/img/service/service-8.png" alt={t("section1.1.2")} />
              </div>
              <div className="col-span-3 md:col-span-2 xl:col-span-1">
                <div className="relative flex">
                  <div className="bg-orange-50 h-40  min-w-18">
                    <p className="[writing-mode:vertical-lr] h-full text-center p-3">
                      {t("section1.1.3")}
                    </p>
                  </div>
                  <div className="arrow-right"></div>
                </div>
                <img src="/img/service/service-9.png" alt={t("section1.1.3")} />
              </div>
              <div className="col-span-3 md:col-span-2 xl:col-span-1">
                <div className="relative flex">
                  <div className="bg-orange-50 h-40  min-w-18">
                    <p className="[writing-mode:vertical-lr] h-full text-center p-3">
                      {t("section1.1.4")}
                    </p>
                  </div>
                  <div className="arrow-right"></div>
                </div>
                <img
                  src="/img/service/service-10.png"
                  alt={t("section1.1.4")}
                />
              </div>
              <div className="col-span-3 md:col-span-2 xl:col-span-1">
                <div className="relative flex">
                  <div className="bg-orange-50 h-40  min-w-18">
                    <p className="[writing-mode:vertical-lr] h-full text-center p-3">
                      {t("section1.1.5")}
                    </p>
                  </div>
                  <div className="arrow-right"></div>
                </div>
                <img src="/img/service/service-9.png" alt={t("section1.1.5")} />
              </div>
              <div className="col-span-3 md:col-span-2 xl:col-span-1">
                <div className="relative flex">
                  <div className="bg-orange-50 h-40  min-w-18">
                    <p className="[writing-mode:vertical-lr] h-full text-center p-3">
                      {t("section1.1.6")}
                    </p>
                  </div>
                  <div className="arrow-right"></div>
                </div>
                <img src="/img/service/service-2.png" alt={t("section1.1.6")} />
              </div>
              <div className="col-span-3 md:col-span-2 xl:col-span-1">
                <div className="relative flex">
                  <div className="bg-orange-50 h-40  min-w-18">
                    <p className="[writing-mode:vertical-lr] h-full text-center p-3">
                      {t("section1.1.7")}
                    </p>
                  </div>
                  <div className="arrow-right"></div>
                </div>
                <img src="/img/service/service-1.png" alt={t("section1.1.7")} />
              </div>
              <div className="col-span-3 md:col-span-2 xl:col-span-1">
                <div className="relative flex">
                  <div className="bg-orange-50 h-40  min-w-18">
                    <p className="[writing-mode:vertical-lr] h-full text-center p-3">
                      {t("section1.1.8")}
                    </p>
                  </div>
                </div>
                <img src="/img/service/service-7.png" alt={t("section1.1.8")} />
              </div>
            </div>
          </div>

          <div className="picRow1">
            <div className="grid grid-cols-12 md:grid-cols-11 gap-4">
              <div className="col-span-1 hidden md:block"></div>
              <div className="col-span-6 md:col-span-3">
                <img
                  src="/img/service/machinery-installation/001.jpg"
                  className="img-responsive"
                  alt={t("section1.2.1")}
                />
                <div className="macInsText1">{t("section1.2.1")}</div>
              </div>
              <div className="col-span-6 md:col-span-3">
                <img
                  src="/img/service/machinery-installation/002.jpg"
                  className="img-responsive"
                  alt={t("section1.2.2")}
                />
                <div className="macInsText1">{t("section1.2.2")}</div>
              </div>
              <div className="col-span-6 md:col-span-3">
                <img
                  src="/img/service/machinery-installation/003.jpg"
                  className="img-responsive"
                  alt={t("section1.2.3")}
                />
                <div className="macInsText1">{t("section1.2.3")}</div>
              </div>
              <div className="hidden md:block col-span-1"></div>
              <div className="hidden md:block col-span-1"></div>
              <div className="col-span-6 md:col-span-3">
                <img
                  src="/img/service/machinery-installation/004.jpg"
                  className="img-responsive"
                  alt={t("section1.2.4")}
                />
                <div className="macInsText1">{t("section1.2.4")}</div>
              </div>
              <div className="col-span-6 md:col-span-3">
                <img
                  src="/img/service/machinery-installation/005.jpg"
                  className="img-responsive"
                  alt={t("section1.2.5")}
                />
                <div className="macInsText1">{t("section1.2.5")}</div>
              </div>
              <div className="col-span-6 md:col-span-3">
                <img
                  src="/img/service/machinery-installation/006.jpg"
                  className="img-responsive"
                  alt={t("section1.2.6")}
                />
                <div className="macInsText1">{t("section1.2.6")}</div>
              </div>
            </div>
          </div>
          <div className="handlingBox">
            <div className="handlingTitle">{b("title")}</div>
            <ul className="list-disc grid md:flex">
              <li className="ms-8 ps-0">{b("ayutthaya")}</li>
              <li className="ms-8 ps-0">{b("bangpakong")}</li>
              <li className="ms-8 ps-0">{b("laem-chabang")}</li>
              <li className="ms-8 ps-0">{b("prachinburi")}</li>
              <li className="ms-8 ps-0">{b("chiang-mai")}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
