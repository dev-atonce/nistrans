"use client";

import AntPagination from "../Pagination/AntPagination";
import { useEffect, useState } from "react";
import { useJobApplyStore } from "../../../store/jobApplyStore";
import ActionBtnGroup from "../Button/ActionBtnGroup";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const TableJobApply = () => {
  const { fetchItems, deleteItem, items, total } = useJobApplyStore();
  const [pageState, setPageState] = useState(1);

  useEffect(() => {
    fetchItems(pageState);
  }, [pageState]);

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
                Code
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Job Position
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Job Type
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Name
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Gender
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Salary
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Date
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
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <strong>
                    <small>{item.job_code}</small>
                  </strong>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {item.job_position}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {item.job_type}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {item.firstname} {item.lastname}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {item.gender}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {item.rate_min} - {item.rate_max}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <span className="text-white bg-cyan-400 hover:bg-cyan-500 font-medium rounded-full text-sm px-3 py-1 text-center me-2 mb-2 dark:focus:ring-yellow-900">
                    <strong>
                      {/* @ts-ignore */}
                      <small>{formatDate(item.createdAt)}</small>
                    </strong>
                  </span>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <ActionBtnGroup
                    // @ts-ignore
                    itemId={item.id}
                    link={`/webpanel/jobapply/edit/${item.id}`}
                    deleteItem={deleteItem}
                    nextLink={true}
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

export default TableJobApply;
