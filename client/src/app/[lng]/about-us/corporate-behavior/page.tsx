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
        pageName="แนวทางปฏิบัติของบริษัท"
        engName="Company Policy"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black">
        <div className="corBehBox">
          <div className="pageTitle1">แนวทางปฏิบัติของบริษัท</div>

          <div className="corBehText">
            Nissin Group (กลุ่มบริษัทเครือนิชชิน)
            กำหนดแนวทางปฏิบัติของบริษัทขึ้น
            เพื่อเป็นภารกิจในการมีส่วนร่วมพัฒนาสังคม
            อย่างยั่งยืนในฐานะพลเมืองภาคองค์กรที่ดี
            รักษาจริยธรรมที่ดีอย่างแข็งขัน
            และดำเนินกิจกรรมทางธุรกิจทั่วโลกอย่างอิสระและเป็นธรรม
            {/** List of behavioral principles */}
            <div className="corBehList">
              <div className="corBehTitle">
                1. เรามุ่งมั่นที่จะเป็นบริษัทที่ได้รับความไว้วางใจจากลูกค้า
                และมอบความพึงพอใจให้แก่ลูกค้า
              </div>
              <ul>
                <li>
                  เข้าใจการเปลี่ยนแปลงในโลกและให้บริการที่เป็นประโยชน์ต่อสังคม
                  ด้วยจิตวิญญาณของปรัชญาองค์กรที่ว่า
                  <br />
                  “ทุกวันเป็นวันใหม่”
                </li>
                <li>
                  สร้างความเป็นอยู่ที่สะดวกสบายผ่านโลจิสติกส์ระดับสากล
                  และมีส่วนร่วมในการเติบโตทางเศรษฐกิจที่ยั่งยืน
                </li>
                <li>
                  คุ้มครองและจัดการข้อมูลส่วนบุคคลและข้อมูลลูกค้าอย่างจริงจัง
                </li>
              </ul>
            </div>
            <div className="corBehList">
              <div className="corBehTitle">
                2. เราดำเนินกิจกรรมทางธุรกิจอย่างเป็นธรรมและมีความรับผิดชอบ
              </div>
              <ul>
                <li>
                  ปฏิบัติตามกฎระหว่างประเทศและกฎหมายของแต่ละท้องถิ่น
                  และดำเนินธุรกิจอย่างถูกต้องและเหมาะสม
                </li>
                <li>
                  รักษาความสัมพันธ์ที่มั่นคงและถูกต้องกับฝ่ายการเมืองและฝ่ายบริหาร
                </li>
                <li>
                  ดำเนินการอย่างเด็ดขาดต่อกองกำลังต่อต้านสังคมตลอดจนกลุ่มต่าง ๆ
                  ที่คุกคามความปลอดภัยและความสงบเรียบร้อยของประชาสังคม
                </li>
              </ul>
            </div>
            <div className="corBehList">
              <div className="corBehTitle">
                3. เราเปิดเผยข้อมูลอย่างจริงจังและเป็นธรรม
              </div>
              <ul>
                <li>
                  มุ่งมั่นที่จะเป็นบริษัทที่ได้รับความไว้วางใจ
                  ผ่านการเปิดเผยข้อมูลอย่างเหมาะสมในเวลาที่เหมาะสม
                </li>
                <li>
                  เสริมสร้างความเข้าใจซึ่งกันและกันผ่านการหารืออย่างสร้างสรรค์กับผู้มีส่วนได้ส่วนเสีย
                  เช่น ลูกค้า คู่ค้า ผู้ถือหุ้น พนักงาน ฯลฯ
                </li>
              </ul>
            </div>
            <div className="corBehList">
              <div className="corBehTitle">
                4. เราดำเนินธุรกิจโดยเคารพสิทธิมนุษยชน
              </div>
              <ul>
                <li>
                  เคารพสิทธิมนุษยชนของทุกคน
                  และกำจัดการทำงานที่ผิดกฎหมายทุกรูปแบบ
                </li>
                <li>
                  ยอมรับรสนิยมของกันและกัน
                  และสร้างสภาพแวดล้อมที่บุคลากรที่หลากหลายสามารถทำงานร่วมกันได้
                </li>
                <li>
                  มุ่งมั่นที่จะเป็นบริษัทที่ทุกคนสามารถเติบโตได้ ทำงานอย่างสดใส
                  และสัมผัสได้ถึงคุณค่าของการทำงาน
                </li>
              </ul>
            </div>
            <div className="corBehList">
              <div className="corBehTitle">
                5. เราพยายามสร้างสิ่งแวดล้อมโลกที่มีเสถียรภาพ
              </div>
              <ul>
                <li>
                  ส่งเสริมธุรกิจโลจิสติกส์ที่ใส่ใจสิ่งแวดล้อม
                  และให้เข้ากับสิ่งแวดล้อมโลก
                </li>
              </ul>
            </div>
            <div className="corBehList">
              <div className="corBehTitle">
                6. เราปฏิบัติหน้าที่ในฐานะพลเมืองภาคองค์กรที่ดี
              </div>
              <ul>
                <li>
                  มุ่งทำกิจกรรมทางธุรกิจและกิจกรรมเพื่อสังคมให้ประสบความสำเร็จทั้งสองทาง
                  สนับสนุนการสร้างสังคมให้เติบโตอย่างสมบูรณ์
                </li>
                <li>
                  เคารพวัฒนธรรมและประเพณีของแต่ละประเทศ
                  และมีส่วนร่วมในการพัฒนาภูมิภาคและการแก้ไขปัญหาสังคม
                </li>
              </ul>
            </div>
            <div className="corBehList">
              <div className="corBehTitle">
                7. เราจัดการวิกฤตเชิงองค์กร
                เพื่อเตรียมพร้อมสำหรับความเสี่ยงที่หลากหลาย
              </div>
              <ul>
                <li>
                  พยายามลดความเสี่ยงที่จะเป็นอุปสรรคต่อการดำเนินธุรกิจอย่างต่อเนื่อง
                  ภายใต้การบริหารความเสี่ยงอย่างถูกต้องและเหมาะสม
                </li>
                <li>
                  พัฒนาความสามารถในการรับมือวิกฤตด้วยการฝึกอบรมที่ต่อเนื่อง
                </li>
              </ul>
            </div>
            <div className="corBehList">
              <div className="corBehTitle">
                8.
                เราส่งเสริมให้ใช้แนวทางปฏิบัตินี้เป็นพื้นฐานการดำเนินกิจกรรมในทุก
                ๆ วันอย่างจริงจัง
              </div>
              <ul>
                <li>
                  ผู้บริหารระดับสูงปฏิบัติตามแนวทางปฏิบัตินี้เป็นตัวอย่าง
                  และแจ้งภายในบริษัทและบริษัทในกลุ่มให้ทราบอย่างทั่วถึง
                </li>
                <li>
                  ส่งเสริมการดำเนินการตามเจตนารมณ์ของแนวทางปฏิบัตินี้ภายใต้ระบบของห่วงโซ่อุปทาน
                </li>
                <li>
                  สร้างระบบกำกับดูแลที่มีประสิทธิภาพซึ่งจำเป็นต่อการนำเจตนารมณ์ของแนวทางปฏิบัตินี้ไปปฏิบัติจริง
                </li>
              </ul>
            </div>
            หากเกิดการกระทำผิดแนวทางปฏิบัตินี้ เราจะช่วยกันหาสาเหตุ
            หามาตราการแนวทางมาใช้เพื่อป้องกันไม่ให้เกิดปัญหากลับขึ้นอีกต่อไป
            <div className="corBehText2">
              จัดทำเมื่อวันที่ 16 ธันวาคม 2002
              <br />
              แก้ไขเมื่อวันที่ 15 กุมภาพันธ์ 2006
              <br />
              แก้ไขเมื่อวันที่ 18 มิถุนายน 2018
              <br />
              Nissin Corporation (กลุ่มบริษัทเครือนิชชิน)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
