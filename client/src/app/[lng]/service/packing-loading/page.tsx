import Cover from "@/components/website/layout/Cover";
import { useTranslations } from "next-intl";

export default function Packing() {
  const h = useTranslations("header");
  const t = useTranslations("packing-loading");
  const b = useTranslations("branchs");
  return (
    <>
      <Cover
        noHeading={true}
        pageName={t("h1")}
        engName="Service"
        prevPage={{ pageName: h("home"), url: "/" }}
        image="/img/service/packing-loading/banner.jpg"
      />
      <div className="container px-2 xl:px-0 mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">{t("h1")}</h1>
        <div className="py-10">
          <div className="branchesTopic no-padding-r text-center">
            {t("section1.p")}
          </div>
          <h2 className="pageTitle1">{t("h2")}</h2>

          <div className="picRow1">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <div className="pacLoaText3 no-margin-t">
                  {t("section1.1.title")}
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <img
                  src="/img/service/packing-loading/001.jpg"
                  className="img-responsive"
                  alt="Packing・Loading"
                />
              </div>
              <div className="col-span-12 md:col-span-4">
                <img
                  src="/img/service/packing-loading/002.jpg"
                  className="img-responsive"
                  alt="Packing・Loading"
                />
              </div>
              <div className="col-span-12 md:col-span-4">
                <img
                  src="/img/service/packing-loading/003.jpg"
                  className="img-responsive"
                  alt="Packing・Loading"
                />
              </div>
              <div className="col-span-12">
                <div className="pacLoaText2">{t("section1.1.p")}</div>
                <div className="pacLoaText3">{t("section1.2.title")}</div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <img
                  src="/img/service/packing-loading/004.jpg"
                  className="img-responsive"
                  alt="Packing・Loading"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <img
                  src="/img/service/packing-loading/005.jpg"
                  className="img-responsive"
                  alt="Packing・Loading"
                />
              </div>
              <div className="col-span-12">
                <div className="pacLoaText2">{t("section1.2.p")}</div>
                <div className="pacLoaText3">{t("section1.3.title")}</div>
              </div>
              <div className="col-span-12 md:col-span-3">
                <img
                  src="/img/service/packing-loading/006.jpg"
                  className="img-responsive"
                  alt="Packing・Loading"
                />
              </div>
              <div className="col-span-12 md:col-span-3">
                <img
                  src="/img/service/packing-loading/007.jpg"
                  className="img-responsive"
                  alt="Packing・Loading"
                />
              </div>
              <div className="col-span-12 md:col-span-3">
                <img
                  src="/img/service/packing-loading/008.jpg"
                  className="img-responsive"
                  alt="Packing・Loading"
                />
              </div>
              <div className="col-span-12 md:col-span-3">
                <img
                  src="/img/service/packing-loading/009.jpg"
                  className="img-responsive"
                  alt="Packing・Loading"
                />
              </div>
              <div className="col-span-12">
                <div className="pacLoaText2">{t("section1.3.p")}</div>
              </div>
            </div>
          </div>

          <div className="pageTitle1" style={{ marginTop: "130px" }}>
            {t("section2.title")}
          </div>

          <div className="picRow1">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-4">
                <img
                  src="/img/service/packing-loading/010.jpg"
                  className="img-responsive"
                  alt="Packing・Loading"
                />
                <div className="pacLoaText1">{t("section2.1")}</div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <img
                  src="/img/service/packing-loading/011.jpg"
                  className="img-responsive"
                  alt="Packing・Loading"
                />
                <div className="pacLoaText1">{t("section2.2")}</div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <img
                  src="/img/service/packing-loading/012.jpg"
                  className="img-responsive"
                  alt="Packing・Loading"
                />
                <div className="pacLoaText1">{t("section2.3")}</div>
              </div>
            </div>
            <div style={{ height: "20px" }}></div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-4">
                <img
                  src="/img/service/packing-loading/013.jpg"
                  className="img-responsive"
                  alt="Packing・Loading"
                />
                <div className="pacLoaText1">{t("section2.4")}</div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <img
                  src="/img/service/packing-loading/014.jpg"
                  className="img-responsive"
                  alt="Packing・Loading"
                />
                <div className="pacLoaText1">{t("section2.5")}</div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <img
                  src="/img/service/packing-loading/015.jpg"
                  className="img-responsive"
                  alt="Packing・Loading"
                />
                <div className="pacLoaText1">{t("section2.6")}</div>
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
