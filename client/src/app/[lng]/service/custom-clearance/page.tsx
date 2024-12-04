import Cover from "@/components/website/layout/Cover";
import { useTranslations } from "next-intl";

export default function Packing() {
  const t = useTranslations('customs-clearance');
  const b = useTranslations('branchs');
  return (
    <>
      <Cover
        noHeading={true}
        pageName="บริการของเรา"
        engName="Service"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container px-2 xl:px-0 mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">{t('h1')}</h1>
        <div className="py-10">
          <div className="branchesTopic" style={{ marginBottom: "70px", paddingRight: "0" }}>{t('section1.p')}</div>
          <ul className="textNum">
            <li className="nNum">
              <div className="nNumText">{t('section1.feature.title')}</div>
              <div className="nNumNum">01</div>
            </li>
            <li className="tText">{t('section1.feature.h')}</li>
          </ul>

          <div className="cusCleRow4">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-9 relative">
                <span>{t('section1.feature.p')}</span>
                <div className="hidden md:block absolute bottom-0 right-0 underline">{t('section1.feature.img-title')}</div>
              </div>
              <div className="col-span-3 md:hidden"></div>
              <div className="col-span-6 md:col-span-2 mt-6 md:mt-0">
                <a
                  className="fancyBox"
                  href="/img/service/customs-clearance/003.jpg"
                  rel="groupimg"
                  title=""
                >
                  <img
                    src="/img/service/customs-clearance/003.jpg"
                    className="img-responsive img-thumbnail"
                    alt="Customs Clearance"
                  />
                </a>
                <div className="md:hidden text-center text-sm">{t('section1.feature.img-title')}</div>
              </div>
            </div>
          </div>

          <div className="pageTitle1">{t('section2.title')}</div>
          <div className="grid grid-cols-12 gap-4 ">
            <div className="col-span-12 flex justify-center mt-10">
              
              <div className="relative z-20">
                <img
                  src="/img/service/customs-clearance/001.jpg"
                  className=""
                  alt="Customs Clearance"
                />
                <div className="absolute top-1 ms-34 md:ms-80 z-100">
                  <h5 className="text-[#1c2f50] text-sm md:text-2xl md:my-2 md:text-normal">● {t('section2.1.1')}</h5>
                  <h5 className="text-[#1c2f50] text-sm md:text-2xl md:my-2 md:text-normal">● {t('section2.1.2')}</h5>
                  <h5 className="text-[#1c2f50] text-sm md:text-2xl md:my-2 md:text-normal">● {t('section2.1.3')}</h5>
                </div>
              </div>
            </div>
            <div className="col-span-12 flex justify-center mt-10">
              <div className="cusCleRow2">
                <img
                  src="/img/service/customs-clearance/002.jpg"
                  className="img-responsive"
                  alt="Customs Clearance"
                />
                <div className="h-full text-sm md:text-md xl:text-2xl top-0 ms-10 xl:ms-26 absolute text-white p-2 flex justify-center items-center">
                  {t('section2.2')}
                </div>
              </div>

            </div>
            
          </div>


          <div className="cusCleRow3">
            <div className="grid grid-cols-12 gap-6 mt-10">
              <div className="col-span-2"></div>
              <div className="col-span-12 md:col-span-4">
                <div className="cusCleRow3Title">{t('section2.3.export.title')}</div>
                <div className="cusCleRow3Label">
                  <span>{t('section2.3.export.1')}</span>
                  <span>{t('section2.3.export.2')}</span>
                  <span>{t('section2.3.export.3')}</span>
                  <span>{t('section2.3.export.4')}</span>
                  <span>{t('section2.3.export.5')}</span>
                  <span>{t('section2.3.export.6')}</span>
                  <span>{t('section2.3.export.7')}</span>
                  {t('section2.3.export.other')}
                </div>
                <div className="cusCleRow3Text">{t('section2.3.export.p')}</div>
              </div>

              <div className="col-span-12 md:col-span-4">
                <div className="cusCleRow3Title">{t('section2.3.import.title')}</div>
                <div className="cusCleRow3Label">
                  <span>{t('section2.3.import.1')}</span>
                  <span>{t('section2.3.import.2')}</span>
                  <span>{t('section2.3.import.3')}</span>
                  <span>{t('section2.3.import.4')}</span>
                  <span>{t('section2.3.import.5')}</span>
                  <span>{t('section2.3.import.6')}</span>
                  <span>{t('section2.3.import.7')}</span>
                  {t('section2.3.import.other')}
                </div>
                <div className="cusCleRow3Text">{t('section2.3.import.p')}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="handlingBox">
                <div className="handlingTitle">{b('title')}</div>
                <ul className="list-disc grid md:flex">
                  <li className="ms-8 ps-0">{b('bangpakong')}</li>
                  <li className="ms-8 ps-0">{b('laem-chabang')}</li>
                  <li className="ms-8 ps-0">{b('airport')}</li>
                  <li className="ms-8 ps-0">{b('chiang-mai')}</li>
                  <li className="ms-8 ps-0">{b('ayutthaya')}</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
