import Cover from "@/components/website/layout/Cover";
import { useTranslations } from "next-intl";

export default function Warehouse() {
  const t = useTranslations('warehouse');
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
          <div>
            <div className="branchesTopic">{t('section1.p')}</div>
            <h2 className="pageTitle1">{t('h2')}</h2>
            <div className="pageTitle2">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-1"></div>
                <div className="col-span-12 md:col-span-3">
                  <a
                    className="fancyBox"
                    href="/img/service/warehouse/014.jpg"
                    rel="groupimg"
                    title=""
                  >
                    <img
                      src="/img/service/warehouse/014.jpg"
                      className="img-thumbnail"
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
                    {t('section2.permit')}
                  </div>
                </div>
                <div
                  className="col-span-12 md:col-span-7"
                  style={{
                    display: "inline-block",
                    wordBreak: "keep-all",
                    padding: "10px 30px 0 0",
                  }}
                >
                  {t('section2.p')}
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <ul className="textNum">
              <li className="nNum">
                <div className="nNumText">{t('section2.title')}</div>
                <div className="nNumNum">01</div>
              </li>
              <li className="tText">{t('section2.1.1')}
              </li>
            </ul>
            <div style={{ width: "270px", margin: "0 auto" }}>
              <a className="pageBtnMore" href="scm-solutions.php">
                <div className="pageBtnMoreBg"></div>
                <div className="pageBtnMoreHover"></div>
                <div className="pageBtnMoreText">{t('section2.1.2')}
                </div>
              </a>
            </div>
            <div className="picRow1 picRow1-1">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-10 md:col-span-4">
                  <img
                    src="/img/service/warehouse/001.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-10 md:col-span-4">
                  <img
                    src="/img/service/warehouse/002.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-10 md:col-span-4">
                  <img
                    src="/img/service/warehouse/003.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
              </div>
            </div>

            <div className="pageTitle1">{t('section2.1.3')}</div>
            <div className="mt-10 mb-20">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-10 md:col-span-3 relative flex justify-center">
                  <img
                    src="/img/service/warehouse/004.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                  <div className="absolute top-4 text-md p-2 m-0 text-white bg-[#1b304fcc]">{t('section2.1.4')}</div>
                </div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-10 md:col-span-3 relative flex justify-center">
                  <img
                    src="/img/service/warehouse/005.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                  <div className="absolute top-4 text-md p-2 m-0 text-white bg-[#1b304fcc]">{t('section2.1.5')}</div>
                </div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-10 md:col-span-3 relative flex justify-center">
                  <img
                    src="/img/service/warehouse/006.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                  <div className="absolute top-4 text-md p-2 m-0 text-white bg-[#1b304fcc]">
                  {t('section2.1.6')}
                  </div>
                </div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-10 md:col-span-3 relative flex justify-center">
                  <img
                    src="/img/service/warehouse/007.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                  <div className="absolute top-4 text-md p-2 m-0 text-white bg-[#1b304fcc]">{t('section2.1.7')}</div>
                </div>
              </div>
            </div>
            <div className="pageTitle1">{t('section2.1.8')}</div>
            <div className="dwhRow">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-2"></div>
                <div className="col-span-8 flex justify-center">
                  <a className="fancyBox" rel="groupimg" href="/img/service/warehouse/016.jpg">
                    <img src="/img/service/warehouse/016.jpg" className="img-responsive" alt="Warehouse" />
                  </a>
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-1"></div>
                <div className="col-span-10">
                  <div className="dwhText1 no-margin-t">{t('section2.1.9')}</div>
                  <div className="dwhText2">
                  {t('section2.1.10')}
                    <a className="dwhMap" target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/7qDpaGqx3gKx26298"></a>
                    <a className="dwhMapPdf" target="_blank" rel="noopener noreferrer" href="../file/SIAM_NISTRANS_Map.pdf"></a>
                  </div>
                  <div className="dwhText1">{t('section2.1.13')}</div>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                      <a className="fancyBox" href="/img/service/warehouse/019.jpg" title="">
                        <img src="/img/service/warehouse/019.jpg" className="img-responsive" alt="" />
                      </a>
                    </div>
                    <div className="col-span-6">
                      <a className="fancyBox" href="/img/service/warehouse/020.jpg" title="">
                        <img src="/img/service/warehouse/020.jpg" className="img-responsive" alt=""/>
                      </a>
                    </div>
                
                  </div>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-12 md:col-span-5">
                  <a className="fancyBox" href="/img/service/warehouse/017.jpg" title="">
                    <img src="/img/service/warehouse/017.jpg" className="img-responsive" alt="" />
                  </a>
                  <div className="dwhText1">{t('section2.1.14')}</div>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <a className="fancyBox" href="/img/service/warehouse/018.jpg" rel="groupimg" title="">
                    <img src="/img/service/warehouse/018.jpg" className="img-responsive" alt=""/>
                  </a>
                  <div className="dwhText1">{t('section2.1.15')}</div>
                </div>
              </div>
            </div>

            <div className="pageTitle1">{t('section2.1.16')}</div>
            <div className="my-10">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">{t('section2.1.17')}
                </div>
                <div className="col-span-4">
                  <img
                    src="/img/service/warehouse/022.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
                <div className="col-span-4">
                  <img
                    src="/img/service/warehouse/023.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
                <div className="col-span-4">
                  <img
                    src="/img/service/warehouse/024.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
              </div>
            </div>
          

            <div className="pageTitle1 mt-20">{t('section2.1.18')}</div>
            <div className="grid grid-cols-12 gap-4 mt-10 mb-20">
              <div className="col-span-12">{t('section2.1.19')}
              </div>
              <div className="col-span-4">
                <img
                  src="/img/service/warehouse/025.jpg"
                  className="img-responsive"
                  alt="Warehouse"
                />
              </div>
              <div className="col-span-4">
                <img
                  src="/img/service/warehouse/026.jpg"
                  className="img-responsive"
                  alt="Warehouse"
                />
              </div>
              <div className="col-span-4">
                <img
                  src="/img/service/warehouse/027.jpg"
                  className="img-responsive"
                  alt="Warehouse"
                />
              </div>
            </div>

            {/* Page Title 1 - SIAM NISTRANS Warehouses */}
            <div className="pageTitle1">{t('section2.1.20')}</div>

            {/* Warehouse Map Row */}
            <div className="whMapRow">
              <div className="grid grid-cols-12 gap-4">
                {/* Warehouse Map */}
                <div className="col-span-1 hidden xl:block"></div>
                <div className="col-span-12 md:col-span-6 xl:col-span-5">
                  <div className="whMap">
                    <img
                      src="/img/service/warehouse/map.jpg"
                      className="img-responsive w-full"
                      alt="Warehouse"
                    />
                    <div className="whText3" style={{ marginTop: "5px" }}>
                      {t('section2.1.25')}
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 xl:col-span-5">
                  <div className="whText1">{t('section2.1.21')}</div>
                  <div className="tab-content">
                    <div className=" active in" id="whMap1">
                      <div className="branchesTitle">
                        {t('section2.address.1.title')}
                        <a
                          className="absolute right-0 top-1 h-6 text-white bg-[#1c2e50] text-sm flex justify-center p-1 hover:bg-orange-400"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.co.th/maps/place/Siam+Nistrans+Co.Ltd./@14.3541586,100.6684489,15.75z/data=!4m5!3m4!1s0x311d8bb132ee5a35:0xa1e55acf84d66d4e!8m2!3d14.3528496!4d100.6723384?hl=en"
                        >
                          {t('section2.1.23')}
                          <svg xmlns="http://www.w3.org/2000/svg" className="ms-1" fill="#FFFFFF" width="14px" height="14px" viewBox="0 0 32 32" version="1.1">
                            <title>pin</title>
                            <path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"/>
                          </svg>
                        </a>
                      </div>
                      <div className="whText3" style={{whiteSpace:'pre'}}>
                        {t('section2.address.1.addr')}
                      </div>
                    </div>

                    <div className="" id="whMap2">
                      <div className="branchesTitle">
                      {t('section2.address.2.title')}
                        <a
                          className="absolute right-0 top-1 h-6 text-white bg-[#1c2e50] text-sm flex justify-center p-1 hover:bg-orange-400"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.co.th/maps/place/13%C2%B033'55.4%22N+100%C2%B056'05.5%22E/@13.5659881,100.9367314,16z/data=!4m5!3m4!1s0x0:0x0!8m2!3d13.5653889!4d100.9348611?hl=en"
                        >
                          {t('section2.1.23')}
                          <svg xmlns="http://www.w3.org/2000/svg" className="ms-1" fill="#FFFFFF" width="14px" height="14px" viewBox="0 0 32 32" version="1.1">
                            <title>pin</title>
                            <path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"/>
                          </svg>
                        </a>
                      </div>
                      <div className="whText3" style={{whiteSpace:'pre'}}>{t('section2.address.2.addr')}</div>
                    </div>

                    <div className="" id="whMap3">
                      <div className="branchesTitle">
                      {t('section2.address.3.title')}
                        <a
                          className="absolute right-0 top-1 h-6 text-white bg-[#1c2e50] text-sm flex justify-center p-1 hover:bg-orange-400"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.co.th/maps/place/Siam+Nistrans+Company+Limited/@13.5535049,100.9557077,17z/data=!3m1!4b1!4m5!3m4!1s0x311d47152a59de19:0x42658e940b1f071c!8m2!3d13.5535049!4d100.9579017?hl=en"
                        >
                          {t('section2.1.23')}
                          <svg xmlns="http://www.w3.org/2000/svg" className="ms-1" fill="#FFFFFF" width="14px" height="14px" viewBox="0 0 32 32" version="1.1">
                            <title>pin</title>
                            <path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"/>
                          </svg>
                        </a>
                      </div>
                      <div className="whText3" style={{whiteSpace:'pre'}}>{t('section2.address.3.addr')}</div>
                    </div>

                    <div className="" id="whMap4">
                      <div className="branchesTitle">
                      {t('section2.address.4.title')}
                        <a
                          className="absolute right-0 top-1 h-6 text-white bg-[#1c2e50] text-sm flex justify-center p-1 hover:bg-orange-400"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.com/maps/place/Siam+Nistrans+Co.,+Ltd.+(Prachinburi+Branch)/@13.8418361,101.5166113,15z/data=!4m5!3m4!1s0x311cfbe140032eff:0xbf67690823fe6336!8m2!3d13.8399378!4d101.5227106?hl=en"
                        >
                          {t('section2.1.23')}
                          <svg xmlns="http://www.w3.org/2000/svg" className="ms-1" fill="#FFFFFF" width="14px" height="14px" viewBox="0 0 32 32" version="1.1">
                            <title>pin</title>
                            <path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"/>
                          </svg>
                        </a>
                      </div>
                      <div className="whText3" style={{whiteSpace:'pre'}}>{t('section2.address.4.addr')}</div>

                    </div>

                    {/* Warehouse 6 */}
                    <div className="" id="whMap6">
                      <div className="branchesTitle">
                      {t('section2.address.5.title')}
                        <a
                          className="absolute right-0 top-1 h-6 text-white bg-[#1c2e50] text-sm flex justify-center p-1 hover:bg-orange-400"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.co.th/maps/place/Siam+Nistrans+Co.,LTD.+(Branch+5)/@13.1242826,100.9806238,17z/data=!3m1!4b1!4m5!3m4!1s0x3102c80041147bab:0xab586e27f921ce73!8m2!3d13.1242826!4d100.9823652?hl=en"
                        >
                          {t('section2.1.23')}
                          <svg xmlns="http://www.w3.org/2000/svg" className="ms-1" fill="#FFFFFF" width="14px" height="14px" viewBox="0 0 32 32" version="1.1">
                            <title>pin</title>
                            <path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"/>
                          </svg>
                        </a>
                      </div>
                      <div className="whText3" style={{whiteSpace:'pre'}}>{t('section2.address.5.addr')}</div>

                    </div>

                    {/* Warehouse 7 */}
                    <div className="" id="whMap7">
                      <div className="branchesTitle">
                      {t('section2.address.6.title')}
                        <a
                          className="absolute right-0 top-1 h-6 text-white bg-[#1c2e50] text-sm flex justify-center p-1 hover:bg-orange-400"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.com/maps/place/Siam+Nistrans+Lamphun/@18.608326,99.0417674,19z/data=!3m1!4b1!4m12!1m6!3m5!1s0x30da2d3c679c6357:0xad3774ccf93dafd2!2sCTP+DC+Warehouse+Factory!8m2!3d18.6084051!4d99.0425365!3m4!1s0x30da2dd23428755d:0x6159f2cf1e7cd71c!8m2!3d18.608326!4d99.0423146?hl=en"
                        >
                          {t('section2.1.23')}
                          <svg xmlns="http://www.w3.org/2000/svg" className="ms-1" fill="#FFFFFF" width="14px" height="14px" viewBox="0 0 32 32" version="1.1">
                            <title>pin</title>
                            <path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"/>
                          </svg>
                        </a>
                      </div>
                      <div className="whText3" style={{whiteSpace:'pre'}}>{t('section2.address.6.addr')}</div>

                    </div>

                    {/* Warehouse 8 */}
                    <div>
                      <div className="branchesTitle">
                      {t('section2.address.7.title')}
                        <a
                          className="absolute right-0 top-1 h-6 text-white bg-[#1c2e50] text-sm flex justify-center p-1 hover:bg-orange-400"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://goo.gl/maps/qHAf9knNkXaEj95R6"
                        >
                          {t('section2.1.23')}
                          <svg xmlns="http://www.w3.org/2000/svg" className="ms-1" fill="#FFFFFF" width="14px" height="14px" viewBox="0 0 32 32" version="1.1">
                            <title>pin</title>
                            <path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"/>
                          </svg>
                        </a>
                      </div>
                      <div className="whText3" style={{whiteSpace:'pre'}}>{t('section2.address.7.addr')}</div>
                      <img src="/img/service/warehouse/021.jpg" title="" alt="" />
                      
                    </div>

                  </div>
                </div>
              </div>

              
            </div>

            {/* Handling Box - Branches */}
            <div className="handlingBox">
              <div className="handlingTitle">{b('title')}</div>
              <ul className="list-disc grid md:flex">
                <li className="ms-8 ps-0">{b('ayutthaya')}</li>
                <li className="ms-8 ps-0">{b('bangpakong')}</li>
                <li className="ms-8 ps-0">{b('laem-chabang')}</li>
                <li className="ms-8 ps-0">{b('prachinburi')}</li>
                <li className="ms-8 ps-0">{b('chiang-mai')}</li>
                <li className="ms-8 ps-0">{b('bangna')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>);
}
