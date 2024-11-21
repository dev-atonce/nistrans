import Link from "next/link";
interface BreadcrumbProps {
  pageName: any;
  prevPage: any;
  // prevPage: { pageName: string | null; url: string | null }:any;
}
const Breadcrumb = ({ pageName, prevPage }: any) => {
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

          <li className=" ">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
