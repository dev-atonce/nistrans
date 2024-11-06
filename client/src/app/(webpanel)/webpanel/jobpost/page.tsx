import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import CreateBtn from "@/components/webpanel/Button/CreateBtn";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import TableJobpost from "@/components/webpanel/Tables/TableJobpost";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard",
};

const JobPost = () => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Job Post" module={null} />
                <CreateBtn
                    link="/webpanel/jobpost/create"
                    text="CREATE"
                />
                <TableJobpost />
            </DefaultLayout>
        </>
    );
}

export default JobPost;