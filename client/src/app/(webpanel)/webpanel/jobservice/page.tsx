import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import CreateBtn from "@/components/webpanel/Button/CreateBtn";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import TableJobService from "@/components/webpanel/Tables/TableJobService";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard",
};

const JobService = () => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Job Service" module={null} />
                {/* <CreateBtn
                    link="/webpanel/jobservice/create"
                    text="CREATE"
                /> */}
                <TableJobService />
            </DefaultLayout>
        </>
    );
}

export default JobService;