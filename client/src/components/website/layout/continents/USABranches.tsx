const USABranches = ({ lng }: any) => {
  const content = {
    th: {
      us: "สหรัฐอเมริกา",
      ca: "เนเธอร์แลนด์",
      mx: "เม็กซิโก",
    },
    en: {
      us: "U.S.A",
      ca: "Canada",
      mx: "Mexico",
    },
    jp: {
      us: "米国",
      ca: "カナダ",
      mx: "メキシコ",
    },
  };
  return (
    <>
      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1">{content[lng]["us"]}</div>
        <div className="branchesTitle">
          NISSIN INTERNATIONAL TRANSPORT U.S.A., INC.
          <a
            className="branchesLink"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.nitusa.com"
          ></a>
        </div>
        <div className="branchesText">
          1540 West 190th Street Torrance, CA 90501 U.S.A
          <br />
          TEL : 1-310-222-5804 / FAX : 1-310-787-7150
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1">{content[lng]["ca"]}</div>
        <div className="branchesTitle">
          NISSIN TRANSPORT (CANADA) INC.
          <a
            className="branchesLink"
            target="_blank"
            rel="noopener noreferrer"
            href="http://nissincda.com/"
          ></a>
        </div>
        <div className="branchesText">
          5630 Timberlea Blvd. Mississauga, ON L4W 4M6 Canada
          <br />
          TEL : 1-905-361-0750 / FAX : 1-905-361-0753
        </div>
      </section>

      <section>
        {/* @ts-ignore */}
        <div className="pageTitle1">{content[lng]["mx"]}</div>
        <div className="branchesTitle">
          NISTRANS INTERNACIONAL DE MEXICO,S.DE R.L.DE C.V.
          <a
            className="branchesLink"
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.nistrans.com.mx/"
          ></a>
        </div>
        <div className="branchesText">
          Circuito Productividad Sur No.111 Parque Industrial Guadalajara, El
          Salto, Jalisco, Mexico C.P.45690
          <br />
          TEL : 52-333-688-5916
        </div>
      </section>
    </>
  );
};

export default USABranches;
