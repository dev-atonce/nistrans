import Cover from "@/components/website/layout/Cover";

export default function Warehouse() {
  return (
    <>
      <Cover
        noHeading={true}
        pageName="บริการของเรา"
        engName="Service"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">ธุรกิจคลังสินค้า</h1>
        <div className="py-10">
          <div>
            {/* Branches Topic */}
            <div className="branchesTopic">
              คลังสินค้าของบริษัทมีบริการคลังสินค้าที่มีการเพิ่มมูลค่า เช่น
              งานบรรจุภัณฑ์ การจัดส่งโดยรถของบริษัท ฯลฯ
              ให้สอดคล้องตามความต้องการของลูกค้า
              รวมทั้งใส่ใจต่อการให้บริการอย่างพิถีพิถัน
              ด้วยการควบคุมสินค้าคงคลังและการนำเข้า-ออกคลังสินค้าโดยใช้ระบบ WMS
              ที่บริษัทพัฒนาขึ้น
            </div>

            {/* Page Title 1 */}
            <div className="pageTitle1">
              ลักษณะพิเศษของคลังสินค้าและ
              <br />
              การจัดเก็บของ Siam Nistrans
            </div>

            {/* Page Title 2 */}
            <div className="pageTitle2">
              <div
                style={{ width: "auto", display: "table", margin: "0 auto" }}
              >
                <div className="pull-right">
                  <a
                    className="fancyBox"
                    href="../images/warehouse/014.jpg"
                    rel="groupimg"
                    title=""
                  >
                    <img
                      src="../images/warehouse/014.jpg"
                      className="img-thumbnail"
                      style={{ width: "150px" }}
                      alt="Warehouse"
                    />
                  </a>
                  <div
                    className="imgText"
                    style={{
                      color: "#000000",
                      fontWeight: "normal",
                      fontSize: "14px",
                      lineHeight: "150%",
                    }}
                  >
                    ใบอนุญาตประกอบธุรกิจคลังสินค้า
                  </div>
                </div>
                <div
                  className="text-left"
                  style={{
                    display: "inline-block",
                    wordBreak: "keep-all",
                    padding: "10px 30px 0 0",
                  }}
                >
                  คลังสินค้าแต่ละแห่งมีความสามารถในการจัดหาพื้นที่ว่างที่มากพอ{" "}
                  <br />
                  รวมทั้งมีการจัดขั้นตอนการจ่ายสินค้าให้ราบรื่นกว่าเดิมด้วยการ
                  <br />
                  วางระบบปริมาณการจัดเก็บและปริมาณการกระจายสินค้า
                </div>
              </div>
              <div className="clearfix"></div>
            </div>

            {/* Text Number List - 01 */}
            <ul className="textNum">
              <li className="nNum">
                <div className="nNumText">จุดเด่น</div>
                <div className="nNumNum">01</div>
              </li>
              <li className="tText">
                ให้บริการงาน Logistics Hub
                ที่มีประสิทธิภาพด้วยการใช้คลังสินค้าที่จัดสร้างขึ้นควบคู่ไปกับสาขาแต่ละแห่งเพื่อรองรับสินค้าทุกประเภท
                นอกจากนี้ยังมีการใช้ระบบคลังสินค้าและระบบควบคุมสินค้าคงคลังซึ่งพัฒนาขึ้นโดยเครือ
                Nissin ในประเทศญี่ปุ่นและประเทศต่างๆ
                เพื่อให้การรองรับด้านซอฟต์แวร์โดยมีทีมงาน
                ITภายในบริษัทดำเนินการควบคุม
              </li>
            </ul>

            {/* IT Solution Button */}
            <div style={{ width: "270px", margin: "0 auto" }}>
              <a className="pageBtnMore" href="scm-solutions.php">
                <div className="pageBtnMoreBg"></div>
                <div className="pageBtnMoreHover"></div>
                <div className="pageBtnMoreText">
                  IT Solution ของ Siam Nistrans
                </div>
              </a>
            </div>

            {/* Picture Row 1 - Warehouse Images */}
            <div className="picRow1 picRow1-1">
              <div className="row">
                <div className="col-xs-4">
                  <img
                    src="../images/warehouse/001.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
                <div className="col-xs-4">
                  <img
                    src="../images/warehouse/002.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
                <div className="col-xs-4">
                  <img
                    src="../images/warehouse/003.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
              </div>
            </div>

            {/* Page Title 1 - Warehouse Control */}
            <div className="pageTitle1">การควบคุมคลังสินค้า</div>

            {/* Picture Row 1-1 - Warehouse Control Images */}
            <div className="picRow1 picRow1-1">
              <div className="row">
                {/* Import Warehouse */}
                <div className="col-xs-3">
                  <img
                    src="../images/warehouse/004.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                  <div className="picRow1Text">นำเข้าคลังสินค้า</div>
                </div>

                {/* Storage */}
                <div className="col-xs-3">
                  <img
                    src="../images/warehouse/005.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                  <div className="picRow1Text">จัดเก็บ</div>
                </div>

                {/* Prepare for Distribution */}
                <div className="col-xs-3">
                  <img
                    src="../images/warehouse/006.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                  <div className="picRow1Text">
                    เตรียมกระจายสินค้าออกจากคลังสินค้า
                  </div>
                </div>

                {/* Transport */}
                <div className="col-xs-3">
                  <img
                    src="../images/warehouse/007.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                  <div className="picRow1Text">ขนส่ง (นำเข้าออกคลังสินค้า)</div>
                </div>
              </div>
            </div>

            {/* Page Title 1 - Hazardous Warehouse */}
            <div className="pageTitle1">คลังสินค้าอันตราย</div>

            {/* Dangerous Warehouse Row */}
            <div className="dwhRow">
              <div className="row dwhRow_1">
                {/* Warehouse Image */}
                <div className="col-xs-6">
                  <a
                    className="fancyBox"
                    href="../images/warehouse/016.jpg"
                    rel="groupimg"
                    title=""
                  >
                    <img
                      src="../images/warehouse/016.jpg"
                      className="img-responsive"
                      alt="Warehouse"
                    />
                  </a>
                </div>

                {/* Warehouse Details */}
                <div className="col-xs-6">
                  <div className="dwhText1 no-margin-t">
                    ก่อตั้งคลังสินค้าอันตรายใน T-park บางนา กม.39
                    <br />
                    สามารถเก็บรักษา DIW type 1, 2, 3, UN Class 3, 6.1, 8, 9 ได้
                    <br />
                    กรุณาติดต่อสอบถามพร้อมแสดงเอกสารข้อมูลความปลอดภัยสารเคมี
                    (SDS)
                  </div>
                  <div className="dwhText2">
                    สถานที่
                    <a
                      className="dwhMap"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://goo.gl/maps/7qDpaGqx3gKx26298"
                    ></a>
                    <a
                      className="dwhMapPdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="../file/SIAM_NISTRANS_Map.pdf"
                    ></a>
                  </div>
                  <div className="dwhText1">
                    คลังสินค้าใน T-park บางนา กม.39
                    อยู่ใกล้กับนิคมอุตสาหกรรมและเขตท่าเรือ
                    จึงเป็นจุดที่เหมาะสมที่สุดในการกระจายสินค้า
                  </div>

                  {/* Additional Images */}
                  <div className="row dwhRow_2">
                    <div className="col-xs-6">
                      <a
                        className="fancyBox"
                        href="../images/warehouse/019.jpg"
                        rel="groupimg"
                        title=""
                      >
                        <img
                          src="../images/warehouse/019.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-xs-6">
                      <a
                        className="fancyBox"
                        href="../images/warehouse/020.jpg"
                        rel="groupimg"
                        title=""
                      >
                        <img
                          src="../images/warehouse/020.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row dwhRow_1">
                {/* Another Warehouse Image */}
                <div className="col-xs-6">
                  <a
                    className="fancyBox"
                    href="../images/warehouse/017.jpg"
                    rel="groupimg"
                    title=""
                  >
                    <img
                      src="../images/warehouse/017.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </a>
                  <div className="dwhText1">
                    มีพื้นที่เก็บรักษาถึง 1,000 ตารางเมตร เป็นไปตามมาตรฐาน DIW
                  </div>
                </div>

                {/* Another Warehouse Image */}
                <div className="col-xs-6">
                  <a
                    className="fancyBox"
                    href="../images/warehouse/018.jpg"
                    rel="groupimg"
                    title=""
                  >
                    <img
                      src="../images/warehouse/018.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </a>
                  <div className="dwhText1">
                    เจ้าหน้าที่ผู้มีใบอนุญาตจัดการวัตถุอันตรายจะคอยให้บริการด้านการเก็บ
                  </div>
                </div>
              </div>
            </div>

            {/* Page Title 1 - Temperature Controlled Warehouse */}
            <div className="pageTitle1">คลังสินค้าอันตราย</div>

            {/* Temperature Controlled Warehouse */}
            <div className="picRow1 picRow1-1">
              <div className="dwhText1">
                เราเปิดให้บริการคลังสินค้าควบคุมอุณหภูมิไว้ภายในคลังสินค้า BPK41
                ควบคุมอุณหภูมิไว้ที่ 18-25℃ ด้วยเครื่องปรับอากาศตลอด 24 ชั่วโมง
                และรักษาความชื้นไว้ที่ประมาณ 60%
                สำหรับสินค้าที่ต้องจัดเก็บด้วยความระมัดระวังเป็นพิเศษ
                โปรดสอบถามเราโดยตรง การจัดเก็บในคลังสินค้าเดียวกับสินค้าทั่วไป
                จะช่วยให้การขนส่งเป็นไปอย่างมีประสิทธิภาพมากขึ้น
              </div>
              <div className="row">
                <div className="col-xs-4">
                  <img
                    src="../images/warehouse/022.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
                <div className="col-xs-4">
                  <img
                    src="../images/warehouse/023.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
                <div className="col-xs-4">
                  <img
                    src="../images/warehouse/024.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
              </div>
            </div>

            {/* Page Title 1 - Above Ground Warehouse */}
            <div className="pageTitle1">คลังสินค้าทัณฑ์บน</div>

            {/* Above Ground Warehouse */}
            <div className="picRow1 picRow1-1">
              <div className="dwhText1">
                บริษัทฯ ได้ทำการเปิดคลังสินค้าทัณฑ์บนในนิคมอุตสาหกรรมลำพูน FTZ 3
                <br />
                ซึ่งสามารถให้บริการ จัดเก็บเอกสารสัญญา สินค้าติดทัณฑ์บน
                การบริหารจัดการคลังสินค้าทัณฑ์บน
                และการขนส่งสินค้าทัณฑ์บนระหว่างโรงงาน
              </div>
              <div className="row">
                <div className="col-xs-4">
                  <img
                    src="../images/warehouse/025.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
                <div className="col-xs-4">
                  <img
                    src="../images/warehouse/026.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
                <div className="col-xs-4">
                  <img
                    src="../images/warehouse/027.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
              </div>
            </div>

            {/* Page Title 1 - SIAM NISTRANS Warehouses */}
            <div className="pageTitle1">คลังสินค้าของ SIAM NISTRANS</div>

            {/* Warehouse Map Row */}
            <div className="whMapRow">
              <div className="row">
                {/* Warehouse Map */}
                <div className="col-xs-6">
                  <div className="whMap">
                    <img
                      src="../images/warehouse/map.jpg"
                      className="img-responsive"
                      alt="Warehouse"
                    />

                    <ul className="nav whPin">
                      <li className="whPin1 active">
                        <a href="#whMap1" data-toggle="tab"></a>
                      </li>
                      <li className="whPin2">
                        <a href="#whMap2" data-toggle="tab"></a>
                      </li>
                      <li className="whPin3">
                        <a href="#whMap3" data-toggle="tab"></a>
                      </li>
                      <li className="whPin4">
                        <a href="#whMap4" data-toggle="tab"></a>
                      </li>
                      {/* <li className="whPin5">
                  <a href="#whMap5" data-toggle="tab"></a>
                </li> */}
                      <li className="whPin6">
                        <a href="#whMap6" data-toggle="tab"></a>
                      </li>
                      <li className="whPin7">
                        <a href="#whMap7" data-toggle="tab"></a>
                      </li>
                      <li className="whPin8">
                        <a href="#whMap8" data-toggle="tab"></a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Warehouse Details */}
                <div className="col-xs-6">
                  <div className="whText1">
                    มีคลังสินค้าอยู่บนทำเลสำคัญในพื้นที่ใกล้กรุงเทพฯ
                    และเชียงใหม่
                    เพื่อรับจัดเก็บสินค้าในทำเลที่เหมาะสมกับความต้องการของลูกค้า
                  </div>

                  {/* Tab Content */}
                  <div className="tab-content">
                    {/* Warehouse 1 */}
                    <div className="tab-pane fade active in" id="whMap1">
                      <div className="branchesTitle">
                        พระนครศรีอยุธยา
                        <a
                          className="branchesMap"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.co.th/maps/place/Siam+Nistrans+Co.Ltd./@14.3541586,100.6684489,15.75z/data=!4m5!3m4!1s0x311d8bb132ee5a35:0xa1e55acf84d66d4e!8m2!3d14.3528496!4d100.6723384?hl=en"
                        ></a>
                      </div>
                      <div className="whText3">
                        45-46 ม.2 ต.อุทัย อ.อุทัย จ.พระนครศรีอยุธยา 13210
                        <br />
                        เนื้อที่คลังสินค้า: 11,340 ตร.ม.
                      </div>

                      <a
                        className="whPic"
                        style={{
                          background:
                            "url('../images/warehouse/008.jpg') no-repeat",
                        }}
                      ></a>
                    </div>

                    {/* Warehouse 2 */}
                    <div className="tab-pane fade" id="whMap2">
                      <div className="branchesTitle">
                        บางปะกง 38
                        <a
                          className="branchesMap"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.co.th/maps/place/13%C2%B033'55.4%22N+100%C2%B056'05.5%22E/@13.5659881,100.9367314,16z/data=!4m5!3m4!1s0x0:0x0!8m2!3d13.5653889!4d100.9348611?hl=en"
                        ></a>
                      </div>
                      <div className="whText3">
                        68/8 ม.5 ถ.บางนา-ตราด กม.38 ต.บางสมัคร <br />
                        อ.บางปะกง จ.ฉะเชิงเทรา 24180
                        <br />
                        เนื้อที่คลังสินค้า : 14,700 ตร.ม.　
                      </div>

                      <a
                        className="whPic"
                        style={{
                          background:
                            "url('../images/warehouse/009.jpg') no-repeat",
                        }}
                      ></a>
                    </div>

                    {/* Warehouse 3 */}
                    <div className="tab-pane fade" id="whMap3">
                      <div className="branchesTitle">
                        บางปะกง 41
                        <a
                          className="branchesMap"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.co.th/maps/place/Siam+Nistrans+Company+Limited/@13.5535049,100.9557077,17z/data=!3m1!4b1!4m5!3m4!1s0x311d47152a59de19:0x42658e940b1f071c!8m2!3d13.5535049!4d100.9579017?hl=en"
                        ></a>
                      </div>
                      <div className="whText3">
                        100/2 ม.6 ถ.บางนา-ตราด กม.41 ต.บางวัว <br />
                        อ.บางปะกง จ.ฉะเชิงเทรา 24130
                        <br />
                        เนื้อที่คลังสินค้า: 8,833 ต.รม.
                      </div>

                      <a
                        className="whPic"
                        style={{
                          background:
                            "url('../images/warehouse/010.jpg') no-repeat",
                        }}
                      ></a>
                    </div>

                    {/* Warehouse 4 */}
                    <div className="tab-pane fade" id="whMap4">
                      <div className="branchesTitle">
                        ปราจีนบุรี (โรจนะ)
                        <a
                          className="branchesMap"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.com/maps/place/Siam+Nistrans+Co.,+Ltd.+(Prachinburi+Branch)/@13.8418361,101.5166113,15z/data=!4m5!3m4!1s0x311cfbe140032eff:0xbf67690823fe6336!8m2!3d13.8399378!4d101.5227106?hl=en"
                        ></a>
                      </div>
                      <div className="whText3">
                        82 ม.9 ต.หนองโพรง อ.ศรีมหาโพธิ จ.ปราจีนบุรี 25140
                        <br />
                        เนื้อที่คลังสินค้า : 9,072 ตร.ม.
                      </div>

                      <a
                        className="whPic"
                        style={{
                          background:
                            "url('../images/warehouse/011.jpg') no-repeat",
                        }}
                      ></a>
                    </div>

                    {/* Warehouse 6 */}
                    <div className="tab-pane fade" id="whMap6">
                      <div className="branchesTitle">
                        แหลมฉบัง
                        <a
                          className="branchesMap"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.co.th/maps/place/Siam+Nistrans+Co.,LTD.+(Branch+5)/@13.1242826,100.9806238,17z/data=!3m1!4b1!4m5!3m4!1s0x3102c80041147bab:0xab586e27f921ce73!8m2!3d13.1242826!4d100.9823652?hl=en"
                        ></a>
                      </div>
                      <div className="whText3">
                        2/10 ม.1 ต.หนองขาม อ.ศรีราชา จ.ชลบุรี 20110
                        <br />
                        เนื้อที่คลังสินค้า : 12,800 ตรม.
                      </div>

                      <a
                        className="whPic"
                        style={{
                          background:
                            "url('../images/warehouse/013.jpg') no-repeat",
                        }}
                      ></a>
                    </div>

                    {/* Warehouse 7 */}
                    <div className="tab-pane fade" id="whMap7">
                      <div className="branchesTitle">
                        เชียงใหม่
                        <a
                          className="branchesMap"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.com/maps/place/Siam+Nistrans+Lamphun/@18.608326,99.0417674,19z/data=!3m1!4b1!4m12!1m6!3m5!1s0x30da2d3c679c6357:0xad3774ccf93dafd2!2sCTP+DC+Warehouse+Factory!8m2!3d18.6084051!4d99.0425365!3m4!1s0x30da2dd23428755d:0x6159f2cf1e7cd71c!8m2!3d18.608326!4d99.0423146?hl=en"
                        ></a>
                      </div>
                      <div className="whText3">
                        177 หมู่ 13 ต.มะเขือแจ้ อ.เมือง จ.ลำพูน 51000
                        <br />
                        เนื้อที่คลังสินค้า : 5,650 ตรม.
                      </div>

                      <a
                        className="whPic"
                        style={{
                          background:
                            "url('../images/warehouse/015.jpg') no-repeat",
                        }}
                      ></a>
                    </div>

                    {/* Warehouse 8 */}
                    <div className="tab-pane fade" id="whMap8">
                      <div className="branchesTitle">
                        คลังสินค้าอันตราย
                        <a
                          className="branchesMap"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://goo.gl/maps/qHAf9knNkXaEj95R6"
                        ></a>
                      </div>
                      <div className="whText3">
                        T-park บางนา WH DG 6/2 70/2 หมู่ที่ 5 ตำบลบางสมัคร
                        <br />
                        อำเภอบางปะกง จังหวัดฉะเชิงเทรา 24180
                        <br />
                        เนื้อที่คลังสินค้า: 1,000 ตร.ม.
                      </div>

                      <a
                        className="whPic"
                        style={{
                          background:
                            "url('../images/warehouse/021.jpg') no-repeat",
                        }}
                      ></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="whText3" style={{ marginTop: "5px" }}>
                เมื่อคลิกที่ตำแหน่งพิกัดจะสามารถตรวจสอบข้อมูลสถานที่ตั้งคลังสินค้าแต่ละแห่งได้
              </div>
            </div>

            {/* Handling Box - Branches */}
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
                      <td>・บางนา กม.39 DG</td>
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
