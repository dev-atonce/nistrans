"use client";

import SwitcherStatus from "../Button/SwitcherStatus";
import AntPagination from "../Pagination/AntPagination";
import { useEffect, useState } from "react";

import { useSeoStore } from "../../../store/seoStore";
import { useUsersStore } from "@/store/usersStore";
import ActionBtnGroup from "../Button/ActionBtnGroup";
import { useRouter } from "next/navigation";

const TableSeo = () => {
  const router = useRouter();
  const { fetchItems, items, total } = useSeoStore();
  const [pageState, setPageState] = useState(1);

  const { role } = useUsersStore();

  useEffect(() => {
    fetchItems(pageState);
  }, [fetchItems, pageState]);
  useEffect(() => {
    const allow = role === "super";

    !allow && router.push("/webpanel");
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-6">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                No.
              </th>

              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Page
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Title
              </th>

              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Descripition
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Keyword
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  {(pageState - 1) * Number(process.env.NEXT_PUBLIC_PERPAGE) +
                    (key + 1)}
                </td>

                <td className="text-sm border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {item?.page}
                </td>
                <td className="text-xs border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p>{item?.seoTitleTH}</p>
                </td>

                <td className="text-xs border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {item?.seoDescriptionTH}
                </td>
                <td className=" border-b border-[#eee] px-4 py-5 dark:border-strokedark text-xs">
                  {item?.seoKeywordTH}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark text-xs">
                  <ActionBtnGroup
                    nextLink={true}
                    // @ts-ignore
                    itemId={item?.id}
                    link={`/webpanel/seo/edit/${item?.id}`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          {total > Number(process.env.NEXT_PUBLIC_PERPAGE) && (
            <AntPagination
              total={total}
              currentPage={pageState}
              setCurrentPage={setPageState}
              pageSize={Number(process.env.NEXT_PUBLIC_PERPAGE)}
            />
          )}
        </table>
      </div>
    </div>
  );
};

export default TableSeo;
