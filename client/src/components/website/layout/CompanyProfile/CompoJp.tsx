export default function CompoJp() {
  return (
    <div className="container  px-2 mx-auto 2xl:px-20 pb-10 text-black">
      <p className="branchesTopic no-padding-r">
        Siam Nistrans (タイ日新)
        は、株式会社日新のタイ現地法人として1987年に設立されました。陸・海・空の
        国際・国内輸送、倉庫・輸出梱包、引越までを網羅する、タイにおける国際総合物流のパイオニアです。
        当社は、設立当初から自社通関を行っており、税関との EDI
        によるオンライン化も全ての通関部署で
        構築済みです。また、レムチャバン、アユタヤ、バンパコン、プラチンブリ、チェンマイに拠点を持ち、
        荷主様との連絡を密にし、あらゆるニーズにお応えすべく、経験豊かなスタッフによるきめ細かな
        サービスをモットーに、グローバル ロジスティクス サービス
        プロバイダーとして世界中にシームレスな サービスをご提供いたします。
      </p>
      <div>
        <div className="flex justify-between items-center">
          <div className="comInfoRow1">
            <ul>
              <li>商号</li>
              <li>Siam Nistrans Co., Ltd.</li>
            </ul>
            <ul>
              <li>住所</li>
              <li>
                15th Fl., 191/66, 68-69 CTI TOWER, Ratchadapisek Rd.,
                <br />
                Kwang Klongtoey, Khet Klongtoey, Bangkok 10110, Thailand
              </li>
            </ul>
            <ul>
              <li>電話</li>
              <li>(+66)-2-261-1080~5 または 261-5343~6</li>
            </ul>
            <ul>
              <li>FAX</li>
              <li>(+66)-2-261-1024 または 1059~60</li>
            </ul>
            <ul>
              <li>設立</li>
              <li>1987年9月30日</li>
            </ul>
            <ul>
              <li>資本金</li>
              <li>507,000,000 THB</li>
            </ul>
            <ul>
              <li>株主</li>
              <li>
                株式会社 日新, CTI Logistics Co., Ltd.,
                <br />
                SBCS Co., Ltd., SMBC Management Service Co., Ltd.
              </li>
            </ul>
            <ul>
              <li>従業員数</li>
              <li>750名（2023年現在）</li>
            </ul>
            <ul>
              <li>代表者</li>
              <li>八束 孝俊</li>
            </ul>
            <ul>
              <li>事業内容</li>
              <li>
                航空貨物・海上貨物取扱業、倉庫業、国内トラック輸送業、
                <br />
                コンテナ輸送業、通関業、梱包業（自動車部品、KD部品、
                <br />
                新機種などの車輌輸出梱包、緊急・出張梱包）、
                <br />
                機械設備搬入作業、展示会搬入・搬出作業など
              </li>
            </ul>
            {/* <ul>
              <li>品質スローガン</li>
              <li>
                お客様への気配り
                <br />
                定刻配送への気配り
                <br />
                改善への気配り
                <br />
                従業員への気配り
              </li>
            </ul>
            <ul>
              <li>ビジョン</li>
              <li>
                タイ国内、及び世界各国でグローバル・ロジスティクス・サービス・プロバイダーのトップを目指す
              </li>
            </ul>
            <ul>
              <li>ミッション</li>
              <li>
                1. 顧客情報管理の最適化
                <br />
                2. 最新のIT技術の導入
                <br />
                3. 社員の能力向上とチームワーク向上への取り組み
                <br />
                4. 国際水準に合致する業務品質の構築
              </li>
            </ul> */}
          </div>

          <div className="flex flex-col gap-2 ">
            <img
              src="/img/about/001.jpg"
              className="hidden md:block"
              alt="Company Profile 1"
            />
            <img
              src="/img/about/002.jpg"
              className="hidden md:block"
              alt="Company Profile 2"
            />
          </div>
        </div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/file/SIAM_NISTRANS_Catalog_Landscape.pdf"
          className="homeLinkTrack"
        >
          <span>会 社 案 内</span>
        </a>

        <div className="my-8" style={{ height: "80px" }}></div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7751.533690500027!2d100.560028!3d13.732561!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf788e6b9b53e4b3e!2sSiam%20Nistrans%20Co.%2CLTD.!5e0!3m2!1sja!2sth!4v1570441489603!5m2!1sja!2sth"
          width="100%"
          height="480"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          title="Siam Nistrans Location"
        ></iframe>

        <div className="container  px-2 mt-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-3">
              <img
                src="/img/about/003.jpg"
                className="img-responsive"
                alt="Company Profile 3"
              />
            </div>
            <div className="col-span-12 md:col-span-3">
              <img
                src="/img/about/004.jpg"
                className="img-responsive"
                alt="Company Profile 4"
              />
            </div>
            <div className="col-span-12 md:col-span-3">
              <img
                src="/img/about/005.jpg"
                className="img-responsive"
                alt="Company Profile 5"
              />
            </div>
            <div className="col-span-12 md:col-span-3">
              <img
                src="/img/about/006.jpg"
                className="img-responsive"
                alt="Company Profile 6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
