import AsiaBranches from "@/components/website/layout/continents/AsiaBranches";
import ChinaBranches from "@/components/website/layout/continents/ChinaBranches";
import EuroBranches from "@/components/website/layout/continents/EuroBranches";
import USABranches from "@/components/website/layout/continents/USABranches";
import Cover from "@/components/website/layout/Cover";
import { Metadata, ResolvingMetadata } from "next";
import { useTranslations } from "next-intl";
const pageName = "about-us";
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  const lng = "TH";

  const seoRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/seo/page-name/${pageName}`;

  // fetch data
  const response = await fetch(seoRoute, { cache: "no-store" }).then((res) =>
    res.json()
  );

  return {
    metadataBase: new URL("https://th.nissin-asia.com"),
    title: response[`seoTitle${lng}`],
    description: response[`seoDescription${lng}`],
    keywords: response[`seoKeyword${lng}`],
    alternates: {
      canonical: "./",
    },
  };
}
export default function AboutPage({ params: { lng } }: any) {
  const t = useTranslations("about-pages");
  const h = useTranslations("header");
  const content = {
    th: {
      h: "สำนักงานใหญ่ประเทศญี่ปุ่น",
      asia: "เอเชีย",
      china: "ประเทศจีน",
      eu: "ยุโรป",
      us: "อเมริกา",
    },
    en: {
      h: "Japan Head office",
      asia: "Asia",
      china: "China",
      eu: "Europe",
      us: "America",
    },
    jp: {
      h: "日本 (本社)",
      asia: "アジア",
      china: "中国",
      eu: "欧州",
      us: "米州",
    },
  };

  return (
    <>
      <Cover
        pageName={t("group")}
        engName="Nissin Group Company"
        image="/img/service/group_banner.jpg"
        prevPage={{ pageName: h("home"), url: "/" }}
      />
      <div className="container xl:px-6 px-2 mx-auto 2xl:px-20 pb-10 text-black mt-[-40px]">
        <div className="corBehBox">
          {/* @ts-ignore */}
          <div className="pageTitle1">{content[lng]["h"]}</div>

          <div className="branchesTitle">
            NISSIN CORPORATION
            <a
              className="branchesLink"
              target="_blank"
              rel="noopener noreferrer"
              href="nissin-tw.com/english/"
            ></a>
          </div>
          <div className="branchesText">
            Nissay office building, 6-81 Onoe-cho, Naka-ku, Yokohama
            {/* 横浜市中区尾上町六丁目８１番地 ニッセイ横浜尾上町ビル */}
            <br />
            TEL: 045-671-6111 / FAX: 045-671-6118
          </div>

          <div className="branchesTab">
            <div className="branchesTabMenu">
              <ul>
                <li className="active">
                  <a href="#asia" data-toggle="tab">
                    {/* @ts-ignore */}
                    {content[lng]["asia"]}
                  </a>
                </li>
                <li>
                  <a href="#china" data-toggle="tab">
                    {/* @ts-ignore */}
                    {content[lng]["china"]}
                  </a>
                </li>
                <li>
                  <a href="#euro" data-toggle="tab">
                    {/* @ts-ignore */}
                    {content[lng]["eu"]}
                  </a>
                </li>
                <li>
                  <a href="#usa" data-toggle="tab">
                    {/* @ts-ignore */}
                    {content[lng]["us"]}
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content">
              <div id="asia" className="tab-pane fade active in">
                {/* Replace with appropriate React component or content for Asia */}
                <AsiaBranches lng={lng} />
              </div>
              <div id="china" className="tab-pane fade">
                {/* Replace with appropriate React component or content for China */}
                <ChinaBranches lng={lng} />
              </div>
              <div id="euro" className="tab-pane fade">
                {/* Replace with appropriate React component or content for Europe */}
                <EuroBranches lng={lng} />
              </div>
              <div id="usa" className="tab-pane fade">
                {/* Replace with appropriate React component or content for USA */}
                <USABranches lng={lng} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
