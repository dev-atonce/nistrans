import Cover from "@/components/website/layout/Cover";
import { useTranslations } from "next-intl";

export default function Moving() {
  const h = useTranslations("header");
  const t = useTranslations("house-moving");
  const b = useTranslations("branchs");
  return (
    <>
      <Cover
        noHeading={true}
        pageName={t("h1")}
        engName="Service"
        prevPage={{ pageName: h("home"), url: "/" }}
        image="/img/service/house-moving/banner.jpg"
      />
      <div className="container 2xl:px-20 px-2  xl:px-6   mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">{t("h1")}</h1>
        <div className="py-10">
          <div className="branchesTopic">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-8">
                <p>{t("section1.p")}</p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <img
                  src="/img/service/house-moving/006.jpg"
                  className="w-full"
                  alt={t("h1")}
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className="pageTitle1">{t("h2")}</h2>
        <h3 className="pageTitle2" style={{ fontSize: "25px" }}>
          {t("h3")}
        </h3>
        <div className="flex justify-center">
          <img
            src={t("section1.image")}
            className="img-responsive"
            alt={t("h2")}
          />
        </div>

        <div className="picRow1">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <img
                src="/img/service/house-moving/002.jpg"
                className="img-responsive"
                alt={t("h1")}
              />
            </div>
            <div className="col-span-3">
              <img
                src="/img/service/house-moving/003.jpg"
                className="img-responsive"
                alt={t("h1")}
              />
            </div>
            <div className="col-span-3">
              <img
                src="/img/service/house-moving/004.jpg"
                className="img-responsive"
                alt={t("h1")}
              />
            </div>
            <div className="col-span-3">
              <img
                src="/img/service/house-moving/005.jpg"
                className="img-responsive"
                alt={t("h1")}
              />
            </div>
          </div>
        </div>
        <div className="handlingBox">
          <div className="handlingTitle">{b("title")}</div>
          <ul className="list-disc grid md:flex">
            <li className="ms-8 ps-0">{b("bangkok")}</li>
            <li className="ms-8 ps-0">{b("ayutthaya")}</li>
            <li className="ms-8 ps-0">{b("prachinburi")}</li>
            <li className="ms-8 ps-0">{b("chiang-mai")}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
