import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import TableJobInformation from "@/components/webpanel/Tables/TableJobInformation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard",
};

const JobInformation = () => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Job Information" module={null} />
                <TableJobInformation />
            </DefaultLayout>
        </>
    );
}

export default JobInformation;