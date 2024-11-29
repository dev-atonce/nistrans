"use client";

import SwitcherStatus from "../Button/SwitcherStatus";
import AntPagination from "../Pagination/AntPagination";
import { useEffect, useState } from "react";
import Image from "next/image";

import { useBlogStore } from "../../../store/blogStore";
import ActionBtnGroup from "../Button/ActionBtnGroup";
import { FaFilePdf } from "react-icons/fa";
import Link from "next/link";

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

const TableNews = () => {
    const { fetchItems, onChangeStatus, deleteItem, items, total } =
        useBlogStore();
    const [pageState, setPageState] = useState(1);

    useEffect(() => {
        fetchItems(pageState, 'news');
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
                                Title
                            </th>
                            <th className="px-4 py-4 font-medium text-black dark:text-white">
                                Created
                            </th>
                            <th className="px-4 py-4 font-medium text-black dark:text-white">
                                Action
                            </th>
                            <th className="px-4 py-4 font-medium text-black dark:text-white">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 ? (
                            items.map((item, key) => (
                                <tr key={key}>
                                    <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                                        {(pageState - 1) * Number(process.env.NEXT_PUBLIC_PERPAGE) +
                                            (key + 1)}
                                    </td>
                                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                                        <div className="flex justify-between">
                                            <strong>
                                                <small>{item?.blog_title_th}</small>
                                            </strong>
                                            {item?.attachment ? (
                                                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}${item.attachment}`}><FaFilePdf className="text-red-500" size={20} /></Link>
                                            ) : (
                                                <FaFilePdf size={20} />
                                            )}
                                        </div>
                                    </td>
                                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                                        <span className="text-white bg-cyan-400 hover:bg-cyan-500 font-medium rounded-full text-sm px-3 py-1 text-center me-2 mb-2 dark:focus:ring-yellow-900">
                                            <strong>
                                                {/* @ts-ignore */}
                                                <small>{formatDate(item?.createdAt)}</small>
                                            </strong>
                                        </span>
                                    </td>
                                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                                        <ActionBtnGroup
                                            itemId={item.id}
                                            link={`/webpanel/news/edit/${item.id}`}
                                            deleteItem={deleteItem}
                                            nextLink={true}
                                        />
                                    </td>
                                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                                        <SwitcherStatus
                                            id={item?.id}
                                            status={Boolean(item?.status)}
                                            onChange={onChangeStatus}
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="text-center p-5">
                                    No data
                                </td>
                            </tr>
                        )}
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

export default TableNews;
