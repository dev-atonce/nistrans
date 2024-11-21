import Cover from "@/components/website/layout/Cover";

export default function Packing() {
  return (
    <>
      <Cover
        noHeading={true}
        pageName="บริการของเรา"
        engName="Service"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">งานพิธีการศุลกากร</h1>
        <div className="py-10">
          <div className="branchesTopic text-center">
            ใช้ประโยชน์จาก "Information Platform"
            แพลตฟอร์มข้อมูลเกี่ยวกับการขนส่งกระจายสินค้า+IT <br />
            ซึ่งได้รับการพัฒนาอย่างเป็นเอกเทศโดยบริษัท เพื่อสนับสนุน SCM (Supply
            Chain Management) <br />
            ของลูกค้าโดยรวม
          </div>

          <div className="pageTitle1">ให้บริการดำเนินงานแทนในรูปแบบ 3PL</div>

          <div className="pageTitle2">
            รับแผนการผลิตจากลูกค้า
            ควบคุมการสั่งซื้อและการตอบคำถามเรื่องกำหนดการส่งมอบ
            และจัดทำแผนการส่งมอบประจำเดือนและคำสั่งการส่งมอบที่มีความเหมาะสมที่สุดให้โดยอัตโนมัติ
            โดยลิงก์กับตารางกำหนดการเดินเรือ
            ข้อมูลสินค้าคงคลังซึ่งรวมไปถึงสินค้าคงคลังบนเรือเดินทะเล
            ไปจนถึงการจัดส่งไปยังจุดหมายปลายทางส่งมอบ
            รวมทั้งสนับสนุนการจัดทำเอกสารส่งออกและนำเข้า
            นำเสนอข้อมูลการวิเคราะห์ SCM
          </div>

          <img
            src="../images/th/scm-solutions/015.jpg"
            className="img-responsive img-center"
            alt="SCM Solutions"
          />

          {/* <div className="scmText1">
  3PL型業務代行サービス
  <div className="small">
    お客様の物流部門の業務を代行<br/>
    工場の生産情報と販社への納期情報、プラス本船情報を組み合わせて月間の出荷計画を策定<br/>
    生産計画受領から、納品先配送までを連動させ、最適な物流計画を支援
  </div>
</div> */}

          <div className="pageTitle1" style={{ marginTop: "120px" }}>
            ให้บริการการขนส่งกระจายสินค้าแบบ "มองเห็นได้" โดยรวม
          </div>

          <a
            className="fancyBox"
            href="../images/th/scm-solutions/014-zoom.jpg"
            rel="groupimg"
            title=""
          >
            <img
              src="../images/th/scm-solutions/014.jpg"
              className="img-responsive"
              style={{ margin: "50px auto 25px auto" }}
              alt="SCM Solutions"
            />
          </a>

          <div className="scmText3">Information Platform</div>

          <div className="scmTextRotate">
            <ul>
              {[
                "แผนการผลิต",
                "ให้คำตอบเรื่องกำหนดการส่งมอบ",
                "แผนการสั่งซื้อ",
                "สั่งซื้อ",
                "รวบรวมสินค้า",
                "ปฏิบัติงานบรรจุภัณฑ์",
                "Vanning",
                "BOOKING",
                "จัดทำเอกสาร",
                "ยื่นเรื่องขอส่งออก",
                "ขนย้ายเข้าพื้นที่",
                "ออก B/L",
                "ออก A/N",
                "พิธีการศุลกากรขาเข้า",
                "ดำเนินเรื่อง Drayage",
                "จัดเก็บ",
                "คำสั่งการส่งมอบ",
                "ส่งมอบ",
                "จัดส่ง",
              ].map((text, index) => (
                <li key={index}>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <img
            src="../images/scm-solutions/013.jpg"
            className="img-responsive img-center"
            alt="SCM Solutions"
          />

          <div className="scmText1" style={{ margin: "50px 0" }}>
            จัดการข้อมูลการขนส่งและกระจายสินค้าแบบครบวงจร
            <div className="small">
              จัดการและนำเสนอข้อมูลการขนส่งและกระจายสินค้าของลูกค้าแบบบูรณาการตั้งแต่การวางแผนจนเสร็จสิ้นการจัดส่ง
              นอกจากนี้ยังจัดเก็บเอกสารที่เกี่ยวข้องในเวลาเดียวกัน
            </div>
          </div>

          <ul className="textNum">
            <li className="nNum">
              <div className="nNumText">จุดเด่น</div>
              <div className="nNumNum">01</div>
            </li>
            <li className="tText">
              มองเห็นสถานะสินค้าของลูกค้าได้แบบครบวงจรและจากที่เดียวผ่านการขนส่งและกระจายสินค้าโดยรวมตั้งแต่
              <br />
              การนำเข้า-ส่งออก การจัดเก็บ ไปจนถึงการจัดส่ง
              ด้วยการเชื่อมโยงข้อมูลของระบบต่างๆ (WMS, Forwarding System)
              มาเชื่อมโยงกับ Information Platform
            </li>
          </ul>

          <ul className="textNum">
            <li className="nNum">
              <div className="nNumText">จุดเด่น</div>
              <div className="nNumNum">02</div>
            </li>
            <li className="tText" style={{ position: "relative" }}>
              การใช้ร่วมกับ "HACO Lab."
              จะทำให้การขนส่งกระจายสินค้าแบบหมุนเวียนระหว่างซัพพลายเออร์และปลายทาง
              <br />
              ส่งมอบซึ่งเชื่อมกับ SCMสามารถมองเห็นได้อย่างเรียลไทม์ว่า "อะไร
              อยู่ที่ใด และมีจำนวนเท่าไร"
              <div className="scmBtnHaco">
                <a className="pageBtnMore" href="haco-lab.php">
                  <div className="pageBtnMoreBg"></div>
                  <div className="pageBtnMoreHover"></div>
                  <div className="pageBtnMoreText">HACO Lab.</div>
                </a>
              </div>
            </li>
          </ul>

          <div className="picRow1">
            <div className="row">
              {["010", "016", "011", "012"].map((image, index) => (
                <div className="col-xs-3" key={index}>
                  <img
                    src={`../images/scm-solutions/${image}.jpg`}
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
