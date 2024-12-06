import Cover from "@/components/website/layout/Cover";
import { useTranslations } from "next-intl";

export default function AirFreight({ params }: { params: { lng: string } }) {
  const h = useTranslations('header');
  const t = useTranslations('air-freight');
  const b = useTranslations('branchs');
  return (
    <>
      <Cover
        noHeading={true}
        pageName={t('h1')}
        engName="Service"
        prevPage={{ pageName: h('home'), url: "/" }}
      />
      <div className="container px-2 xl:px-0 mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">{t('h1')}</h1>
        <div className="py-10">
          <div className="branchesTopic">
            <span>
              {t('section1.p')}
            </span>
          </div>

          <h2 className="pageTitle1">{t('h2')}</h2>
          <h3 className="pageTitle2">
            {t('h3')}
          </h3>

          <ul className="textNum">
            <li className="nNum">
              <div className="nNumText">{t('section2.title')}</div>
              <div className="nNumNum">01</div>
            </li>
            <li className="tText">{t('section2.p1')}</li>
          </ul>

          <div className="airSer">
            <div className="grid grid-cols-12">
              <div className="col-span-6 md:col-span-3">
                <a
                  className="fancyBox"
                  href="/img/air-freight-forwarding/006.jpg"
                  rel="groupimg"
                  title=""
                >
                  <img
                    src="/img/air-freight-forwarding/006.jpg"
                    className="img-responsive img-thumbnail"
                    alt="Air Freight Forwarding"
                  />
                </a>
              </div>
              <div className="col-span-6 md:col-span-3">
                <div className="airSerText">
                  TAFA
                  <br />
                  member certificate
                </div>
              </div>
              <div className="col-span-6 md:col-span-3">
                <a
                  className="fancyBox"
                  href="/img/air-freight-forwarding/007.jpg"
                  rel="groupimg"
                  title=""
                >
                  <img
                    src="/img/air-freight-forwarding/007.jpg"
                    className="img-responsive img-thumbnail"
                    alt="Air Freight Forwarding"
                  />
                </a>
              </div>
              <div className="col-span-6 md:col-span-3">
                <div className="airSerText">
                  IATA
                  <br />
                  Certificate of Registration
                </div>
              </div>
            </div>
          </div>

          <img
            src={t('section2.image1')}
            className="mx-auto"
            style={{ marginTop: "60px" }}
            alt="Air Freight Forwarding"
          />

          <div className="picRow1">
            <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-6">
                <img
                  src="/img/air-freight-forwarding/004.jpg"
                  className="img-responsive"
                  alt="Air Freight Forwarding"
                />
              </div>
              <div className="col-span-6">
                <div className="picTextBox">
                  <img
                    src="/img/air-freight-forwarding/003.jpg"
                    className="img-responsive"
                    alt="Air Freight Forwarding"
                  />
                  <div className="picText">写真提供：ANA CARGO</div>
                </div>
              </div>
              <div className="col-span-6">
                <img
                  src="/img/air-freight-forwarding/005.jpg"
                  className="img-responsive"
                  alt="Air Freight Forwarding"
                />
              </div>
              <div className="col-span-6">
                <img
                  src="/img/air-freight-forwarding/008.jpg"
                  className="img-responsive"
                  alt="Air Freight Forwarding"
                />
              </div>
            </div>
          </div>

          <div className="">
            <div className="grid grid-cols-12">
              <div className="col-span-2"></div>
              <div className="col-span-12 md:col-span-8 boxPhone1">
                <div>{t('section2.1')}</div>
                <div className="grid grid-cols-12">
                  <div className="col-span-12 md:col-span-6 pt-4">
                    <div className="boxPhone1Label">{t('section2.2')}</div>
                    <a className="ms-2" href="tel:+66-2-134-7112">+66-2-134-7112</a>
                  </div>
                  <div className="col-span-12 md:col-span-6 pt-4">
                    <div className="boxPhone1Label">{t('section2.3')}</div>
                    <a className="ms-2" href="tel:+66-2-134-7003">+66-2-134-7003~5</a>
                  </div>
                </div>
              </div>
              <div className="col-span-2"></div>
            </div>

          </div>

          <div className="handlingBox">
            <div className="handlingTitle">{b('title')}</div>
            <ul className="list-disc grid md:flex">
              <li className="ms-8 ps-0">{b('bangkok')}</li>
              <li className="ms-8 ps-0">{b('airport')}</li>
              <li className="ms-8 ps-0">{b('ayutthaya')}</li>
              <li className="ms-8 ps-0">{b('laem-chabang')}</li>
              <li className="ms-8 ps-0">{b('prachinburi')}</li>
              <li className="ms-8 ps-0">{b('chiang-mai')}</li>
            </ul>
            {/* <div className="handlingList">
              <table>
                <tbody>
                  <tr>
                    <td>・กรุงเทพมหานคร</td>
                    <td>・สนามบินสุวรรณภูมิ</td>
                    <td>・พระนครศรีอยุธยา</td>
                    <td>・แหลมฉบัง</td>
                    <td>・ปราจีนบุรี</td>
                    <td>・เชียงใหม่</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
