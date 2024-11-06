import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import FormAdd from "@/components/webpanel/FormElements/JobPost/FormAdd";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard",
};

const JobPostAdd: React.FC = () => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Post Job" module={{ pageName: "Job Post", url: "jobpost" }} />
                <FormAdd />
            </DefaultLayout>
        </>
    );
}

export default JobPostAdd;