"use client";

import Cover from "@/components/website/layout/Cover";
import { useTranslations } from "next-intl";
import BtnShadow from "@/components/website/atom/button/BtnShadow";
import Modal from "@/components/website/atom/modal/Modal";
import { useState } from "react";
import { Link } from "@/i18n/routing";

export default function Haco() {
  const m = useTranslations("modal");
  const h = useTranslations("header");
  const t = useTranslations("haco-lab");
  const b = useTranslations("branchs");

  const [showModal, setModal] = useState<Boolean>(false);
  const [typeModal, setType] = useState<string>("");
  const [titleModal, setTitle] = useState<string>("");
  const [law, setLaw] = useState<string>("");

  const setModalHandler = (action: any, law: any) => {
    setModal(!showModal);
    setType(action);
    setLaw(law);
    setTitle(law == "jp" ? `${m("law.jp.title")}` : `${m("law.th.title")}`);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <Cover
        noHeading={true}
        pageName={t("h1")}
        engName="Service"
        prevPage={{ pageName: h("home"), url: "/" }}
        image="/img/service/haco-lab/banner.jpg"
      />
      <div className="container px-2 md:px-0 mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">{t("h1")}</h1>
        <div className="py-10">
          <div>
            <div className="branchesTopic no-margin-b">{t("p")}</div>

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

            <div className="pageTitle1">{t("h2")}</div>

            <div className="grid grid-cols-12">
              <div className="col-span-9">
                <div className="bg-[#1c2f50] text-white text-xl p-2 text-center my-8">
                  {t("section1.1.1")}
                </div>
              </div>
              <div className="col-span-3"></div>
            </div>
            <div className="hidden md:block">
              <ul className="hacoRow1">
                <li>
                  <img src="/img/service/haco-lab/001.jpg" alt="HACO Lab." />
                  <div>
                    <p>{t("section1.1.1-1")}</p>
                    <div style={{ fontSize: "70%", lineHeight: "140%" }}>
                      ※{t("section1.1.1-1-1")}
                    </div>
                  </div>
                </li>
                <li>
                  <img src="/img/service/haco-lab/arrowR-2.jpg" alt="Arrow" />
                </li>
                <li>
                  <img src="/img/service/haco-lab/002.jpg" alt="HACO Lab." />
                  <div>{t("section1.1.1-2")}</div>
                </li>
                <li>
                  <img src="/img/service/haco-lab/arrowR-2.jpg" alt="Arrow" />
                </li>
                <li>
                  <img src="/img/service/haco-lab/003.jpg" alt="HACO Lab." />
                  <div>{t("section1.1.1-3")}</div>
                </li>
                <li style={{ paddingTop: "130px" }}>
                  <img src="/img/service/haco-lab/arrowR-3.jpg" alt="Arrow" />
                </li>
                <li style={{ position: "relative" }}>
                  <div style={{ position: "absolute", marginTop: "215px" }}>
                    <img src="/img/service/haco-lab/004.jpg" alt="HACO Lab." />
                    <div>{t("section1.1.3")}</div>
                  </div>
                </li>
              </ul>
              <div className="grid grid-cols-12">
                <div className="col-span-9">
                  <div className="bg-[#1c2f50] text-white text-xl p-2 text-center my-8">
                    <p>{t("section1.1.2")}</p>
                  </div>
                  <p className="text-xl mb-4">{t("section1.1.2-p")}</p>
                </div>
                <div className="col-span-3"></div>
              </div>
              <ul className="hacoRow1">
                <li>
                  <img src="/img/service/haco-lab/008.jpg" alt="HACO Lab." />
                  <div className="hacoRow1Text3">{t("section1.1.2-1")}</div>
                  <div>{t("section1.1.2-1-p")}</div>
                </li>

                <li>
                  <img src="/img/service/haco-lab/arrowR-2.jpg" alt="Arrow" />
                </li>

                <li>
                  <img src="/img/service/haco-lab/009.jpg" alt="HACO Lab." />
                  <div className="hacoRow1Text3">{t("section1.1.2-2")}</div>
                  <div>{t("section1.1.2-2-p")}</div>
                </li>
                <li>&nbsp;</li>
                <li>
                  <img
                    src="/img/service/haco-lab/010.jpg"
                    style={{ marginLeft: "-30px" }}
                    alt="HACO Lab."
                  />
                  <div>{t("section1.1.2-3")}</div>
                </li>
                <li style={{ paddingTop: "0" }}>
                  <img src="/img/service/haco-lab/arrowR-4.jpg" alt="Arrow" />
                </li>
                <li>&nbsp;</li>
              </ul>
            </div>

            <div className="grid grid-cols-12 md:hidden">
              <div className="col-span-12">
                <img src="/img/service/haco-lab/001.jpg" alt="HACO Lab." />
                <div>
                  <p>{t("section1.1.1-1")}</p>
                  <div className="text-sm">※{t("section1.1.1-1-1")}</div>
                  <div className="w-full flex justify-center">
                    <img
                      src="/img/service/haco-lab/arrowR-2.jpg"
                      alt="Arrow"
                      className="rotate-90 mb-4"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12">
                <img src="/img/service/haco-lab/002.jpg" alt="HACO Lab." />
                <div>{t("section1.1.1-2")}</div>
                <div className="w-full flex justify-center">
                  <img
                    src="/img/service/haco-lab/arrowR-2.jpg"
                    alt="Arrow"
                    className="rotate-90 mb-4"
                  />
                </div>
              </div>
              <div className="col-span-12">
                <img src="/img/service/haco-lab/003.jpg" alt="HACO Lab." />
                <div>{t("section1.1.1-3")}</div>
                <div className="w-full flex justify-center">
                  <img
                    src="/img/service/haco-lab/arrowR-2.jpg"
                    alt="Arrow"
                    className="rotate-90 mb-4"
                  />
                </div>
              </div>
              <div className="col-span-12">
                <img src="/img/service/haco-lab/004.jpg" alt="HACO Lab." />
                <div>{t("section1.1.3")}</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:hidden">
              <div className="bg-[#1c2f50] text-white text-xl p-2 text-center my-8">
                <p>{t("section1.1.2")}</p>
              </div>
              <p className="text-xl mb-4">{t("section1.1.2-p")}</p>
            </div>
            <div className="grid grid-cols-12 gap-4 md:hidden">
              <div className="col-span-12">
                <div className="relative flex justify-center">
                  <img src="/img/service/haco-lab/008.jpg" alt="HACO Lab." />
                  <div className="absolute top-2 text-white text-xl">
                    {t("section1.1.2-1")}
                  </div>
                </div>
                <div className="my-4 text-center">{t("section1.1.2-1-p")}</div>
                <div className="w-full flex justify-center">
                  <img
                    src="/img/service/haco-lab/arrowR-2.jpg"
                    alt="Arrow"
                    className="rotate-90"
                  />
                </div>
              </div>
              <div className="col-span-12">
                <div className="relative flex justify-center">
                  <img src="/img/service/haco-lab/009.jpg" alt="HACO Lab." />
                  <div className="absolute top-2 text-white text-xl">
                    {t("section1.1.2-2")}
                  </div>
                </div>
                <div className="my-4 text-center">{t("section1.1.2-2-p")}</div>
                <div className="w-full flex justify-center">
                  <img
                    src="/img/service/haco-lab/arrowR-2.jpg"
                    alt="Arrow"
                    className="rotate-90"
                  />
                </div>
              </div>
              <div className="col-span-12">
                <div className="w-full flex justify-center">
                  <img
                    src="/img/service/haco-lab/010.jpg"
                    style={{ marginLeft: "-30px" }}
                    alt="HACO Lab."
                  />
                </div>
                <div className="my-4 text-center">{t("section1.1.2-3")}</div>
                <div className="w-full flex justify-center">
                  <img
                    src="/img/service/haco-lab/arrowR-2.jpg"
                    alt="Arrow"
                    className="rotate-90"
                  />
                </div>
              </div>
              <div className="col-span-12">
                <img src="/img/service/haco-lab/004.jpg" alt="HACO Lab." />
                <div>{t("section1.1.3")}</div>
              </div>
            </div>
            <div className="hacoRow2">
              <ul>
                <li>
                  <img
                    src="/img/service/haco-lab/box-icon.png"
                    alt="HACO Lab."
                  />
                </li>
                <li>{t("section1.1.other")}</li>
              </ul>
            </div>
            <div className="pageTitle1">{t("section2.title")}</div>
            <div className="hacoRow3">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-3 p-4">
                  <div className="flex items-center justify-center">
                    <img
                      src="/img/service/haco-lab/011.jpg"
                      className="img-responsive img-center"
                      alt="HACO Lab."
                    />
                  </div>
                  <div className="hacoRow3Text1">
                    {t("section2.1")}
                    <br />
                    <div style={{ fontSize: "70%" }}>※{t("section2.1-p")}</div>
                  </div>
                  <div className="hacoRow3Btn">
                    <div className="flex justify-between gap-2">
                      <div className="w-[50%]">
                        <BtnShadow
                          action="law"
                          law="jp"
                          text={t("section2.button-jp")}
                          color={`blue-950`}
                          setModalHandler={setModalHandler}
                        />
                      </div>
                      <div className="w-[50%]">
                        <BtnShadow
                          action="law"
                          law="th"
                          text={t("section2.button-th")}
                          color={`blue-950`}
                          setModalHandler={setModalHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3 p-4">
                  <div className="flex items-center justify-center">
                    <img
                      src="/img/service/haco-lab/005.jpg"
                      className="img-responsive img-center"
                      alt="HACO Lab."
                    />
                  </div>
                  <div className="hacoRow3Text1">{t("section2.2")}</div>
                </div>
                <div className="col-span-12 md:col-span-3 p-4">
                  <div className="flex items-center justify-center">
                    <img
                      src="/img/service/haco-lab/006.jpg"
                      className="img-responsive img-center"
                      alt="HACO Lab."
                    />
                  </div>
                  <div className="hacoRow3Text1">{t("section2.3")}</div>
                </div>
                <div className="col-span-12 md:col-span-3 p-4">
                  <div className="flex items-center justify-center">
                    <img
                      src="/img/service/haco-lab/007.jpg"
                      className="img-responsive img-center"
                      alt="HACO Lab."
                    />
                  </div>
                  <div className="hacoRow3Text1">{t("section2.4")}</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-start-4"></div>
              <div className="col-span-12 md:col-span-4">
                <BtnShadow
                  href="contact"
                  text={t("section2.click-to-contact")}
                  color={`blue-950`}
                />
              </div>

              {/* <Link className="pageBtnMore" href="#">
                <div className="pageBtnMoreBg"></div>
                <div className="pageBtnMoreHover"></div>
                <div className="pageBtnMoreText">{t('section2.click-to-contact')}</div>
              </Link> */}
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="handlingBox">
                  <div className="handlingTitle">{b("title")}</div>
                  <ul className="list-disc grid md:flex">
                    <li className="ms-8 ps-0">{b("ayutthaya")}</li>
                    <li className="ms-8 ps-0">{b("bangpakong")}</li>
                    <li className="ms-8 ps-0">{b("laem-chabang")}</li>
                    <li className="ms-8 ps-0">{b("prachinburi")}</li>
                    <li className="ms-8 ps-0">{b("chiang-mai")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          title={titleModal}
          action={typeModal}
          law={law}
          closeModal={closeModal}
        />
      )}
    </>
  );
}
