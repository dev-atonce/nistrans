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
        pageName="ประวัติความเป็นมา"
        engName="Company History"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black">
        <div>
          <div className="historyBox">
            <div className="pageTitle1">ประวัติความเป็นมาของ SIAM NISTRANS</div>

            <div className="historyTb">
              <ul>
                <li>ต.ค. 2530</li>
                <li>ก่อตั้งบริษัท</li>
              </ul>

              <ul>
                <li>พ.ย. 2531</li>
                <li>
                  ซื้อที่ดิน 8 ไร่เพื่อก่อสร้างคลังสินค้าของบริษัทที่บางปะกง
                </li>
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
                <li>
                  เปิดทำการสาขาพระนครศรีอยุธยาโดยการรวมสาขารังสิตและสาขาโรจนะ
                </li>
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
                <li>
                  สาขาเชียงใหม่ ย้ายมาที่คลังสินค้าบริษัท CTP จังหวัดลำพูน
                </li>
              </ul>

              <ul>
                <li>ธ.ค. 2561</li>
                <li>
                  สาขาปราจีนบุรี
                  ซื้อที่ดินและคลังสินค้าภายในบริเวณสวนอุตสาหกรรมโรจนะ
                  ปราจีนบุรี
                </li>
              </ul>

              <ul>
                <li>ก.พ. 2564</li>
                <li>ก่อตั้งคลังสินค้าอันตรายใน T-park บางนา กม.39</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
