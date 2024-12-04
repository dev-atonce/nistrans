import Cover from "@/components/website/layout/Cover";
import { useTranslations } from "next-intl";

export default function Cookie() {
  const t = useTranslations("cookie");
  const moreD = t("more-detail.p");
  console.log(moreD);
  return (
    <>
      <Cover
        noHeading={true}
        pageName={t("topic")}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container px-2 xl:px-0 mx-auto pb-10 text-black py-10">
        <div className="cookie-box">
          <div className="pageTitle1">{t("topic")}</div>

          <div className="cookieText margin-t50">{t("description")}</div>

          <div className="cookie-title">{t("cookie-use.heading")}</div>

          <div className="cookieText">
            <p>{t("cookie-use.p")}</p>
          </div>

          <div className="cookie-title">{t("cookie-type.heading")}</div>

          <div className="cookie-table-1 overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">
                    {t("cookie-type.1-1")}
                  </th>
                  <th className="px-4 py-2 text-left">
                    {t("cookie-type.1-2")}
                  </th>
                  <th className="px-4 py-2 text-left">
                    {t("cookie-type.1-3")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    {t("cookie-type.2-1")}
                    <br />
                    (Necessary Cookies)
                  </td>
                  <td className="px-4 py-2">{t("cookie-type.2-2")}</td>
                  <td className="px-4 py-2">{t("cookie-type.2-3")}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    {t("cookie-type.3-1")}
                    <br />
                    (Performance Cookies)
                  </td>
                  <td className="px-4 py-2">{t("cookie-type.3-2")}</td>
                  <td className="px-4 py-2">{t("cookie-type.3-3")}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    {t("cookie-type.4-1")}
                    <br />
                    (Functionality Cookies)
                  </td>
                  <td className="px-4 py-2">{t("cookie-type.4-2")}</td>
                  <td className="px-4 py-2">{t("cookie-type.4-3")}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    {t("cookie-type.5-1")}
                    <br />
                    (Targeting Cookies)
                  </td>
                  <td className="px-4 py-2">{t("cookie-type.5-2")}</td>
                  <td className="px-4 py-2">{t("cookie-type.5-3")}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cookie-title">{t("more-detail.heading")}</div>

          <div
            className="cookieText"
            dangerouslySetInnerHTML={{ __html: t("more-detail.p") }}
          ></div>

          <div className="cookie-title">{t("cookie-policy.heading")}</div>

          <div className="cookieText">{t("cookie-policy.p")}</div>

          <div className="cookieText text-right margin-t50">{t("date")}</div>
        </div>
      </div>
    </>
  );
}
