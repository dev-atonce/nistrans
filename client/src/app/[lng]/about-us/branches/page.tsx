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
        pageName="สาขาในประเทศ"
        engName="Domestic Branches"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black">
        <div className="branchesDomestic">
          <div className="row branchesRow" style={{ marginBottom: "75px" }}>
            <div className="col-xs-6">
              <div className="branchesPic">
                <img
                  src="../images/domestic-branches/001.jpg"
                  alt="Domestic Branches"
                />
              </div>
            </div>
            <div className="col-xs-6">
              <div className="branchesTitle">
                สำนักงานใหญ่ / สำนักงานกรุงเทพฯ
                <a
                  className="branchesMap"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.co.th/maps/place/Siam+Nistrans+Co.,LTD./@13.7325611,100.557839,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29f1b877bf42f:0xf788e6b9b53e4b3e!8m2!3d13.7325611!4d100.5600277?hl=en"
                ></a>
              </div>
              <div className="branchesText">
                ชั้น 15 เลขที่ 191/66, 68-69 CTI TOWER ถนนรัชดาภิเษก
                <br />
                เขตคลองเตย กรุงเทพมหานคร 10110 ประเทศไทย
              </div>
              <div style={{ height: "30px" }}></div>
              <div className="branchesTitle">
                แผนกขนย้าย
                <a
                  className="branchesMap"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/คลังสินค้าโชติธนวัฒน์+1/@13.6713977,100.6186394,20.19z/data=!4m9!1m2!2m1!1sChodthanawat++Warehouse!3m5!1s0x30e2a0082faa14bd:0xc39c2eaf6b3b73a9!8m2!3d13.6715341!4d100.6187112!15sChdDaG9kdGhhbmF3YXQgIFdhcmVob3VzZVoYIhZjaG9kdGhhbmF3YXQgd2FyZWhvdXNlkgEJd2FyZWhvdXNl4AEA"
                ></a>
              </div>
              <div className="branchesText">
                คลังสินค้าโชติธนวัฒน์ 1 ยูนิต 6.2
                <br />
                เลขที่ 295 ถนนเทพรัตน กม.1 แขวงบางนาเหนือ เขตบางนา กรุงเทพมหานคร
                10260
                <br />
                โทรศัพท์: (+66)-2-261-1080 Ext. 281
              </div>
            </div>
          </div>

          <div className="row branchesRow">
            <div className="col-xs-4">
              <div className="branchesPic">
                <img
                  src="../images/domestic-branches/002.jpg"
                  alt="Domestic Branches"
                />
              </div>
            </div>
            <div className="col-xs-8">
              <div className="branchesTitle">
                สำนักงานสนามบิน (สนามบินสุวรรณภูมิ)
                <a
                  className="branchesMap"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/Siam+Nistrans+Co.,Ltd,+Suvarnabhumi+Airport/@13.7109874,100.7523463,15z/data=!4m2!3m1!1s0x0:0x83d35695a6942a37?sa=X&hl=en&ved=2ahUKEwjshNHc2LT7AhVgSmwGHY1JAUcQ_BJ6BAhOECE"
                ></a>
              </div>
              <div className="branchesText">
                ห้องเลขที่ 13-15 อาคาร AO4เขตปลอดอากรท่าอากาศยานสุวรรณภูมิ 999
                หมู่ที่ 7
                <br />
                แขวงราชาเทวะ เขตบางพลี จังหวัดสมุทรปราการ 10540 ประเทศไทย
                <br />
                โทรศัพท์: (+66)-2-134-7001~8 / โทรสาร: (+66)-2-134-6766~9
              </div>
            </div>
          </div>

          <div className="row branchesRow">
            <div className="col-xs-4">
              <div className="branchesPic">
                <img
                  src="../images/domestic-branches/003.jpg"
                  alt="Domestic Branches"
                />
              </div>
            </div>
            <div className="col-xs-8">
              <div className="branchesTitle">
                คลังสินค้าอยุธยา
                <a
                  className="branchesMap"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/Siam+Nistrans+Co.,+Ltd.+AYUTTHAYA+BRANCH/@14.35241,100.6730992,15z/data=!4m2!3m1!1s0x0:0xf9136097bf538c1?sa=X&hl=en&ved=2ahUKEwiQ9uHj2LT7AhVbTmwGHSTCCqYQ_BJ6BAhiECE"
                ></a>
              </div>
              <div className="branchesText">
                เลขที่ 45-46 หมู่ที่ 2 ตำบลอุทัย อำเภออุทัย
                จังหวัดพระนครศรีอยุธยา 13210 ประเทศไทย
                <br />
                โทรศัพท์: (+66)-35-246-511~20 / โทรสาร:(+66)-35-246-510
              </div>
            </div>
          </div>

          <div className="row branchesRow">
            <div className="col-xs-4">
              <div className="branchesPic">
                <img
                  src="../images/domestic-branches/004.jpg"
                  alt="Domestic Branches"
                />
              </div>
            </div>
            <div className="col-xs-8">
              <div className="branchesTitle">
                คลังสินค้าบางปะกง
                <a
                  className="branchesMap"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://goo.gl/maps/23DrWjtBhYHbnWVs6"
                ></a>
              </div>
              <div className="branchesText">
                เลขที่ 100/2 หมู่ที่ 6 ถนนบางนา-ตราด กม.41 แขวงบางวัว
                <br />
                เขตบางปะกง จังหวัดฉะเชิงเทรา 24180 ประเทศไทย
                <br />
                โทรศัพท์: (+66)-38-538-140~3 / โทรสาร: (+66)-38-538-144
              </div>
            </div>
          </div>

          <div className="row branchesRow">
            <div className="col-xs-4">
              <div className="branchesPic">
                <img
                  src="../images/domestic-branches/005.jpg"
                  alt="Domestic Branches"
                />
              </div>
            </div>
            <div className="col-xs-8">
              <div className="branchesTitle">
                คลังสินค้าบางปะกง K38
                <a
                  className="branchesMap"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/Siam+Nistrans+Co.,Ltd.+BPK38+Warehouse/@13.5651798,100.9345016,15z/data=!4m2!3m1!1s0x0:0xcd281da9cab68969?sa=X&hl=en&ved=2ahUKEwiqn7vo2LT7AhWTSGwGHU7PBK8Q_BJ6BAhUECE"
                ></a>
              </div>
              <div className="branchesText">
                เลขที่ 68/8 หมู่ที่ 5 ถนนบางนา-ตราด กม.38 ตำบลบางสมัคร
                <br />
                อำเภอบางปะกง จังหวัดฉะเชิงเทรา 24180 ประเทศไทย
                <br />
                โทรศัพท์: (+66)-38-539-980~1 / โทรสาร:(+66)-38-539-982
              </div>
            </div>
          </div>
          <div className="row branchesRow">
            <div className="col-xs-4">
              <div className="branchesPic">
                <img
                  src="../images/domestic-branches/005.jpg"
                  alt="Domestic Branches"
                />
              </div>
            </div>
            <div className="col-xs-8">
              <div className="branchesTitle">
                คลังสินค้าบางปะกง K38
                <a
                  className="branchesMap"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/Siam+Nistrans+Co.,Ltd.+BPK38+Warehouse/@13.5651798,100.9345016,15z/data=!4m2!3m1!1s0x0:0xcd281da9cab68969?sa=X&hl=en&ved=2ahUKEwiqn7vo2LT7AhWTSGwGHU7PBK8Q_BJ6BAhUECE"
                ></a>
              </div>
              <div className="branchesText">
                เลขที่ 68/8 หมู่ที่ 5 ถนนบางนา-ตราด กม.38 ตำบลบางสมัคร
                <br />
                อำเภอบางปะกง จังหวัดฉะเชิงเทรา 24180 ประเทศไทย
                <br />
                โทรศัพท์: (+66)-38-539-980~1 / โทรสาร:(+66)-38-539-982
              </div>
            </div>
          </div>
          <div className="row branchesRow">
            <div className="col-xs-4">
              <div className="branchesPic">
                <img
                  src="../images/domestic-branches/005.jpg"
                  alt="Domestic Branches"
                />
              </div>
            </div>
            <div className="col-xs-8">
              <div className="branchesTitle">
                คลังสินค้าบางปะกง K38
                <a
                  className="branchesMap"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/Siam+Nistrans+Co.,Ltd.+BPK38+Warehouse/@13.5651798,100.9345016,15z/data=!4m2!3m1!1s0x0:0xcd281da9cab68969?sa=X&hl=en&ved=2ahUKEwiqn7vo2LT7AhWTSGwGHU7PBK8Q_BJ6BAhUECE"
                ></a>
              </div>
              <div className="branchesText">
                เลขที่ 68/8 หมู่ที่ 5 ถนนบางนา-ตราด กม.38 ตำบลบางสมัคร
                <br />
                อำเภอบางปะกง จังหวัดฉะเชิงเทรา 24180 ประเทศไทย
                <br />
                โทรศัพท์: (+66)-38-539-980~1 / โทรสาร:(+66)-38-539-982
              </div>
            </div>
          </div>
          <div className="row branchesRow">
            <div className="col-xs-4">
              <div className="branchesPic">
                <img
                  src="../images/domestic-branches/006.jpg"
                  alt="Domestic Branches"
                />
              </div>
            </div>

            <div className="col-xs-8">
              <div className="branchesTitle">
                คลังสินค้าแหลมฉบัง
                <a
                  className="branchesMap"
                  target="_blank"
                  href="https://www.google.co.th/maps/place/Siam+Nistrans+Co.,LTD.+(Branch+5)/@13.1242826,100.9806238,17z/data=!3m1!4b1!4m5!3m4!1s0x3102c80041147bab:0xab586e27f921ce73!8m2!3d13.1242826!4d100.9823652?hl=en"
                ></a>
              </div>

              <div className="branchesText">
                เลขที่ 2/10 หมู่ที่ 1 ตำบลหนองขาม อำเภอศรีราชา จังหวัดชลบุรี
                20110 ประเทศไทย
                <br />
                โทรศัพท์: (+66)-38-481-634 / โทรสาร: (+66)-38-482-734
              </div>
            </div>
          </div>

          <div className="row branchesRow">
            <div className="col-xs-4">
              <div className="branchesPic">
                <img
                  src="../images/domestic-branches/007.jpg?v=1"
                  alt="Domestic Branches"
                />
              </div>
            </div>

            <div className="col-xs-8">
              <div className="branchesTitle">
                คลังสินค้าปราจีนบุรี (โรจนะ)
                <a
                  className="branchesVideo fancybox-mp4"
                  data-type="iframe"
                  title=""
                  href="../top_video.mp4"
                ></a>
                <a
                  className="branchesMap"
                  target="_blank"
                  href="https://www.google.com/maps/place/Siam+Nistrans+Co.,+Ltd.+(Prachinburi+Branch)/@13.8418361,101.5166113,15z/data=!4m5!3m4!1s0x311cfbe140032eff:0xbf67690823fe6336!8m2!3d13.8399378!4d101.5227106?hl=jp&shorturl=1"
                ></a>
              </div>

              <div className="branchesText">
                เลขที่ 288 หมู่ที่ 13 ตำบลหัวหว้า อำเภอศรีมหาโพธิ
                จังหวัดปราจีนบุรี 25140 ประเทศไทย
                <br />
                โทรศัพท์: (+66)-37-210-151
              </div>
            </div>
          </div>

          {/* <div className="row branchesRow">
            <div className="col-xs-4">
              <div className="branchesPic">
                <img
                  src="../images/domestic-branches/009.jpg"
                  alt="Domestic Branches"
                />
              </div>
            </div>

            <div className="col-xs-8">
              <div className="branchesTitle">
                คลังสินค้าปราจีนบุรี (304)
                <a
                  className="branchesMap"
                  target="_blank"
                  href="https://www.google.co.th/maps/place/Siam+Nistrans+Co.,+Ltd.+PRACHINBURI+BRANCH/@13.8438312,101.5527666,17z/data=!3m1!4b1!4m5!3m4!1s0x311cf03c12ecf39f:0xe4210a62a970ee70!8m2!3d13.8438312!4d101.5549553?hl=en"
                ></a>
              </div>

              <div className="branchesText">
                เลขที่ 82 หมู่ที่ 9 ตำบลหนองโพรง อำเภอศรีมหาโพธิ
                จังหวัดปราจีนบุรี 25140 ประเทศไทย
              </div>
            </div>
          </div> */}
          <div className="row branchesRow">
            <div className="col-xs-4">
              <div className="branchesPic">
                <img
                  src="../images/domestic-branches/008.jpg"
                  alt="Domestic Branches"
                />
              </div>
            </div>

            <div className="col-xs-8">
              <div className="branchesTitle">
                คลังสินค้าเชียงใหม่
                <a
                  className="branchesMap"
                  target="_blank"
                  href="https://goo.gl/maps/tQcM8Uax6FinKGyGA"
                ></a>
              </div>

              <div className="branchesText">
                เลขที่ 177 หมู่ที่ 13 ตำบลมะเขือแจ้ อำเภอเมืองลำพูน จังหวัดลำพูน
                51000 ประเทศไทย
                <br />
                โทรศัพท์: (+66)-53-096-302~4 / โทรสาร: (+66)-53-093-305
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
