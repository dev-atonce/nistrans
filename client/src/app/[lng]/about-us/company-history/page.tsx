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
  const content =
    lng === "th" ? (
      <div className="historyBox">
        <div className="pageTitle1">ประวัติความเป็นมาของ SIAM NISTRANS</div>

        <div className="historyTb">
          <ul>
            <li>ต.ค. 2530</li>
            <li>ก่อตั้งบริษัท</li>
          </ul>

          <ul>
            <li>พ.ย. 2531</li>
            <li>ซื้อที่ดิน 8 ไร่เพื่อก่อสร้างคลังสินค้าของบริษัทที่บางปะกง</li>
          </ul>

          <ul>
            <li>ก.ค. 2532</li>
            <li>
              คลังสินค้าของบริษัท (8,832 ตร.ม.) สร้างเสร็จสมบูรณ์
              และเริ่มทำการในฐานะ Cargo Distribution Center
            </li>
          </ul>

          <ul>
            <li>ม.ค. 2534</li>
            <li>เปิดทำการสาขาเชียงใหม่</li>
          </ul>

          <ul>
            <li>พ.ย. 2534</li>
            <li>
              เปิดทำการสาขาสนามบินที่ท่าอากาศยานดอนเมือง
              (เดิมคือท่าอากาศยานนานาชาติกรุงเทพฯ)
            </li>
          </ul>

          <ul>
            <li>พ.ย. 2535</li>
            <li>เปิดทำการสาขาแหลมฉบัง</li>
          </ul>

          <ul>
            <li>ต.ค. 2539</li>
            <li>เปิดทำการสาขารังสิต</li>
          </ul>

          <ul>
            <li>เม.ย. 2541</li>
            <li>เปิดทำการสาขาโรจนะ</li>
          </ul>

          <ul>
            <li>ก.ย. 2549</li>
            <li>
              ย้ายสาขาสนามบินมาที่สุวรรณภูมิ
              ตามการย้ายท่าอากาศยานนานาชาติกรุงเทพฯ มาที่สุวรรณภูมิ
            </li>
          </ul>

          <ul>
            <li>ต.ค. 2557</li>
            <li>
              สาขาแหลมฉบัง
              ซื้อที่ดินและคลังสินค้าเพื่อสร้างเป็นคลังสินค้าของบริษัท
            </li>
          </ul>

          <ul>
            <li>มี.ค. 2558</li>
            <li>เปิดทำการสาขาพระนครศรีอยุธยาโดยการรวมสาขารังสิตและสาขาโรจนะ</li>
          </ul>

          <ul>
            <li>เม.ย. 2558</li>
            <li>เปิดทำการสาขาปราจีนบุรี</li>
          </ul>

          <ul>
            <li>ก.ค. 2559</li>
            <li>
              สาขาบางปะกง เช่าคลังสินค้าบริษัทพูลพิพัฒน์
              และเริ่มทำการในฐานะคลังสินค้า K38 สาขาบางปะกง
            </li>
          </ul>

          <ul>
            <li>มี.ค. 2561</li>
            <li>สาขาเชียงใหม่ ย้ายมาที่คลังสินค้าบริษัท CTP จังหวัดลำพูน</li>
          </ul>

          <ul>
            <li>ธ.ค. 2561</li>
            <li>
              สาขาปราจีนบุรี
              ซื้อที่ดินและคลังสินค้าภายในบริเวณสวนอุตสาหกรรมโรจนะ ปราจีนบุรี
            </li>
          </ul>

          <ul>
            <li>ก.พ. 2564</li>
            <li>ก่อตั้งคลังสินค้าอันตรายใน T-park บางนา กม.39</li>
          </ul>
        </div>
      </div>
    ) : lng === "en" ? (
      <div className="historyBox">
        <div className="pageTitle1">Company history</div>

        <div className="historyTb">
          <ul>
            <li>October 1987</li>
            <li>Established company</li>
          </ul>

          <ul>
            <li>November 1988</li>
            <li>
              Acquired 8 rai of land in Bangpakong for construction of our own
              warehouse
            </li>
          </ul>

          <ul>
            <li>July 1989</li>
            <li>
              Completed the our own warehouse (8,833 m²) and started operation
              as a Cargo Distribution Center
            </li>
          </ul>

          <ul>
            <li>January 1991</li>
            <li>Opened the Chiang Mai Branch</li>
          </ul>

          <ul>
            <li>November 1991</li>
            <li>
              Opened the Airport Branch at Donmuang Airport (former Bangkok
              International Airport)
            </li>
          </ul>

          <ul>
            <li>November 1992</li>
            <li>Opened the Laem Chabang Branch</li>
          </ul>

          <ul>
            <li>October 1996</li>
            <li>Opened the Rangsit Branch</li>
          </ul>

          <ul>
            <li>April 1998</li>
            <li>Opened the Rojana Branch</li>
          </ul>

          <ul>
            <li>September 2006</li>
            <li>
              Moved the Airport Branch to Suvarnabhumi Airport when Bangkok
              International Airport was relocated.
            </li>
          </ul>

          <ul>
            <li>October 2014</li>
            <li>
              Acquired the land and warehouse building used for the Laem Chabang
              Branch
            </li>
          </ul>

          <ul>
            <li>March 2015</li>
            <li>
              Consolidated the Rangsit Branch and Rojana Branch into the
              Ayutthaya Branch
            </li>
          </ul>

          <ul>
            <li>April 2015</li>
            <li>Opened the Prachinburi Branch</li>
          </ul>

          <ul>
            <li>July 2016</li>
            <li>
              Started operation at the Bangpakong Branch K38 Warehouse under
              lease with Poon Pipat
            </li>
          </ul>

          <ul>
            <li>March 2018</li>
            <li>
              Moved the Chiang Mai Branch to a warehouse owned by CTP in Lamphun
            </li>
          </ul>

          <ul>
            <li>December 2018</li>
            <li>
              Acquired land and warehouse facilities within Rojana Industrial
              Park (Prachinburi)
            </li>
          </ul>

          <ul>
            <li>February 2021</li>
            <li>Opened a dangerous goods warehouse at T-park Bangna Km.39</li>
          </ul>
        </div>
      </div>
    ) : lng === "jp" ? (
      <div className="historyBox">
        <div className="pageTitle1">SIAM NISTRANSの沿革</div>

        <div className="historyTb">
          <ul>
            <li>1987年10月</li>
            <li>会社設立</li>
          </ul>

          <ul>
            <li>1988年11月</li>
            <li>バンパコンに自社倉庫建設のため８ライの土地を購入</li>
          </ul>

          <ul>
            <li>1989年7月</li>
            <li>
              自社倉庫（8,833 m²）完成、Cargo Distribution Center として営業開始
            </li>
          </ul>

          <ul>
            <li>1991年1月</li>
            <li>チェンマイ支店開設</li>
          </ul>

          <ul>
            <li>1991年11月</li>
            <li>ドンムアン空港（旧バンコク国際空港）に空港支店開設</li>
          </ul>

          <ul>
            <li>1992年11月</li>
            <li>レムチャバン支店開設</li>
          </ul>

          <ul>
            <li>1996年10月</li>
            <li>ランシット支店開設</li>
          </ul>

          <ul>
            <li>1998年4月</li>
            <li>ロジャナ支店開設</li>
          </ul>

          <ul>
            <li>2006年9月</li>
            <li>
              バンコク国際空港のスワンナプーム移転に合わせ、空港支店スワンナプームに移転
            </li>
          </ul>

          <ul>
            <li>2014年10月</li>
            <li>レムチャバン支店、土地・倉庫を購入し自社倉庫化</li>
          </ul>

          <ul>
            <li>2015年3月</li>
            <li>ランシット支店とロジャナ支店を統合し、アユタヤ支店開設</li>
          </ul>

          <ul>
            <li>2015年4月</li>
            <li>プラチンブリ支店開設</li>
          </ul>

          <ul>
            <li>2016年7月</li>
            <li>
              バンパコン支店、Poon Pipat
              社倉庫を賃借、バンパコン支店Ｋ３８倉庫として営業開始
            </li>
          </ul>

          <ul>
            <li>2018年3月</li>
            <li>チェンマイ支店、ランプーン県 CTP 社倉庫に移転</li>
          </ul>

          <ul>
            <li>2018年12月</li>
            <li>
              プラチンブリ支店、プラチンブリ・ロジャナ工業団地内に土地・倉庫購入
            </li>
          </ul>

          <ul>
            <li>2021年2月</li>
            <li>バンナ39キロ、T-park内に危険品倉庫を開設</li>
          </ul>
        </div>
      </div>
    ) : (
      <div className="historyBox">
        <div className="pageTitle1">ประวัติความเป็นมาของ SIAM NISTRANS</div>

        <div className="historyTb">
          <ul>
            <li>ต.ค. 2530</li>
            <li>ก่อตั้งบริษัท</li>
          </ul>

          <ul>
            <li>พ.ย. 2531</li>
            <li>ซื้อที่ดิน 8 ไร่เพื่อก่อสร้างคลังสินค้าของบริษัทที่บางปะกง</li>
          </ul>

          <ul>
            <li>ก.ค. 2532</li>
            <li>
              คลังสินค้าของบริษัท (8,832 ตร.ม.) สร้างเสร็จสมบูรณ์
              และเริ่มทำการในฐานะ Cargo Distribution Center
            </li>
          </ul>

          <ul>
            <li>ม.ค. 2534</li>
            <li>เปิดทำการสาขาเชียงใหม่</li>
          </ul>

          <ul>
            <li>พ.ย. 2534</li>
            <li>
              เปิดทำการสาขาสนามบินที่ท่าอากาศยานดอนเมือง
              (เดิมคือท่าอากาศยานนานาชาติกรุงเทพฯ)
            </li>
          </ul>

          <ul>
            <li>พ.ย. 2535</li>
            <li>เปิดทำการสาขาแหลมฉบัง</li>
          </ul>

          <ul>
            <li>ต.ค. 2539</li>
            <li>เปิดทำการสาขารังสิต</li>
          </ul>

          <ul>
            <li>เม.ย. 2541</li>
            <li>เปิดทำการสาขาโรจนะ</li>
          </ul>

          <ul>
            <li>ก.ย. 2549</li>
            <li>
              ย้ายสาขาสนามบินมาที่สุวรรณภูมิ
              ตามการย้ายท่าอากาศยานนานาชาติกรุงเทพฯ มาที่สุวรรณภูมิ
            </li>
          </ul>

          <ul>
            <li>ต.ค. 2557</li>
            <li>
              สาขาแหลมฉบัง
              ซื้อที่ดินและคลังสินค้าเพื่อสร้างเป็นคลังสินค้าของบริษัท
            </li>
          </ul>

          <ul>
            <li>มี.ค. 2558</li>
            <li>เปิดทำการสาขาพระนครศรีอยุธยาโดยการรวมสาขารังสิตและสาขาโรจนะ</li>
          </ul>

          <ul>
            <li>เม.ย. 2558</li>
            <li>เปิดทำการสาขาปราจีนบุรี</li>
          </ul>

          <ul>
            <li>ก.ค. 2559</li>
            <li>
              สาขาบางปะกง เช่าคลังสินค้าบริษัทพูลพิพัฒน์
              และเริ่มทำการในฐานะคลังสินค้า K38 สาขาบางปะกง
            </li>
          </ul>

          <ul>
            <li>มี.ค. 2561</li>
            <li>สาขาเชียงใหม่ ย้ายมาที่คลังสินค้าบริษัท CTP จังหวัดลำพูน</li>
          </ul>

          <ul>
            <li>ธ.ค. 2561</li>
            <li>
              สาขาปราจีนบุรี
              ซื้อที่ดินและคลังสินค้าภายในบริเวณสวนอุตสาหกรรมโรจนะ ปราจีนบุรี
            </li>
          </ul>

          <ul>
            <li>ก.พ. 2564</li>
            <li>ก่อตั้งคลังสินค้าอันตรายใน T-park บางนา กม.39</li>
          </ul>
        </div>
      </div>
    );
  return (
    <>
      <Cover
        pageName={t("history")}
        engName="Company History"
        prevPage={{ pageName: h("home"), url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black">
        <div>{content}</div>
      </div>
    </>
  );
}
