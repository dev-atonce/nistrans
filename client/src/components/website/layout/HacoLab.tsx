"use client";

import Link from "next/link";

export default function HacoLab() {
  return (
    <>
      <style jsx>
        {`
          .homeWarehouse {
            background: #ffffff;
            // padding: 100px 0;
            margin: -1px 0 0 0;
          }

          .homeWarehouseBox {
            width: 100%;
            height: 468px;
            position: relative;
            // background: url("../../../../public/img/005.jpg") no-repeat;
            // background-size: 100% 100%;
          }

          .homeWarehouseTitle {
            width: 565px;
            text-align: center;
            padding: 40px 0 0 0;
          }

          .homeWarehouseTitle .pageTitle1 {
            width: 415px;
            display: inline-block;
            background: url("../img/title-bg2.jpg") no-repeat center bottom;
            background-size: 554px 4px;
            color: #ffffff;
            font-size: 24px;
            letter-spacing: 0.5px;
            font-weight: 500;
            line-height: 100%;
            padding-bottom: 15px;
            margin-bottom: 20px;
          }

          .homeWarehouseText {
            width: 600px;
            color: #ffffff;
            // font-family: "Kanit", sans-serif;
            font-weight: 400;
            font-size: 15px;
            line-height: 150%;
            padding: 0 0 0 25px;
          }

          ul.homeWarehouseText_1 {
            width: auto;
            display: table;
            padding: 0;
            margin: 0;
          }

          ul.homeWarehouseText_1 > li {
            display: table-cell;
            vertical-align: middle;
            word-break: keep-all;
            white-space: nowrap;
          }

          .homeWarehouseTextTitle {
            color: #f8611b;
            font-weight: 500;
            font-size: 32px;
            line-height: 100%;
            padding: 0 15px 0 0;
          }

          .homeWarehouseRow {
            margin-top: 30px;
          }

          .homeWarehouseRowText {
            width: auto;
            display: table;
            word-break: keep-all;
            white-space: nowrap;
            margin: 25px auto 0 auto;
          }

          .homeWarehouse .pageBtnMore {
            float: right;
            margin-top: 15px;
          }
        `}
      </style>
      <>
        <div className="text-slate-600 container mx-auto py-20 block md:hidden">
          <div className="">
            <div className="pb-10 flex justify-center items-center flex-col gap-3">
              <h2 className="text-2xl">
                การควบคุมภาชนะบรรจุเพื่อขนส่งของ Siam Nistrans
              </h2>
              <div className="h-1 w-20 bg-orange-400"></div>
            </div>
          </div>

          <div className="">
            <ul className="flex flex-col items-center py-4">
              <li>
                <div className=" font-jpNoto text-2xl font-semibold text-orange-500">
                  HACO Lab.
                </div>
              </li>
              <li>
                <div style={{ fontSize: "20px", paddingBottom: "5px" }}>
                  แก้ไขปัญหาการควบคุมภาชนะบรรจุเพื่อขนส่ง
                </div>
                HACO Lab. เป็นการผสาน "เทคโนโลยี" ใหม่" เข้ากับ "ภาชนะบรรจุ
                <br />
                เพื่อขนส่ง" เพื่อมุ่งแก้ไขปัญหาการขนส่งและกระจายสินค้า ตลอดจน
                <br />
                เพื่อสร้างการบริการขนส่งและกระจายสินค้าแห่งอนาคต
              </li>
            </ul>

            <div className="grid grid-cols-12 gap-y-4">
              <div className="col-span-12">
                <section className="flex flex-col items-center">
                  <img
                    src="/img/006.jpg"
                    alt="Control with smartphone"
                    className="img-responsive img-center"
                  />
                  <div className="">
                    เพียงดาวน์โหลดแอปพลิเคชัน
                    <br />
                    ก็ควบคุมได้ง่ายด้วย
                    <br />
                    สมาร์ทโฟนเครื่องเดียว
                  </div>
                </section>
              </div>

              <div className="col-span-12">
                <section className="flex flex-col items-center">
                  <img
                    src="/img/007.jpg"
                    alt="Labeling containers for easy management"
                    className="img-responsive img-center"
                  />
                  <div className="">
                    ติดฉลากไว้ที่ภาชนะบรรจุเพื่อ
                    <br />
                    ขนส่งเพียงใช้สมาร์ทโฟนสแกน
                    <br />
                    ก็จัดการได้ง่ายดาย
                  </div>
                </section>
              </div>

              <div className="col-span-12">
                <section className="flex flex-col items-center">
                  <img
                    src="/img/008.jpg"
                    alt="Cloud-based information control"
                    className="img-responsive img-center"
                  />
                  <div className="">
                    ควบคุมข้อมูลด้วยคลาวด์
                    <br />
                    ถ้ามีอินเทอร์เน็ตก็สามารถ
                    <br />
                    ดูข้อมูลจากที่ใดก็ได้
                  </div>
                </section>
                <div className="flex justify-center pt-10">
                  <Link
                    href={`/service`}
                    // href={`/${lang.toLowerCase()}/news-activity`}
                    className="  rounded-md border border-orange-400 px-4 py-2 flex items-center bg-white text-orange-400 hover:text-white hover:bg-orange-400 transition-all duration-500"
                  >
                    รายละเอียดเพิ่มเติม
                    {/* {t("button.see-all")} */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homeWarehouse py-20 hidden md:block">
          <div className="container mx-auto 2xl:px-40">
            <section
              className="wow fadeInUp"
              data-wow-offset="50"
              data-wow-delay="0.2s"
            >
              <div
                className="homeWarehouseBox "
                style={{
                  backgroundImage: 'url("/img/005.jpg")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="homeWarehouseTitle">
                  <div className="pb-10 flex justify-center items-center flex-col text-white gap-3">
                    <h2 className="text-2xl">
                      การควบคุมภาชนะบรรจุเพื่อขนส่งของ Siam Nistrans
                    </h2>
                    <div className="h-1 w-20 bg-orange-400"></div>
                  </div>
                </div>

                <div className="homeWarehouseText">
                  <ul className="homeWarehouseText_1">
                    <li>
                      <div className="homeWarehouseTextTitle font-jpNoto">
                        HACO Lab.
                      </div>
                    </li>
                    <li>
                      <div style={{ fontSize: "20px", paddingBottom: "5px" }}>
                        แก้ไขปัญหาการควบคุมภาชนะบรรจุเพื่อขนส่ง
                      </div>
                      HACO Lab. เป็นการผสาน "เทคโนโลยี" ใหม่" เข้ากับ
                      "ภาชนะบรรจุ
                      <br />
                      เพื่อขนส่ง" เพื่อมุ่งแก้ไขปัญหาการขนส่งและกระจายสินค้า
                      ตลอดจน
                      <br />
                      เพื่อสร้างการบริการขนส่งและกระจายสินค้าแห่งอนาคต
                    </li>
                  </ul>

                  <div className="grid grid-cols-12">
                    <div className="col-span-4">
                      <section className="flex flex-col items-center">
                        <img
                          src="/img/006.jpg"
                          alt="Control with smartphone"
                          className="img-responsive img-center"
                        />
                        <div className="homeWarehouseRowText">
                          เพียงดาวน์โหลดแอปพลิเคชัน
                          <br />
                          ก็ควบคุมได้ง่ายด้วย
                          <br />
                          สมาร์ทโฟนเครื่องเดียว
                        </div>
                      </section>
                    </div>

                    <div className="col-span-4">
                      <section className="flex flex-col items-center">
                        <img
                          src="/img/007.jpg"
                          alt="Labeling containers for easy management"
                          className="img-responsive img-center"
                        />
                        <div className="homeWarehouseRowText">
                          ติดฉลากไว้ที่ภาชนะบรรจุเพื่อ
                          <br />
                          ขนส่งเพียงใช้สมาร์ทโฟนสแกน
                          <br />
                          ก็จัดการได้ง่ายดาย
                        </div>
                      </section>
                    </div>

                    <div className="col-span-4">
                      <section className="flex flex-col items-center">
                        <img
                          src="/img/008.jpg"
                          alt="Cloud-based information control"
                          className="img-responsive img-center"
                        />
                        <div className="homeWarehouseRowText">
                          ควบคุมข้อมูลด้วยคลาวด์
                          <br />
                          ถ้ามีอินเทอร์เน็ตก็สามารถ
                          <br />
                          ดูข้อมูลจากที่ใดก็ได้
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="flex justify-center pt-10">
              <Link
                href={`/service`}
                // href={`/${lang.toLowerCase()}/news-activity`}
                className="  rounded-md border border-orange-400 px-4 py-2 flex items-center bg-white text-orange-400 hover:text-white hover:bg-orange-400 transition-all duration-500"
              >
                รายละเอียดเพิ่มเติม
                {/* {t("button.see-all")} */}
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
