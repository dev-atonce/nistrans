import AsiaBranches from "@/components/website/layout/continents/AsiaBranches";
import ChinaBranches from "@/components/website/layout/continents/ChinaBranches";
import EuroBranches from "@/components/website/layout/continents/EuroBranches";
import USABranches from "@/components/website/layout/continents/USABranches";
import Cover from "@/components/website/layout/Cover";
import { Metadata, ResolvingMetadata } from "next";

const fetchData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/about/about-us`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
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
    metadataBase: new URL("https://ymctranslation.com"),
    title: response[`seoTitle${lng}`],
    description: response[`seoDescription${lng}`],
    keywords: response[`seoKeyword${lng}`],
    alternates: {
      canonical: "./",
    },
  };
}
export default async function AboutPage() {
  const data = await fetchData();
  return (
    <>
      <Cover
        pageName="สำนักงานใหญ่ประเทศญี่ปุ่น"
        engName="Nissin Group Company"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black">
        <div className="corBehBox">
          <div className="pageTitle1">สำนักงานใหญ่ประเทศญี่ปุ่น</div>

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
                    เอเชีย
                  </a>
                </li>
                <li>
                  <a href="#china" data-toggle="tab">
                    ประเทศจีน
                  </a>
                </li>
                <li>
                  <a href="#euro" data-toggle="tab">
                    ยุโรป
                  </a>
                </li>
                <li>
                  <a href="#usa" data-toggle="tab">
                    อเมริกา
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content">
              <div id="asia" className="tab-pane fade active in">
                {/* Replace with appropriate React component or content for Asia */}
                <AsiaBranches />
              </div>
              <div id="china" className="tab-pane fade">
                {/* Replace with appropriate React component or content for China */}
                <ChinaBranches />
              </div>
              <div id="euro" className="tab-pane fade">
                {/* Replace with appropriate React component or content for Europe */}
                <EuroBranches />
              </div>
              <div id="usa" className="tab-pane fade">
                {/* Replace with appropriate React component or content for USA */}
                <USABranches />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
