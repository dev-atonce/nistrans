import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import TableJobApply from "@/components/webpanel/Tables/TableJobApply";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard",
};

const JobApply = () => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Job Application" module={null} />
                <TableJobApply />
            </DefaultLayout>
        </>
    );
}

export default JobApply;