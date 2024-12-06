import Cover from "@/components/website/layout/Cover";
import { useTranslations } from "next-intl";

export default function Haco() {
  const h = useTranslations('header');
  const t = useTranslations('haco-lab');
  const b = useTranslations('branchs')
  return (
    <>
      <Cover
        noHeading={true}
        pageName={t('h1')}
        engName="Service"
        prevPage={{ pageName: h('home'), url: "/" }}
      />
      <div className="container mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">{t('h1')}</h1>
        <div className="py-10">
          <div>
            <div className="branchesTopic no-margin-b">{t('p')}</div>

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

            <div className="pageTitle1">{t('h2')}</div>

            <div className="grid grid-cols-12">
              <div className="col-span-9">
                <div className="bg-[#1c2f50] text-white text-xl p-2 text-center my-8">{t('section1.1.1')}</div>
              </div>
              <div className="col-span-3"></div>
            </div>

            <ul className="hacoRow1">
              <li>
                <img src="/img/service/haco-lab/001.jpg" alt="HACO Lab." />
                <div>
                  <p>{t('section1.1.1-1')}</p>
                  <div style={{ fontSize: "70%", lineHeight: "140%" }}>
                    ※{t('section1.1.1-1-1')}
                  </div>
                </div>
              </li>

              <li>
                <img src="/img/service/haco-lab/arrowR-2.jpg" alt="Arrow" />
              </li>

              <li>
                <img src="/img/service/haco-lab/002.jpg" alt="HACO Lab." />
                <div>{t('section1.1.1-2')}</div>
              </li>

              <li>
                <img src="/img/service/haco-lab/arrowR-2.jpg" alt="Arrow" />
              </li>

              <li>
                <img src="/img/service/haco-lab/003.jpg" alt="HACO Lab." />
                <div>{t('section1.1.1-3')}</div>
              </li>

              <li style={{ paddingTop: "130px" }}>
                <img src="/img/service/haco-lab/arrowR-3.jpg" alt="Arrow" />
              </li>

              <li style={{ position: "relative" }}>
                <div style={{ position: "absolute", marginTop: "215px" }}>
                  <img src="/img/service/haco-lab/004.jpg" alt="HACO Lab." />
                  <div>{t('section1.1.3')}
                  </div>
                </div>
              </li>
            </ul>

            <div className="grid grid-cols-12">
              <div className="col-span-9">
                <div className="bg-[#1c2f50] text-white text-xl p-2 text-center my-8">
                  <p>
                    {t('section1.1.2')}
                  </p>
                </div>
                <p className="text-xl mb-4">
                  {t('section1.1.2-p')}
                </p>
              </div>
              <div className="col-span-3"></div>
            </div>


            <ul className="hacoRow1">
              <li>
                <img src="/img/service/haco-lab/008.jpg" alt="HACO Lab." />
                <div className="hacoRow1Text3">{t('section1.1.2-1')}</div>
                <div>{t('section1.1.2-1-p')}</div>
              </li>

              <li>
                <img src="/img/service/haco-lab/arrowR-2.jpg" alt="Arrow" />
              </li>

              <li>
                <img src="/img/service/haco-lab/009.jpg" alt="HACO Lab." />
                <div className="hacoRow1Text3">{t('section1.1.2-2')}</div>
                <div>{t('section1.1.2-2-p')}</div>
              </li>

              <li>&nbsp;</li>

              <li>
                <img
                  src="/img/service/haco-lab/010.jpg"
                  style={{ marginLeft: "-30px" }}
                  alt="HACO Lab."
                />
                <div>{t('section1.1.2-3')}</div>
              </li>

              <li style={{ paddingTop: "0" }}>
                <img src="/img/service/haco-lab/arrowR-4.jpg" alt="Arrow" />
              </li>

              <li>&nbsp;</li>
            </ul>

            <div className="hacoRow2">
              <ul>
                <li>
                  <img src="/img/service/haco-lab/box-icon.png" alt="HACO Lab." />
                </li>
                <li>{t('section1.1.other')}</li>
              </ul>
            </div>

            <div className="pageTitle1">{t('section2.title')}</div>

            <div className="hacoRow3">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 p-4">
                  <div className="flex items-center justify-center">
                    <img
                      src="/img/service/haco-lab/011.jpg"
                      className="img-responsive img-center"
                      alt="HACO Lab."
                    />
                  </div>
                  <div className="hacoRow3Text1">
                    {t('section2.1')}
                    <br />
                    <div style={{ fontSize: "70%" }}>
                      ※อิงตามกฎหมายศุลกากรของแต่ละประเทศ
                    </div>
                  </div>
                  <div className="hacoRow3Btn">
                    <div className="flex justify-between">
                      <div className="w-[50%] m-2">
                        <a
                          className="pageBtnMore"
                          href="#"
                          data-toggle="modal"
                          data-target="#JPLaw"
                        >
                          <div className="pageBtnMoreBg"></div>
                          <div className="pageBtnMoreHover"></div>
                          <div className="pageBtnMoreText">
                            {t('section2.button-jp')}
                          </div>
                        </a>
                      </div>
                      <div className="w-[50%] m-2">
                        <a
                          className="pageBtnMore"
                          href="#"
                          data-toggle="modal"
                          data-target="#THLaw"
                        >
                          <div className="pageBtnMoreBg"></div>
                          <div className="pageBtnMoreHover"></div>
                          <div className="pageBtnMoreText">
                          {t('section2.button-th')}
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-3 p-4">
                  <div className="flex items-center justify-center">
                    <img
                      src="/img/service/haco-lab/005.jpg"
                      className="img-responsive img-center"
                      alt="HACO Lab."
                    />
                  </div>
                  <div className="hacoRow3Text1">{t('section2.2')}</div>
                </div>

                <div className="col-span-3 p-4">
                  <div className="flex items-center justify-center">
                    <img
                      src="/img/service/haco-lab/006.jpg"
                      className="img-responsive img-center"
                      alt="HACO Lab."
                    />
                    </div>
                  <div className="hacoRow3Text1">{t('section2.3')}</div>
                </div>

                <div className="col-span-3 p-4">
                  <div className="flex items-center justify-center">
                    <img
                      src="/img/service/haco-lab/007.jpg"
                      className="img-responsive img-center"
                      alt="HACO Lab."
                    />
                  </div>
                  <div className="hacoRow3Text1">{t('section2.4')}</div>
                </div>
              </div>
            </div>
            

            <div>
              <a className="pageBtnMore" href="#" data-toggle="modal" data-target="#contactModel">
                <div className="pageBtnMoreBg"></div>
                <div className="pageBtnMoreHover"></div>
                <div className="pageBtnMoreText">{t('section2.click-to-contact')}</div>
              </a>
            </div>

            <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="handlingBox">
                <div className="handlingTitle">{b('title')}</div>
                <ul className="list-disc grid md:flex">
                  <li className="ms-8 ps-0">{b('ayutthaya')}</li>
                  <li className="ms-8 ps-0">{b('bangpakong')}</li>
                  <li className="ms-8 ps-0">{b('laem-chabang')}</li>
                  <li className="ms-8 ps-0">{b('prachinburi')}</li>
                  <li className="ms-8 ps-0">{b('chiang-mai')}</li>
                </ul>
              </div>
            </div>
          </div>

            {/* Modals */}
            <div className="modal fade" id="JPLaw" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="modalText">
                    Customs Tariff Act Section 14 (Unconditional duty exemption)
Duty on the following goods to be imported shall be exempted in accordance with the provisions of the Cabinet Order:
Clause 11: Containers (including similar goods) for goods exported from the country as prescribed under the Cabinet Order and used for such export or to be used for import.

Customs Tariff Act Section 17 (Duty exemption on re-export)
Duty on the following goods to be exported within one (1) year from the date of import permit shall be exempted in accordance with the provisions of the Cabinet Order:
Clause 1 (ii) Containers for imported goods as prescribed under the Cabinet Order
Clause 1 (iii) Goods used as a container for exported goods as prescribed under the Cabinet Order

As of October 2019
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
                    Duty exemption on returnable containers for imported goods.
On July 9, 2018, the Customs Bureau issued a notification (No.154 / 2561) to apply a tax exemption measure for returnable containers for imported cargo called "return boxes".
※For details, please contact us.
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
