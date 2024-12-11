const AsiaBranches = ({ lng }: any) => {
  const content = {
    th: {
      th: "ประเทศไทย",
      sg: "สิงคโปร์",
      ma: "มาเลเซีย",
      ph: "ฟิลิปปินส์",
      in: "อินเดีย",
      indo: "อินโดนีเซีย",
      vn: "เวียดนาม",
      la: "สปป.ลาว",
      my: "พม่า",
    },
    en: {
      th: "Thailand",
      sg: "Singapore",
      ma: "Malaysia",
      ph: "Philippines",
      in: "India",
      indo: "Indonesia",
      vn: "Vietnam",
      la: "Lao P. D. R.",
      my: "Myanmar",
    },
    jp: {
      th: "タイ",
      sg: "シンガポール",
      ma: "マレーシア",
      ph: "フィリピン",
      in: "インド",
      indo: "インドネシア",
      vn: "ベトナム",
      la: "ラオス",
      my: "ミャンマー",
    },
  };
  return (
    <>
      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1"> {content[lng]["th"]}</div>

        <div className="branchesTitle">
          SIAM NISTRANS CO., LTD.
          <a
            className="branchesLink"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.th.nissin-asia.com/en/"
          ></a>
        </div>

        <div className="branchesText">
          15th Fl., 191/66, 68-69 CTI TOWER, Ratchadapisek Rd., Kwang Klongtoey,
          Khet Klongtoey, Bangkok 10110 THAILAND
          <br />
          TEL : 66-2-261-1080~5, 66-2-261-5343~6 / FAX : 66-2-261-1024,
          66-2-261-1059~60
        </div>

        <div className="branchesTitle">
          BEST COLD CHAIN CO., LTD.
          <a
            className="branchesLink"
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.thai-bcc.com"
          ></a>
        </div>

        <div className="branchesText">
          131 Moo 1, Phahonyothin Road, km74, Sanubtueb, Wang Noi, Phara Nakhon
          Si Ayutthaya 13170, Thailand
          <br />
          TEL : 66(0)3-595-8526 / FAX : 66(0)3-574-5053
        </div>

        <div className="branchesTitle">
          SIAM NISSIN & SEO LOGISTICS CO., LTD.
          <a
            className="branchesLink"
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.siamnissin-seo.com/en/index.html"
          ></a>
        </div>

        <div className="branchesText">
          700/859 Moo 1, Amata Nakorn Industrial Estate, T.Panthong, A.Panthong,
          Chonburi 20160 Thailand
          <br />
          TEL : 66-3-818-5051 / FAX : 66-3-818-5149
        </div>

        <div className="branchesTitle">Asia Headquarters</div>

        <div className="branchesText">
          11th Fl, CTI Tower, 191/82 Ratchadapisek Rd, Klongtoey, Bangkok 10110,
          Thailand
          <br />
          TEL : 66-2261-5077 / FAX : 66-2261-5076
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1"> {content[lng]["sg"]}</div>

        <div className="branchesTitle">NISSIN TRANSPORT (S) PTE. LTD.</div>

        <div className="branchesText">
          No.50, Tuas Avenue 9, Singapore 639192
          <br />
          TEL : 65-6861-2453 / FAX : 65-6861-2354
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1"> {content[lng]["ma"]}</div>

        <div className="branchesTitle">NISTRANS (M) SDN. BHD.</div>

        <div className="branchesText">
          No.5 Jalan Astaka U8/83, Seksyen U8, 40150 Shah Alam Selangor Darul
          Ehsan, Malaysia
          <br />
          TEL : 60-3-2726-2428 / FAX : 60-3-2726-2420
        </div>

        <div className="branchesTitle">
          NISSIN INTERNATIONAL LOGISTICS (M) SDN. BHD.
        </div>

        <div className="branchesText">
          No.5 Jalan Astaka U8/83, Seksyen U8, 40150 Shah Alam Selangor Darul
          Ehsan, Malaysia
          <br />
          TEL : 60-3-2726-2428 / FAX : 60-3-2726-2420
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1"> {content[lng]["ph"]}</div>

        <div className="branchesTitle">
          NISSIN TRANSPORT PHILIPPINES CORPORATION
        </div>

        <div className="branchesText">
          No.14 Cargo Village Complex Ninoy Aquino Avenue Near Cor.
          Multinational Ave. Sto. Nino, Paranaque City, Philippines
          <br />
          TEL : 63-2-851-5621 / FAX : 63-2-851-5637
        </div>

        <div className="branchesTitle">ANCHOR LOGISTICS FACILITIES CORP.</div>

        <div className="branchesText">
          No.23, Brixton Street, Pasig City, Philippines
          <br />
          TEL : 63-2-851-5621
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1"> {content[lng]["in"]}</div>

        <div className="branchesTitle">
          NISSIN ABC LOGISTICS PRIVATE LIMITED
        </div>

        <div className="branchesText">
          Unit NO.222, 244, 246 & 247, 2nd Floor Centrum Plaza, Golf Course Road
          Sector 53 Gurgaon, Haryana 122002, India
          <br />
          TEL : 91-124-459-5100
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1"> {content[lng]["indo"]}</div>

        <div className="branchesTitle">PT.NISSIN JAYA INDONESIA</div>

        <div className="branchesText">
          Mugi Griya Building, 7th Floor, Jl. MT. Haryono Kav. 10, Jakarta 12810
          Indonesia
          <br />
          TEL : 62-21-830-8446 / FAX : 62-21-830-8505
        </div>

        <div className="branchesTitle">PT. NISSIN TRANSPORT INDONESIA</div>

        <div className="branchesText">
          Mugi Griya Building, 7th Floor, Jl. MT. Haryono Kav. 10, Jakarta 12810
          Indonesia
          <br />
          TEL : 62-21-830-8446 / FAX : 62-21-830-8505
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1"> {content[lng]["vn"]}</div>

        <div className="branchesTitle">NISSIN LOGISTICS (VN) CO., LTD.</div>

        <div className="branchesText">
          Unit 101, Ocean Park Bldg. No.1 Dao Duy Anh Str. Dong Da Dist., Hanoi,
          Vietnam
          <br />
          TEL : 84-24-3577-1462 / FAX : 84-24-3577-1461
        </div>

        <div className="branchesTitle">NR GREENLINES LOGISTICS CO., LTD.</div>

        <div className="branchesText">
          Unit 101, Ocean Park Bldg., No.1 Dao Duy Anh Str. Dong Da Dist.,
          Hanoi, Vietnam
          <br />
          TEL : 84-24-3577-2751 / FAX : 84-24-3577-2752
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1"> {content[lng]["la"]}</div>

        <div className="branchesTitle">LAO NISSIN SMT CO., LTD.</div>

        <div className="branchesText">
          P.O.Box279, Road 9, Ban Oudomvilai, Kaisonehomvihan, Savannakhet, Lao
          P. D. R.
          <br />
          TEL : 856-41-260-331 / FAX : 856-41-260-325
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1"> {content[lng]["my"]}</div>

        <div className="branchesTitle">YANGON REP. OFFICE</div>

        <div className="branchesText">
          c/o Myanma Five Star Line, 132/136 Theinbyu Road, Botataung Township,
          Yangon, Myanmar
          <br />
          TEL : 95-1-201-052 / FAX : 95-1-200-745
        </div>
      </section>
    </>
  );
};

export default AsiaBranches;
