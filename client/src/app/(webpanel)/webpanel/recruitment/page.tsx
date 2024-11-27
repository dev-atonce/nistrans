import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import CreateBtn from "@/components/webpanel/Button/CreateBtn";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import TableRecruiment from "@/components/webpanel/Tables/TableRecruitment";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard",
};

const RecruitmentPage = () => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Recruiment" module={null} />
                <CreateBtn link="/webpanel/recruitment/create" text="CREATE" />
                <TableRecruiment />
            </DefaultLayout>
        </>
    );
}

export default RecruitmentPage;