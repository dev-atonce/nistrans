"use client";

import SwitcherStatus from "../Button/SwitcherStatus";
import AntPagination from "../Pagination/AntPagination";
import { useEffect, useState } from "react";
import { useJobPostStore } from "../../../store/jobPostStore";
import ActionBtnGroup from "../Button/ActionBtnGroup";

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

const TableJobpost = () => {
    const { fetchJobPosts, onChangeStatus, deleteJobPost, jobposts, total } = useJobPostStore();
    const [pageState, setPageState] = useState(1);

    useEffect(() => {
        fetchJobPosts(pageState);
    }, [fetchJobPosts, pageState]);

    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-6">
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="px-4 py-4 font-medium text-black dark:text-white xl:pl-11">No.</th>
                            <th className="px-4 py-4 font-medium text-black dark:text-white">Code</th>
                            <th className="px-4 py-4 font-medium text-black dark:text-white">Position</th>
                            <th className="px-4 py-4 font-medium text-black dark:text-white">Type</th>
                            <th className="px-4 py-4 font-medium text-black dark:text-white">Staff</th>
                            <th className="px-4 py-4 font-medium text-black dark:text-white">Action</th>
                            <th className="px-4 py-4 font-medium text-black dark:text-white">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobposts.map((item, key) => (
                            <tr key={key}>
                                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                                    {(pageState - 1) * Number(process.env.NEXT_PUBLIC_PERPAGE) + (key + 1)}
                                </td>
                                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                                    {item.job_code}
                                </td>
                                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">{item.job_position}</td>
                                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">{item.job_type}</td>
                                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                                    <div>
                                        <strong><small>{item.staff_name}</small></strong>
                                    </div>
                                    <div>
                                        <small>{formatDate(item.createdAt)}</small>
                                    </div>
                                </td>
                                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                                    <ActionBtnGroup
                                        itemId={item.id}
                                        link={`/webpanel/jobpost/edit/${item.id}`}
                                        deleteItem={deleteJobPost}
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

export default TableJobpost;
