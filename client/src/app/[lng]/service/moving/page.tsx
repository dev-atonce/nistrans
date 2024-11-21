import Cover from "@/components/website/layout/Cover";

export default function Moving() {
  return (
    <>
      <Cover
        noHeading={true}
        pageName="บริการของเรา"
        engName="Service"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">ธุรกิจงานขนย้าย</h1>
        <div className="py-10">
          <div className="branchesTopic">
            <img
              src="../images/moving-service/006.jpg"
              className="pull-right"
              style={{ width: "320px", padding: "8px 0 0 20px" }}
              alt="House Moving"
            />
            เราให้บริการงานขนย้ายทั่วไปซึ่งปรับเปลี่ยนไปตามสถานการณ์
            โดยใช้ประโยชน์จากบริการขนส่งครบวงจรทั้งทางบก ทะเล และอากาศ
            นับตั้งแต่การขนย้ายภายในประเทศไทยหรืองานย้ายสำนักงาน
            เราก็สามารถตอบสนองให้ท่านได้ ไม่ว่าจะมีขนาดเล็กหรือใหญ่
            เจ้าหน้าที่หญิงชาวญี่ปุ่นที่ดูแลเรื่องงานขนย้ายโดยเฉพาะพร้อมให้บริการด้วยความรับผิดชอบตั้งแต่ต้นจนจบกระบวนการ
            จึงขอเชิญให้ท่านมาสัมผัสประสบการณ์การขนย้ายของ Siam Nistrans <br />
            ท่านจะได้รับทราบถึงข้อดีที่แตกต่างไปจากบริษัทอื่นที่ประกอบธุรกิจ
            <br />
            เดียวกันไม่มากก็น้อย
          </div>

          <div className="pageTitle1">งานขนย้ายระหว่างประเทศและภายในประเทศ</div>

          <div className="pageTitle2" style={{ fontSize: "25px" }}>
            ระบบขนส่งแบบครบวงจรที่ใช้ประโยชน์จากเครือข่ายระดับสากล
            จะช่วยส่งมอบสัมภาระให้อย่างปลอดภัย แน่นอน และรวดเร็วทันใจ
            ซึ่งรวมไปถึงงานบรรจุภัณฑ์ การรับสัมภาระ พิธีการศุลกากร และการจัดส่ง
          </div>

          <img
            src="../images/th/moving-service/001.jpg"
            className="img-responsive"
            alt="House Moving"
          />

          <div className="picRow1">
            <div className="row">
              <div className="col-xs-3">
                <img
                  src="../images/moving-service/002.jpg"
                  className="img-responsive"
                  alt="House Moving"
                />
              </div>
              <div className="col-xs-3">
                <img
                  src="../images/moving-service/003.jpg"
                  className="img-responsive"
                  alt="House Moving"
                />
              </div>
              <div className="col-xs-3">
                <img
                  src="../images/moving-service/004.jpg"
                  className="img-responsive"
                  alt="House Moving"
                />
              </div>
              <div className="col-xs-3">
                <img
                  src="../images/moving-service/005.jpg"
                  className="img-responsive"
                  alt="House Moving"
                />
              </div>
            </div>
          </div>

          <div className="handlingBox">
            <div className="handlingTitle">สาขาที่ให้บริการ</div>
            <div className="handlingList">
              <table>
                <tbody>
                  <tr>
                    <td>・กรุงเทพมหานคร</td>
                    <td>・พระนครศรีอยุธยา</td>
                    <td>・แหลมฉบัง</td>
                    <td>・ปราจีนบุรี</td>
                    <td>・เชียงใหม่</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
