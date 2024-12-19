import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface BreadcrumbProps {
  pageName: any;
  prevPage: any;
}

const Breadcrumb = ({ pageName, prevPage, service }: any) => {
  const t = useTranslations("header");
  return (
    <div className="py-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-black">
      <nav>
        <ol className="flex items-center gap-2">
          {prevPage.length &&
            prevPage?.map((v: any, k: any) => (
              <li key={k}>
                <Link className="" href={v?.url}>
                  {v?.pageName} |
                </Link>
              </li>
            ))}
          {prevPage?.pageName && prevPage?.url ? (
            <li>
              <Link className="" href={prevPage?.url}>
                {prevPage?.pageName} |
              </Link>
            </li>
          ) : (
            ``
          )}
          {service && (
            <li className=" ">
              <Link href="/service">{t("service")} | </Link>
            </li>
          )}

          <li className=" ">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
