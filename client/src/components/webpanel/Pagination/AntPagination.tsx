import React from "react";
import { Pagination } from "antd";

interface AntPaginationProps {
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    total: number,
    pageSize: number,
}

const AntPagination = ({ total, currentPage, setCurrentPage, pageSize }: AntPaginationProps) => {

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="flex justify-center items-center mt-8 mb-3">
                <Pagination
                    simple
                    current={currentPage}
                    total={total}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                    pageSize={pageSize}
                />
            </div>
        </>
    );
};

export default AntPagination;
