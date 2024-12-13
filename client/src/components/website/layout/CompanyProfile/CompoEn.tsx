export default function CompoEn() {
  return (
    <div className="container mx-auto pb-10 text-black">
      <p className="branchesTopic no-padding-r ">
        Siam Nistrans (Thai Nissin) was established in 1987 as the Thai
        subsidiary of Nissin Corporation, which is a pioneer in integrated
        international logistics that covers international and domestic transport
        by sea, air, and land, warehouse and export packing, and moving. Since
        establishment, we have handled customs clearance ourselves and
        implemented on-line connection through EDI with all the related
        departments. At the offices in Laem Chabang, Ayutthaya, Bangpakong,
        Prachinburi and Chiang Mai, experienced staffs provide with attentive
        services and closely communicate with our customers. As a global
        logistics service provider, we provide seamless services all over the
        world to meet the specific requirements of our customers.
      </p>
      <div>
        <div className="flex justify-between items-center">
          <div className="comInfoRow1">
            <ul>
              <li>Company Name</li>
              <li>Siam Nistrans Co., Ltd.</li>
            </ul>
            <ul>
              <li>Address</li>
              <li>
                15th Fl., 191/66, 68-69 CTI Tower, Ratchadapisek Rd.,
                <br />
                Kwang Klongtoey, Khet Klongtoey, Bangkok 10110, Thailand
              </li>
            </ul>
            <ul>
              <li>Phone</li>
              <li>(+66)-2-261-1080~5 or 261-5343~6</li>
            </ul>
            <ul>
              <li>Fax</li>
              <li>(+66)-2-261-1024 or 1059~60</li>
            </ul>
            <ul>
              <li>Date of Establishment</li>
              <li>September 30, 1987</li>
            </ul>
            <ul>
              <li>Capital</li>
              <li>507,000,000 THB</li>
            </ul>
            <ul>
              <li>Shareholders</li>
              <li>
                Nissin Corporation, CTI Logistics Co., Ltd.,
                <br />
                SBCS Co., Ltd., SMBC Management Service Co., Ltd.
              </li>
            </ul>
            <ul>
              <li>Number of Employees</li>
              <li>750 (as of 2023)</li>
            </ul>
            <ul>
              <li>Representative</li>
              <li>Mr. Takatoshi Yatsuzuka</li>
            </ul>
            <ul>
              <li>Business</li>
              <li>
                Air and sea cargo handling, warehousing, domestic land
                transport, container transport, customs clearance,
                <br />
                export packing (auto parts, KD parts, CBUs), urgent and on-site
                packing, machinery installation, and
                <br />
                exhibition setup/removal.
              </li>
            </ul>
            <ul>
              <li>Quality Policy</li>
              <li>
                Caring for customers, on-time delivery, employees, and
                continuous improvement.
              </li>
            </ul>
            <ul>
              <li>Vision</li>
              <li>
                To lead as a domestic and international logistics service
                provider.
              </li>
            </ul>
            <ul>
              <li>Mission</li>
              <li>
                1. Optimize CRM program
                <br />
                2. Modernize information systems
                <br />
                3. Enhance employee and team capabilities
                <br />
                4. Improve quality systems to meet international standards
              </li>
            </ul>
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
          <span>Company Profile</span>
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

        <div className="container mt-8">
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
