const ChinaBranches = ({ lng }: any) => {
  const content = {
    th: {
      south: "ฮ่องกง",
      taiwan: "ไต้หวัน",
      china: "จีน",
      north: "จีน",
    },
    en: {
      south: "Hong Kong",
      taiwan: "Taiwan",
      china: "China",
      north: "China",
    },
    jp: {
      south: "香港",
      taiwan: "台湾",
      china: "中国",
      north: "中国",
    },
  };
  return (
    <>
      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1">{content[lng]["south"]}</div>

        <div className="branchesTitle">
          NISSIN TRANSPORTATION & WAREHOUSING (H.K.) LTD.
          <a
            className="branchesLink"
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.nissinhkltd.com.hk/"
          ></a>
        </div>

        <div className="branchesText font-jpNoto">
          香港 九龍尖沙咀金馬倫道48号 中国保険大厦13楼
          <br />
          TEL : 852-2721-0230 / FAX : 852-2865-4736
        </div>
      </section>
      
      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1">{content[lng]["taiwan"]}</div>

        <div className="branchesTitle">
          NISSIN GLOBAL LOGISTICS(TAIWAN) CO., LTD. Taipei Office
          <a
            className="branchesLink"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.nissin-taiwan.com/jp"
          ></a>
        </div>

        <div className="branchesText font-jpNoto">
          台湾 台北市中山区松江路318号9楼
          <br />
          TEL : 886-2-2515-6606 / FAX : 886-2-2515-2408
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1">{content[lng]["china"]}</div>

        <div className="branchesTitle">
          NISSIN-SINOTRANS INTERNATIONAL LOGISTICS CO., LTD.
          <a
            className="branchesLink"
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.nissin-sino.cn/"
          ></a>
        </div>

        <div className="branchesText font-jpNoto">
          北京市朝陽区建国路乙118号 北京京匯大廈6階601室
          <br />
          TEL : 86-10-6538-8566 / FAX : 86-10-6538-8280
        </div>

        <div className="branchesTitle">
          SHANGHAI GAOSIN INTERNATIONAL LOGISTICS CO., LTD.
        </div>

        <div className="branchesText font-jpNoto">
          上海市中国（上海）自由貿易試験区外高橋富特北路288号
          <br />
          TEL : 86-21-5866-2548 / FAX : 86-21-5866-4101
        </div>

        <div className="branchesTitle">
          NISSIN INTERNATIONAL LOGISTICS(C)CO., LTD.
        </div>

        <div className="branchesText font-jpNoto">
          上海市静安区南京西路580号 仲益大厦主楼1002室
          <br />
          TEL : 86-21-5228-7700 / FAX : 86-21-6218-0030
        </div>

        <div className="branchesTitle">
          NISSIN (CHANGSHU) INTERNATIONAL LOGISTICS CO., LTD.
        </div>

        <div className="branchesText font-jpNoto">
          深圳市福田保税区桃花路東側１号福保物流大厦四層C07
          <br />
          TEL : 86-755-8359-2811 / FAX : 86-755-8359-1485
        </div>

        <div className="branchesTitle">BEIJING OFFICE</div>

        <div className="branchesText font-jpNoto">
          北京市朝陽区建国路乙118号 北京京匯大廈6階602A室
          <br />
          TEL : 86-10-6538-8566 / FAX : 86-10-6538-8280
        </div>

        <div className="branchesTitle">SHANGHAI OFFICE</div>

        <div className="branchesText font-jpNoto">
          上海市静安区南京西路580号 仲益大厦主楼1002室
          <br />
          TEL : 86-21-5228-7700 / FAX : 86-21-6218-0030
        </div>

        <div className="branchesTitle">NISSIN LOGISTICS SHENZHEN CO., LTD.</div>

        <div className="branchesText font-jpNoto">
          深圳市福田保税区桃花路東側１号福保物流大厦四層C07
          <br />
          TEL : 86-755-8359-2811 / FAX : 86-755-8359-1485
        </div>

        {/* <div className="branchesTitle">
          JIANGSU NISSIN SINOTRANS INTERNATIONAL TRANSPORTATION CO., LTD.
        </div>

        <div className="branchesText font-jpNoto">
          南京市中華路129号 江蘇外運大厦 8楼
          <br />
          TEL : 86-25-5234-3963 / FAX : 86-25-5226-5090
        </div> */}
      </section>
    </>
  );
};

export default ChinaBranches;
