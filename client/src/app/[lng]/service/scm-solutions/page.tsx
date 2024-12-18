import Cover from "@/components/website/layout/Cover";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Packing() {
  const t = useTranslations("scm-solutions");
  const h = useTranslations("header");
  return (
    <>
      <Cover
        noHeading={true}
        pageName={t("h1")}
        engName="Service"
        prevPage={{ pageName: h("home"), url: "/" }}
        image="/img/service/scm-solutions/banner.jpg"
      />
      <div className="container 2xl:px-20 px-2 xl:px-0 mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">{t("h1")}</h1>
        <div className="py-10">
          <div className="branchesTopic text-center">{t("section1.p")}</div>

          <h2 className="pageTitle1">{t("h2")}</h2>

          <h3 className="pageTitle2">{t("h3")}</h3>
          <div className="flex items-center justify-center">
            <img
              src={t("section1.image")}
              className="img-responsive"
              alt="SCM Solutions"
            />
          </div>

          {/* <div className="scmText1">
  3PL型業務代行サービス
  <div className="small">
    お客様の物流部門の業務を代行<br/>
    工場の生産情報と販社への納期情報、プラス本船情報を組み合わせて月間の出荷計画を策定<br/>
    生産計画受領から、納品先配送までを連動させ、最適な物流計画を支援
  </div>
</div> */}

          <div className="pageTitle1" style={{ marginTop: "120px" }}>
            {t("section2.title")}
          </div>

          <a
            className="fancyBox"
            href="/img/service/scm-solutions/014-zoom.jpg"
            rel="groupimg"
            title=""
          >
            <img
              src="/img/scm-014.jpg"
              className="img-responsive"
              style={{ margin: "50px auto 25px auto" }}
              alt="SCM Solutions"
            />
          </a>

          <div className="scmText3">{t("section2.title")}</div>

          <div className="scmTextRotate">
            <ul>
              {[
                t("section2.platform.1"),
                t("section2.platform.2"),
                t("section2.platform.3"),
                t("section2.platform.4"),
                t("section2.platform.5"),
                t("section2.platform.6"),
                t("section2.platform.7"),
                t("section2.platform.8"),
                t("section2.platform.9"),
                t("section2.platform.10"),
                t("section2.platform.11"),
                t("section2.platform.12"),
                t("section2.platform.13"),
                t("section2.platform.14"),
                t("section2.platform.15"),
                t("section2.platform.16"),
                t("section2.platform.17"),
                t("section2.platform.18"),
                t("section2.platform.19"),
              ].map((text, index) => (
                <li key={index}>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <img
            src="/img/service/scm-solutions/013.jpg"
            className="img-responsive w-full"
            alt="SCM Solutions"
          />

          <div className="scmText1" style={{ margin: "50px 0" }}>
            {t("section2.more.title")}
            <div className="small">{t("section2.more.p")}</div>
          </div>

          <ul className="textNum">
            <li className="nNum">
              <div className="nNumText">{t("section2.feature")}</div>
              <div className="nNumNum">01</div>
            </li>
            <li className="tText">{t("section2.1")}</li>
          </ul>

          <ul className="textNum">
            <li className="nNum">
              <div className="nNumText">{t("section2.feature")}</div>
              <div className="nNumNum">02</div>
            </li>
            <li className="tText" style={{ position: "relative" }}>
              {t("section2.2")}
              <div className="scmBtnHaco">
                <Link className="pageBtnMore" href="/service/haco-lab">
                  <div className="pageBtnMoreBg"></div>
                  <div className="pageBtnMoreHover"></div>
                  <div className="pageBtnMoreText">HACO Lab.</div>
                </Link>
              </div>
            </li>
          </ul>

          <div className="picRow1">
            <div className="grid grid-cols-12 gap-4">
              {["010", "016", "011", "012"].map((image, index) => (
                <div
                  className="col-span-12 md:col-span-4 xl:col-span-3"
                  key={index}
                >
                  <img
                    src={`/img/service/scm-solutions/${image}.jpg`}
                    className="img-responsive"
                    alt="SCM Solutions"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
