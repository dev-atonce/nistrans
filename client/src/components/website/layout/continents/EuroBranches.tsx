const EuroBranches = ({ lng }: any) => {
  const content = {
    th: {
      de: "เยอรมนี",
      nd: "เนเธอร์แลนด์",
      uk: "สหราชอาณาจักร",
      es: "สเปน",
      fr: "ฝรั่งเศส",
      be: "เบลเยียม",
      po: "โปแลนด์",
      au: "ออสเตรีย",
      ru: "รัสเซีย",
      ka: "คาซัคสถาน",
    },
    en: {
      de: "Germany",
      nd: "Netherlands",
      uk: "United Kingdom",
      es: "Spain",
      fr: "France",
      be: "Belgium",
      po: "Poland",
      au: "Austria",
      ru: "Russia",
      ka: "Kazakhstan",
    },
    jp: {
      de: "ドイツ",
      nd: "オランダ",
      uk: "英国",
      es: "スペイン",
      fr: "フランス",
      be: "ベルギー",
      po: "ポーランド",
      au: "オーストリア",
      ru: "ロシア",
      ka: "カザフスタン",
    },
  };
  return (
    <>
      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1">{content[lng]["de"]}</div>
        <div className="branchesTitle">
          NISSIN TRANSPORT GMBH
          <a
            className="branchesLink"
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.nissin-eu.com/"
          ></a>
        </div>
        <div className="branchesText">
          Habichtweg 1, 41468 Neuss Germany
          <br />
          TEL：49-2131-5234-0 / FAX：49-2131-5234-129
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1">{content[lng]["nd"]}</div>
        <div className="branchesTitle">
          NISSIN TRANSPORT GmbH Tilburg Branch
        </div>
        <div className="branchesText">
          Rheastraat 3 5047 TL Tilburg, Netherlands
          <br />
          TEL : 31-13-8000350
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1">{content[lng]["uk"]}</div>
        <div className="branchesTitle">
          NISSIN (U.K.) LTD.
          <a
            className="branchesLink"
            target="_blank"
            rel="noopener noreferrer"
            href="http://nissinuk.com/"
          ></a>
        </div>
        <div className="branchesText">
          Unit 5 Horton Industrial Park, Horton Road, West Drayton, Middlesex
          UB7 8JD, United Kingdom
          <br />
          TEL：44-1895-439777 / FAX：44-1895-434505
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1">{content[lng]["es"]}</div>
        <div className="branchesTitle">NISSIN TRANSPORTES ESPANA S.A.</div>
        <div className="branchesText">
          Avda. Diagonal, 309, 5-A. 08013, Barcelona, Spain
          <br />
          TEL：34-93-289-6280 / FAX：34-93-289-6281
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1">{content[lng]["fr"]}</div>
        <div className="branchesTitle">NISSIN FRANCE S.A.S.</div>
        <div className="branchesText">
          C/O GEODIS WILSON FRANCE SAS 344, Rue de La Belle Etoile, Paris Nord
          2, 95700 Roissy Charles de Gaulle Cedex France
          <br />
          TEL：33-1-4938-5907 / FAX：31-1-4938-5909
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1">{content[lng]["be"]}</div>
        <div className="branchesTitle">NISSIN BELGIUM N.V.</div>
        <div className="branchesText">
          C/O SACO GROUPAIR NV Bedrijvenzone Machelen Cargo 738/B2.6 B-1830
          Machelen Belgium
          <br />
          TEL：32-2-751-4499 / FAX：32-2-751-5856
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1">{content[lng]["po"]}</div>
        <div className="branchesTitle">NISSIN LOGISTICS POLAND SP. Z O.O.</div>
        <div className="branchesText">
          Ostaszewo 57K, 87-148 Lysomice, Poland
          <br />
          TEL：48-56-674-8674 / FAX：48-56-674-8675
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1">{content[lng]["au"]}</div>
        <div className="branchesTitle">NISSIN TRANSPORT GES. MBH</div>
        <div className="branchesText">
          Kasernstrasse 5, 2301 Gross Enzersdorf, Austria
          <br />
          TEL：43-2249-28960-15 / FAX：43-2249-28960-29
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1">{content[lng]["ru"]}</div>
        <div className="branchesTitle">
          LIMITED LIABILITY COMPANY &quot;NISSIN RUS&quot;
        </div>
        <div className="branchesText">
          11/10 Block 6, 2nd Floor, Office 222, Letnikovskaya Str., Moscow
          115114, Russia
          <br />
          TEL：7-495-792-3025 / FAX：7-495-792-3129
        </div>
        <div className="branchesTitle">MOSCOW REP. OFFICE</div>
        <div className="branchesText">
          11/10 Block 6, 2nd Floor, Office 220, Letnikovskaya Str., Moscow
          115114, Russia
          <br />
          TEL：7-495-792-302 / FAX：7-495-792-3129
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1">{content[lng]["ka"]}</div>
        <div className="branchesTitle">ALMATY REP. OFFICE</div>
        <div className="branchesText">
          151/115 Abay Avenue Office 1003, 10th Floor, Business Center
          “Alatau”050009, Almaty, Kazakhstan
          <br />
          TEL：7-727-250-1859 / FAX：7-727-250-1879
        </div>
      </section>
    </>
  );
};

export default EuroBranches;
