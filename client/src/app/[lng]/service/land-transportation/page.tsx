import Cover from "@/components/website/layout/Cover";
import { useTranslations } from "next-intl";

export default function LandTransport() {
  const h = useTranslations("header");
  const t = useTranslations("land-transportation");
  const b = useTranslations("branchs");
  return (
    <>
      <Cover
        noHeading={true}
        pageName={t("h1")}
        engName="Service"
        prevPage={{ pageName: h("home"), url: "/" }}
        image="/img/service/land-transportation/banner.jpg"
      />
      <div className="container 2xl:px-20 px-2  xl:px-6  mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">{t("h1")}</h1>
        <div className="py-10">
          <div>
            <div className="branchesTopic">{t("section1.p")}</div>
            <h2 className="pageTitle1">{t("h2")}</h2>

            <div style={{ height: "40px" }}></div>

            <ul className="textNum mt-4 mb-0">
              <li className="nNum">
                <div className="nNumText">{t("section2.title")}</div>
                <div className="nNumNum">01</div>
              </li>
              <li className="tText">{t("section2.1.1")}</li>
            </ul>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-1"></div>
              <div className="col-span-12 md:col-span-4">
                <div className="bg-slate-200 p-6">
                  <h5 className="font-bold text-xl mb-2">
                    {t("section2.1.2")}
                  </h5>
                  <p className="text-lg mb-2">・{t("section2.1.3")}</p>
                  <p className="text-lg mb-2">・{t("section2.1.4")}</p>
                  <p className="text-lg mb-2">・{t("section2.1.5")}</p>
                  <p className="text-lg mb-2">・{t("section2.1.6")}</p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <img
                  src="/img/service/land-transportation/001.jpg"
                  className="img-responsive"
                  alt="Land Transportation"
                  style={{ height: "228px" }}
                />
              </div>
            </div>

            <ul className="textNum">
              <li className="nNum">
                <div className="nNumText">{t("section2.title")}</div>
                <div className="nNumNum">02</div>
              </li>
              <li className="tText">{t("section2.2.1")}</li>
            </ul>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-1 md:col-span-1"></div>
              <div className="col-span-12 md:col-span-4">
                <div className="flex justify-between">
                  <div>
                    <a
                      className="fancyBox"
                      href="/img/service/land-transportation/002.jpg"
                      rel="groupimg"
                      title=""
                    >
                      <img
                        src="/img/service/land-transportation/002.jpg"
                        className="img-responsive img-thumbnail max-h-80"
                        alt="Land Transportation"
                      />
                    </a>
                    <div className="imgText">Q Mark</div>
                  </div>
                  <div>
                    <img
                      src="/img/service/land-transportation/007.jpg"
                      className="pull-left max-h-80"
                      alt="Land Transportation"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 mt-4 md:col-span-4 md:mt-0 mb-8">
                <span>{t("section2.2.2")}</span>
              </div>
            </div>

            <ul className="textNum">
              <li className="nNum">
                <div className="nNumText">{t("section2.title")}</div>
                <div className="nNumNum">03</div>
              </li>
              <li className="tText">{t("section2.3.1")}</li>
            </ul>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-1"></div>
              <div className="col-span-12 md:col-span-3">
                <div className="grid">
                  <div className="flex">
                    <a
                      className="fancyBox"
                      href="/img/service/land-transportation/004.jpg"
                      rel="groupimg"
                      title=""
                    >
                      <img
                        src="/img/service/land-transportation/004.jpg"
                        className="img-responsive img-thumbnail"
                        alt="Land Transportation"
                      />
                    </a>
                    <a
                      className="fancyBox"
                      href="/img/service/land-transportation/005.jpg"
                      rel="groupimg"
                      title=""
                    >
                      <img
                        src="/img/service/land-transportation/005.jpg"
                        className="img-responsive img-thumbnail"
                        alt="Land Transportation"
                      />
                    </a>
                  </div>
                  <div className="imgText">{t("section2.3.4")}</div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 mb-">
                <p className="mb-2">{t("section2.3.2")}</p>
                <p className="mb-2">{t("section2.3.3")}</p>
              </div>
            </div>

            <div className="mb-10">
              <ul className="textNum no-margin-t">
                <li className="nNum">
                  <div className="nNumText">{t("section2.title")}</div>
                  <div className="nNumNum">04</div>
                </li>
                <li className="tText">{t("section2.4.1")}</li>
              </ul>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-1"></div>
                <div className="col-span-12 md:col-span-10">
                  <p>{t("section2.4.2")}</p>
                </div>
                <div className="col-span-1"></div>
                <div className="sm:hidden md:col-span-1"></div>
                <div className="col-span-1 hidden md:block"></div>
                <div className="col-span-12 md:col-span-7">
                  <img
                    src="/img/service/land-transportation/003.jpg"
                    className="img-responsive"
                    alt="Land Transportation"
                  />
                </div>
                <div className="col-span-3 md:hidden"></div>
                <div className="col-span-6 md:col-span-2">
                  <a
                    className="fancyBox"
                    href="/img/service/land-transportation/006.jpg"
                    rel="groupimg"
                    title=""
                  >
                    <img
                      src="/img/service/land-transportation/006.jpg"
                      className="img-responsive img-thumbnail"
                      alt="Land Transportation"
                    />
                  </a>
                  <div className="imgText">
                    <span>{t("section2.4.3")}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="handlingBox">
                <div className="handlingTitle">{b("title")}</div>
                <ul className="list-disc grid md:flex">
                  <li className="ms-8 ps-0">{b("bangkok")}</li>
                  <li className="ms-8 ps-0">{b("ayutthaya")}</li>
                  <li className="ms-8 ps-0">{b("bangpakong")}</li>
                  <li className="ms-8 ps-0">{b("laem-chabang")}</li>
                  <li className="ms-8 ps-0">{b("prachinburi")}</li>
                  <li className="ms-8 ps-0">{b("chiang-mai")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
