import Cover from "@/components/website/layout/Cover";

export default function Haco() {
  return (
    <>
      <Cover
        noHeading={true}
        pageName="บริการของเรา"
        engName="Service"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">HACO Lab.</h1>
        <div className="py-10">
          <div>
            <div className="branchesTopic no-margin-b">
              ในการป้องกันการสูญหายของภาชนะบรรจุสำหรับขนส่งสินค้าที่มีความสำคัญ
              การควบคุมภาชนะเป็นรายชิ้นถือเป็นเรื่องจำเป็น
              การควบคุมภาชนะขนส่งต้องสิ้นเปลืองทั้งเวลาและแรงงาน
              จึงมีลูกค้าที่มีความไม่สะดวกอยู่เป็นจำนวนมาก
              เพื่อเป็นการแก้ไขปัญหาความไม่สะดวกดังกล่าว เราจึงขอนำเสนอ "HACO
              Lab." ซึ่งเป็นการนำ "ภาชนะขนส่ง"
              มาลิงก์กับแอปพลิเคชันบนสมาร์ทโฟนเพื่อทำการเก็บบันทึกและควบคุมอย่างง่ายดายบนคลาวด์
              ยิ่งไปกว่านั้นตามกฎหมายศุลกากรของประเทศญี่ปุ่นหรือประเทศไทยได้กำหนดมาตรการยกเว้นภาษีสำหรับ
              Returnable Box การใช้ HACO Lab. จึงช่วยลดต้นทุนได้อีกด้วย
              เราขอนำเสนอ "การพัฒนา" "การควบคุม" และ "การใช้"
              ภาชนะขนส่งที่มีประสิทธิภาพแบบ One Stop ร่วมกับพาร์ตเนอร์หลายราย
              เพื่อเนรมิตการขนส่งที่เหมาะสมที่สุดสำหรับลูกค้า
            </div>

            <div
              className="embed-responsive embed-responsive-16by9"
              style={{ margin: "50px 0 100px 0" }}
            >
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/i40XV2gQvnA?rel=0"
                allowFullScreen
                width="100%"
                height="500px"
              ></iframe>
            </div>

            <div className="pageTitle1">กลไกการทำงานของ HACO Lab.</div>

            <div className="hacoRow1Text1">ระบบคัลเลอร์โค้ด</div>

            <ul className="hacoRow1">
              <li>
                <img src="../images/haco-lab/001.jpg" alt="HACO Lab." />
                <div>
                  <p>ออกคัลเลอร์โค้ด นำฉลากไปติดบนภาชนะขนส่งแต่ละชิ้น</p>
                  <div style={{ fontSize: "70%", lineHeight: "140%" }}>
                    ※Chameleon Code เป็นผลิตภัณฑ์ของ SHIFT Inc.
                    และเป็นเครื่องหมายการค้าจดทะเบียนของ SHIFT Inc.
                  </div>
                </div>
              </li>

              <li>
                <img src="../images/arrowR-2.jpg" alt="Arrow" />
              </li>

              <li>
                <img src="../images/haco-lab/002.jpg" alt="HACO Lab." />
                <div>ดาวน์โหลดแอปพลิเคชันในมือถือ และรับการยืนยัน License</div>
              </li>

              <li>
                <img src="../images/arrowR-2.jpg" alt="Arrow" />
              </li>

              <li>
                <img src="../images/haco-lab/003.jpg" alt="HACO Lab." />
                <div>สแกนคัลเลอร์โค้ดด้วยมือถือ</div>
              </li>

              <li style={{ paddingTop: "130px" }}>
                <img src="../images/arrowR-3.jpg" alt="Arrow" />
              </li>

              <li style={{ position: "relative" }}>
                <div style={{ position: "absolute", marginTop: "215px" }}>
                  <img src="../images/haco-lab/004.jpg" alt="HACO Lab." />
                  <div>
                    ข้อมูลต่างๆ เช่น เวลาที่สแกน สถานที่ที่สแกน
                    จะมีการจัดเก็บไว้ในคลาวด์
                  </div>
                </div>
              </li>
            </ul>

            <div className="hacoRow1Text1">
              RFID (Radio Frequency Identification)
            </div>

            <div className="hacoRow1Text2">
              ติด "RFID Label" ซึ่งมีการป้อนข้อมูลอิเล็กทรอนิกส์ไว้
              แล้วอ่านข้อมูลอิเล็กทรอนิกส์ด้วยเครื่องอ่าน (RFID Handy)
            </div>

            <ul className="hacoRow1">
              <li>
                <img src="../images/haco-lab/008.jpg" alt="HACO Lab." />
                <div className="hacoRow1Text3">RFID Label</div>
                <div>ออก RFID Label นำไปติดที่ภาชนะขนส่งแต่ละชิ้น</div>
              </li>

              <li>
                <img src="../images/arrowR-2.jpg" alt="Arrow" />
              </li>

              <li>
                <img src="../images/haco-lab/009.jpg" alt="HACO Lab." />
                <div className="hacoRow1Text3">RFID Handy</div>
                <div>อ่าน RFID Label ด้วยHandy</div>
              </li>

              <li>&nbsp;</li>

              <li>
                <img
                  src="../images/haco-lab/010.jpg"
                  style={{ marginLeft: "-30px" }}
                  alt="HACO Lab."
                />
                <div>แม้อยู่ในระยะหลายเมตรก็สามารถอ่านได้</div>
              </li>

              <li style={{ paddingTop: "0" }}>
                <img src="../images/arrowR-4.jpg" alt="Arrow" />
              </li>

              <li>&nbsp;</li>
            </ul>

            <div className="hacoRow2">
              <ul>
                <li>
                  <img src="../images/box-icon.png" alt="HACO Lab." />
                </li>
                <li>
                  ภาชนะขนส่งอยู่ที่ใด
                  ก็ยืนยันได้เพียงมองบนหน้าจอคอมพิวเตอร์แวบเดียว!
                </li>
              </ul>
            </div>

            <div className="pageTitle1">ข้อดีของ HACO Lab.</div>

            <div className="hacoRow3">
              <div className="row">
                <div className="col-xs-3">
                  <img
                    src="../images/haco-lab/011.jpg"
                    className="img-responsive img-center"
                    alt="HACO Lab."
                  />
                  <div className="hacoRow3Text1">
                    ใช้ Returnable Box เพื่อรับการยกเว้นภาษี
                    <br />
                    <div style={{ fontSize: "70%" }}>
                      ※อิงตามกฎหมายศุลกากรของแต่ละประเทศ
                    </div>
                  </div>
                  <div className="hacoRow3Btn">
                    <div className="row">
                      <div className="col-xs-6">
                        <a
                          className="pageBtnMore"
                          href="#"
                          data-toggle="modal"
                          data-target="#JPLaw"
                        >
                          <div className="pageBtnMoreBg"></div>
                          <div className="pageBtnMoreHover"></div>
                          <div className="pageBtnMoreText">
                            กฎหมายศุลกากรของประเทศญี่ปุ่น
                          </div>
                        </a>
                      </div>
                      <div className="col-xs-6">
                        <a
                          className="pageBtnMore"
                          href="#"
                          data-toggle="modal"
                          data-target="#THLaw"
                        >
                          <div className="pageBtnMoreBg"></div>
                          <div className="pageBtnMoreHover"></div>
                          <div className="pageBtnMoreText">
                            กฎหมายศุลกากรของประเทศไทย
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-3">
                  <img
                    src="../images/haco-lab/005.jpg"
                    className="img-responsive img-center"
                    alt="HACO Lab."
                  />
                  <div className="hacoRow3Text1">
                    ป้องกันการสูญหายหรือการตกค้างด้วยสต็อกภาชนะขนส่งที่มองเห็นได้
                    จึงช่วยลดต้นทุน
                    <br />
                    <br />
                  </div>
                </div>

                <div className="col-xs-3">
                  <img
                    src="../images/haco-lab/006.jpg"
                    className="img-responsive img-center"
                    alt="HACO Lab."
                  />
                  <div className="hacoRow3Text1">
                    ไม่ใช่การสร้างระบบควบคุมเฉพาะสำหรับภาชนะขนส่ง
                    แต่เป็นการเพิ่มเติมเข้าไปในรูปแบบการขนส่งและกระจายสินค้าในปัจจุบัน
                    จึงนำไปใช้ได้ง่าย
                  </div>
                </div>

                <div className="col-xs-3">
                  <img
                    src="../images/haco-lab/007.jpg"
                    className="img-responsive img-center"
                    alt="HACO Lab."
                  />
                  <div className="hacoRow3Text1">
                    ใช้แอปพลิเคชันบนสมาร์ทโฟนและคลาวด์ในการควบคุม
                    จึงสามารถนำไปใช้ได้ไม่ว่าจะอยู่ส่วนใดของโลก
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ width: "365px", margin: "0 auto" }}>
              <a href="#" data-toggle="modal" data-target="#contactModel">
                ลูกค้าที่พิจารณาจะนำไปใช้ กรุณาติดต่อที่นี่
              </a>
            </div>

            <div className="handlingBox">
              <div className="handlingTitle">สาขาที่ให้บริการ</div>
              <div className="handlingList">
                <table>
                  <tbody>
                    <tr>
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

            {/* Modals */}
            <div className="modal fade" id="JPLaw" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="modalText">
                      กฎหมายศุลกากรของประเทศญี่ปุ่น...
                    </div>
                    <button
                      type="button"
                      className="contactBtn contactClose"
                      data-dismiss="modal"
                    >
                      ปิด
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="THLaw" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="modalText">
                      กฎหมายศุลกากรของประเทศไทย...
                    </div>
                    <button
                      type="button"
                      className="contactBtn contactClose"
                      data-dismiss="modal"
                    >
                      ปิด
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="contactModel" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="modalText">Contact form here...</div>
                    <button
                      type="button"
                      className="contactBtn contactClose"
                      data-dismiss="modal"
                    >
                      ปิด
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
