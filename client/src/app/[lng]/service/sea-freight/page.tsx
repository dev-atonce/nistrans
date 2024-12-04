import Cover from "@/components/website/layout/Cover";
import { useTranslations } from "next-intl";

export default function SeaFreight() {
  const t = useTranslations('sea-freight');
  const branchs = useTranslations('branchs');
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
          <div>
            <div>{t('section1.p')}</div>
            <div className="pageTitle1 mt-10">{t('h2')}</div>
            <div className="pageTitle2">
              {t('h3')}
            </div>

            <ul className="textNum">
              <li className="nNum">
                <div className="nNumText">{t('section2.title')}</div>
                <div className="nNumNum">01</div>
              </li>
              <li className="tText">{t('section2.p1')} </li>
            </ul>

            <ul className="textNum">
              <li className="nNum">
                <div className="nNumText">{t('section2.title')}</div>
                <div className="nNumNum">02</div>
              </li>
              <li className="tText">{t('section2.p2')}</li>
            </ul>

            <ul className="textNum">
              <li className="nNum">
                <div className="nNumText">{t('section2.title')}</div>
                <div className="nNumNum">03</div>
              </li>
              <li className="tText">{t('section2.p3')}
              </li>
            </ul>

            <div className="picRow1">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <img
                    src="/img/sea-freight-forwarding/002.jpg"
                    className="img-responsive"
                    alt="Sea Freight Forwarding"
                  />
                </div>
                <div className="col-span-6">
                  <img
                    src="/img/sea-freight-forwarding/003.jpg"
                    className="img-responsive"
                    alt="Sea Freight Forwarding"
                  />
                </div>
                <div className="col-span-6">
                  <img
                    src="/img/sea-freight-forwarding/004.jpg"
                    className="img-responsive"
                    alt="Sea Freight Forwarding"
                  />
                </div>
                <div className="col-span-6">
                  <img
                    src="/img/sea-freight-forwarding/005.jpg"
                    className="img-responsive"
                    alt="Sea Freight Forwarding"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="bg-blue-950 p-1">
                <div className="text-2xl text-white fw-bold text-center py-2">{t('section3.title')}</div>
                <div className="grid grid-cols-12 bg-white transportation-routes">
                    <div className="col-span-6 md:col-span-2 grid justify-center item">
                      <img src="/img/service/service-1.png" alt="ต้นทางจัดส่ง" />
                      <p className="text-center">{t('section3.step1')}</p>
                    </div>
                    <div className="col-span-6 md:col-span-2 grid justify-center item">
                      <img src="/img/service/service-2.png" alt="รับสินค้า" />
                      <p className="text-center">{t('section3.step2')}</p>
                    </div>
                    <div className="col-span-6 md:col-span-2 grid justify-center item">
                      <img src="/img/service/service-5.png" alt="คลังสินค้า" />
                      <p className="text-center">{t('section3.step3')}</p>
                    </div>
                    <div className="col-span-6 md:col-span-2 grid justify-center item">
                      <img src="/img/service/service-4.png" alt="ขนส่งทางทะเล" />
                      <p className="text-center">{t('section3.step4')}</p>
                    </div>
                    <div className="col-span-6 md:col-span-2 grid justify-center item">
                      <img src="/img/service/service-5.png" alt="คลังสินค้า" />
                      <p className="text-center">{t('section3.step5')}</p>
                    </div>
                    <div className="col-span-6 md:col-span-2 grid justify-center item">
                      <img src="/img/service/service-6.png" alt="ปลายทางจัดส่ง" />
                      <p className="text-center">{t('section3.step6')}</p>
                    </div>
                </div>

              </div>
            </div>
            <div>
              <div className="handlingBox">
                <div className="handlingTitle">{branchs('title')}</div>
                <ul className="list-disc grid md:flex">
                  <li className="ms-8 ps-0">{branchs('bangkok')}</li>
                  <li className="ms-8 ps-0">{branchs('ayutthaya')}</li>
                  <li className="ms-8 ps-0">{branchs('laem-chabang')}</li>
                  <li className="ms-8 ps-0">{branchs('prachinburi')}</li>
                  <li className="ms-8 ps-0">{branchs('chiang-mai')}</li>
                  <li className="ms-8 ps-0">{branchs('bangpakong')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
