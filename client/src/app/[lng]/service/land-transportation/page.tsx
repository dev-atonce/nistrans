import Cover from "@/components/website/layout/Cover";

export default function LandTransport() {
  return (
    <>
      <Cover
        noHeading={true}
        pageName="บริการของเรา"
        engName="Service"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">การขนส่งทางบก</h1>
        <div className="py-10">
          <div>
            <div className="branchesTopic">
              เราใช้รถบรรทุกสินค้าของบริษัทที่มีมากกว่า 100
              คันในการขนส่งสินค้าสำคัญจนถึงท่าเรือหรือสนามบินอย่างปลอดภัยและฉับไว
              ไม่เฉพาะการขนส่งภายในประเทศไทยเท่านั้น
              แต่ยังรวมถึงบริการขนส่งข้ามพรมแดน เช่น ลาว กัมพูชา มาเลเซีย
              และประเทศต่างๆ ในอาเซียน
            </div>

            <div className="pageTitle1">
              ข้อดีของการขนส่งทางบกโดย Siam Nistrans
            </div>

            <div style={{ height: "40px" }}></div>

            <ul className="textNum">
              <li className="nNum">
                <div className="nNumText">จุดเด่น</div>
                <div className="nNumNum">01</div>
              </li>
              <li className="tText">
                มีรถบรรทุกของบริษัทกว่า 100 คัน
                และพนักงานขับรถทุกคนเป็นพนักงานของบริษัทที่ได้รับการควบคุมให้ขับแบบเป็นมิตรต่อสิ่งแวดล้อมจึงใส่ใจต่อการขับขี่อย่างปลอดภัยอยู่เสมอ
              </li>
            </ul>

            <div className="gfsRow1">
              <div className="grid grid-cols-12">
                <div className="col-span-6 text-center">
                  <div className="gfsRow1Box">
                    <div className="gfsRow1Text">
                      <strong>
                        รถบรรทุกสินค้าขนส่งที่ Siam Nistrans มีอยู่
                      </strong>
                      <br />
                      ・รถบรรทุกหัวลาก 15 คัน
                      <br />
                      ・รถบรรทุก 10 ล้อ 7 คัน
                      <br />
                      ・รถบรรทุก 6 ล้อ 60 คัน
                      <br />
                      ・รถปิกอัพ 4 ล้อ 29 คัน
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <img
                    src="../images/land-transportation/001.jpg"
                    className="img-responsive"
                    alt="Land Transportation"
                  />
                </div>
              </div>
            </div>

            <ul className="textNum">
              <li className="nNum">
                <div className="nNumText">จุดเด่น</div>
                <div className="nNumNum">02</div>
              </li>
              <li className="tText">
                ได้รับการยอมรับด้านการขนส่งสินค้าที่มีความปลอดภัยและมีเสถียรภาพ
                จนได้รับ Q-mark (Quality Mark)
                <br />
                ซึ่งรับรองโดยกรมการขนส่งทางบก กระทรวงคมนาคมของประเทศไทย
              </li>
            </ul>

            <div className="gfsRow1">
              <div className="gfsRow1Text-2">
                <div className="row">
                  <div className="col-xs-2">
                    <a
                      className="fancyBox"
                      href="../images/land-transportation/002.jpg"
                      rel="groupimg"
                      title=""
                    >
                      <img
                        src="../images/land-transportation/002.jpg"
                        className="img-responsive img-thumbnail"
                        alt="Land Transportation"
                      />
                    </a>
                    <div className="imgText">Q Mark</div>
                  </div>
                  <div className="col-xs-10 no-padding-l">
                    <img
                      src="../images/land-transportation/007.jpg"
                      className="pull-left"
                      style={{
                        width: "310px",
                        paddingRight: "10px",
                        marginTop: "-10px",
                      }}
                      alt="Land Transportation"
                    />
                    <span>
                      ระบบ Q-Mark เป็นระบบรับรองบริษัทขนส่งทางรถบรรทุกที่
                      <br />
                      ดำเนินการโดยกรมการขนส่งทางบก กระทรวงคมนาคม และ
                      <br />
                      ใช้เป็นเงื่อนไขสำหรับการสัญจรระหว่างกันตามความข้อตกลงว่าด้วยการขนส่งข้ามแดน
                      (CBTA) โดยบริษัทได้รับ Q-mark นี้ในเดือนตุลาคม 2561
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="textNum">
              <li className="nNum">
                <div className="nNumText">จุดเด่น</div>
                <div className="nNumNum">03</div>
              </li>
              <li className="tText">
                ให้บริการการขนส่งข้ามแดนด้วยรถบรรทุกของบริษัทที่มีใบอนุญาตตามความตกลง
                <br />
                ว่าด้วยการขนส่งข้ามแดน (CBTA)
              </li>
            </ul>

            <div className="gfsRow1">
              <div className="gfsRow1Text-2">
                <div className="row">
                  <div className="col-xs-4">
                    <div className="row">
                      <div className="col-xs-6" style={{ paddingRight: "5px" }}>
                        <a
                          className="fancyBox"
                          href="../images/land-transportation/004.jpg"
                          rel="groupimg"
                          title=""
                        >
                          <img
                            src="../images/land-transportation/004.jpg"
                            className="img-responsive img-thumbnail"
                            alt="Land Transportation"
                          />
                        </a>
                      </div>
                      <div className="col-xs-6" style={{ paddingLeft: "5px" }}>
                        <a
                          className="fancyBox"
                          href="../images/land-transportation/005.jpg"
                          rel="groupimg"
                          title=""
                        >
                          <img
                            src="../images/land-transportation/005.jpg"
                            className="img-responsive img-thumbnail"
                            alt="Land Transportation"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="imgText">
                      ใบอนุญาตการขนส่งทางถนนในภูมิภาคลุ่มน้ำโขง
                    </div>
                  </div>
                  <div className="col-xs-8 no-padding-l">
                    <p>
                      ความตกลงว่าด้วยการขนส่งข้ามแดน (Cross-Border Transport
                      Agreement)
                      เป็นหนึ่งในหลักสำคัญของขอบข่ายในการทำให้การค้าระหว่างประเทศเป็นไปอย่างราบรื่นตามโปรแกรมพัฒนาอนุภาคลุ่มน้ำโขง
                      (Greater Mekong Subregion) ประเทศใน GMS
                      นอกจากมีประเทศลุ่มน้ำโขง 5 ประเทศ (ไทย กัมพูชา ลาว
                      เมียนมาร์ เวียดนาม) แล้วยังมีจีน
                      (มณฑลยูนนานและเขตปกครองตนเองชนชาติจ้วงมณฑลกวางสี)
                      เข้าร่วมด้วย การใช้ยานพาหนะที่กำหนดไว้ตาม CBTA
                      ในการเคลื่อนย้ายถ่ายเทระหว่างกัน การตรวจสอบเพียงจุดเดียว
                      (Single Stop Inspection:SSI)
                      หรือการปฏิบัติตามระเบียบการขนย้ายวัตถุสิ่งของต่างๆ
                      จะช่วยให้วางใจได้ว่าการขนส่งทางบกในภูมิภาคลุ่มน้ำโขงจะเกิดความราบรื่นขึ้น
                    </p>
                    ปัจจุบันสามารถขนส่งระหว่างกันได้แล้วระหว่างประเทศภาคีสมาชิกยกเว้นเมียนมาร์
                    <br />
                    อันเป็นผลมาจากมาตรการ Early Harvest ของ CBTA
                  </div>
                </div>
              </div>
            </div>

            <ul className="textNum no-margin-t">
              <li className="nNum">
                <div className="nNumText">จุดเด่น</div>
                <div className="nNumNum">04</div>
              </li>
              <li className="tText">
                การให้บริการขนส่งในพื้นที่ระเบียงเศรษฐกิจพิเศษภาคตะวันออก (EEC)
                และประเทศเพื่อนบ้านใกล้เคียง
              </li>
            </ul>

            <div className="gfsRow1">
              <div className="gfsRow1Text-2">
                พัฒนาเส้นทางขนส่งทางบกทั้งขาออกและขาเข้าระหว่างประเทศไทยกับประเทศเพื่อนบ้าน
                เช่น ลาว กัมพูชา มาเลเซีย และประเทศต่างๆ
                ในอาเซียนให้ได้โดยเร็วเพื่อให้บริการในเส้นทางต่างๆ
                ซึ่งจะอำนวยประโยชน์ในด้านการลด Transit Time
                ของสินค้าและลดสินค้าคงคลังในการขนส่ง
                <div className="row" style={{ marginTop: "30px" }}>
                  <div className="col-xs-9 no-padding-r">
                    <img
                      src="../images/land-transportation/003.jpg"
                      className="img-responsive"
                      alt="Land Transportation"
                    />
                  </div>
                  <div className="col-xs-3" style={{ paddingLeft: "33px" }}>
                    <a
                      className="fancyBox"
                      href="../images/land-transportation/006.jpg"
                      rel="groupimg"
                      title=""
                    >
                      <img
                        src="../images/land-transportation/006.jpg"
                        className="img-responsive img-thumbnail"
                        alt="Land Transportation"
                      />
                    </a>
                    <div className="imgText">
                      <span>
                        ใบอนุญาตประกอบการขนส่งระหว่างประเทศด้วยรถบรรทุก
                      </span>
                    </div>
                  </div>
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
                      <td>・บางปะกง</td>
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
      </div>
    </>
  );
}
