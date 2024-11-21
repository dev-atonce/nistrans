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
        pageName="ข้อมูลบริษัท"
        engName="About Us"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black">
        <div>
          <div className="comInfoRow1">
            <ul>
              <li>ชื่อทางการค้า</li>
              <li>บริษัท สยามนิสทรานส์ จำกัด</li>
            </ul>

            <ul>
              <li>ที่ตั้ง</li>
              <li>
                <span>
                  ชั้น 15 เลขที่ 191/66, 68-69 CTI TOWER ถนนรัชดาภิเษก
                  <br />
                  เขตคลองเตย กรุงเทพมหานคร 10110 ประเทศไทย
                </span>
              </li>
            </ul>

            <ul>
              <li>โทรศัพท์</li>
              <li>(+66)-2-261-1080~5 or 261-5343~6</li>
            </ul>

            <ul>
              <li>โทรสาร</li>
              <li>(+66)-2-261-1024 or 1059~60</li>
            </ul>

            <ul>
              <li>วันก่อตั้ง</li>
              <li>วันที่ 30 กันยายน พ.ศ. 2530</li>
            </ul>

            <ul>
              <li>ทุนจดทะเบียน</li>
              <li>507,000,000 บาท</li>
            </ul>

            <ul>
              <li>ผู้ถือหุ้น</li>
              <li>
                <span>
                  Nissin Corporation/ CTI Logistics Co., Ltd./ <br />
                  SBCS Co., Ltd/ SMBC Management Service Co., Ltd
                </span>
              </li>
            </ul>

            <ul>
              <li>จำนวนพนักงาน</li>
              <li>750 คน (ข้อมูลปี 2566)</li>
            </ul>

            <ul>
              <li>ตัวแทนบริษัท</li>
              <li>Mr. Takatoshi Yatsuzuka</li>
            </ul>

            <ul>
              <li>ลักษณะธุรกิจ</li>
              <li>
                <span>
                  ธุรกิจจัดการสินค้าขนส่งทางอากาศและสินค้าขนส่งทางเรือ, <br />
                  ธุรกิจคลังสินค้า, ธุรกิจขนส่งด้วยรถบรรทุกภายในประเทศ, <br />
                  ธุรกิจขนส่งตู้สินค้า, ธุรกิจพิธีการศุลกากร, ธุรกิจบรรจุภัณฑ์{" "}
                  <br />
                  (บรรจุภัณฑ์สำหรับส่งออกตัวรถ เช่น ชิ้นส่วนรถยนต์, <br />
                  ชิ้นส่วน KD, รถรุ่นใหม่ ฯลฯ การบรรจุแบบเร่งด่วน/แบบเดินทาง
                  <br />
                  ไปดำเนินการถึงที่), งานขนย้ายเครื่องจักรอุปกรณ์เข้าพื้นที่,{" "}
                  <br />
                  งานขนย้ายวัสดุอุปกรณ์เข้า-ออกสถานที่จัดงานนิทรรศการ <br />
                  เป็นต้น
                </span>
              </li>
            </ul>

            <ul>
              <li>นโยบายคุณภาพ</li>
              <li>
                <span>
                  ใส่ใจลูกค้า ส่งมอบตรงเวลา
                  <br />
                  พัฒนาบริการ สรรสร้างบุคลากร
                </span>
              </li>
            </ul>

            <ul>
              <li>วิสัยทัศน์</li>
              <li>
                <span>
                  เพิ่มศักยภาพการเป็นผู้นำทางด้านโลจิสติกส์ทั้งในประเทศ
                  <br />
                  และระหว่างประเทศแบบครบวงจร
                </span>
              </li>
            </ul>

            <ul>
              <li>พันธกิจ</li>
              <li>
                <span>
                  1. เพิ่มศักยภาพในการให้บริการและบริหารความสัมพันธ์กับลูกค้า
                  <br />
                  2. ปรับปรุงระบบเทคโนโลยีสารสนเทศให้ทันสมัย
                  <br />
                  3. พัฒนาศักยภาพของพนักงานและการทำงานเป็นทีม
                  <br />
                  4. พัฒนาระบบคุณภาพการบริการให้ได้มาตรฐานสากล
                </span>
              </li>
            </ul>

            <img
              src="../images/company-info/001.jpg"
              className="comInfoRow1Pic1"
              alt="Company Profile"
            />
            <img
              src="../images/company-info/002.jpg"
              className="comInfoRow1Pic2"
              alt="Company Profile"
            />
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="../file/SIAM_NISTRANS_Catalog_Landscape.pdf"
            className="homeLinkTrack"
          >
            <span>
              ข้อมูลบริษัท
              <img
                className="iconPdf darkBlue"
                alt=""
                src="../images/icon-pdf-darkBlue.svg"
              />
              <img
                className="iconPdf white"
                alt=""
                src="../images/icon-pdf-white.svg"
              />
            </span>
          </a>

          <div style={{ height: "80px" }}></div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7751.533690500027!2d100.560028!3d13.732561!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf788e6b9b53e4b3e!2sSiam%20Nistrans%20Co.%2CLTD.!5e0!3m2!1sja!2sth!4v1570441489603!5m2!1sja!2sth"
            width="100%"
            height="480"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>

          <div className="container">
            <div className="picRow1">
              <div className="row">
                <div className="col-xs-3">
                  <img
                    src="../images/company-info/003.jpg"
                    className="img-responsive"
                    alt="Company Profile"
                  />
                </div>
                <div className="col-xs-3">
                  <img
                    src="../images/company-info/004.jpg"
                    className="img-responsive"
                    alt="Company Profile"
                  />
                </div>
                <div className="col-xs-3">
                  <img
                    src="../images/company-info/005.jpg"
                    className="img-responsive"
                    alt="Company Profile"
                  />
                </div>
                <div className="col-xs-3">
                  <img
                    src="../images/company-info/006.jpg"
                    className="img-responsive"
                    alt="Company Profile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
