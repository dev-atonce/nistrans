"use client";

import SwitcherStatus from "../Button/SwitcherStatus";
import AntPagination from "../Pagination/AntPagination";
import { useEffect, useState } from "react";

import { useUsersStore } from "../../../store/usersStore";
import ActionBtnGroup from "../Button/ActionBtnGroup";
import { useRouter } from "next/navigation";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
};

const UserTable = () => {
  const router = useRouter();
  const {
    fetchUsers,
    onChangeStatus,
    deleteUser,
    users,
    total,
    role,
    id: userId,
  } = useUsersStore();
  const [pageState, setPageState] = useState(1);

  useEffect(() => {
    fetchUsers(pageState);
  }, [fetchUsers, pageState]);

  useEffect(() => {
    const allow = role !== "user";

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
                User
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Email
              </th>

              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Role
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Created
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  {(pageState - 1) * Number(process.env.NEXT_PUBLIC_PERPAGE) +
                    (key + 1)}
                </td>

                <td className="text-sm border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {item?.username}
                </td>
                <td className="text-xs border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p>{item?.email}</p>
                </td>

                <td className="text-sm border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <span className="text-white bg-cyan-400 hover:bg-cyan-500 font-medium rounded-full text-sm px-3 py-2 text-center me-2 mb-2 dark:focus:ring-yellow-900">
                    {item?.role}
                  </span>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <span className="text-white bg-cyan-400 hover:bg-cyan-500 font-medium rounded-full text-sm px-3 py-1 text-center me-2 mb-2 dark:focus:ring-yellow-900">
                    <strong><small>{formatDate(item.createdAt)}</small></strong>
                  </span>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <ActionBtnGroup
                    nextLink={true}
                    itemId={item?.id}
                    link={`/webpanel/user/edit/${item?.id}`}
                    deleteItem={deleteUser}
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

export default UserTable;
