import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import FormEdit from "@/components/webpanel/FormElements/JobPost/FormEdit";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard",
};

const JobPostEdit = ({ params }: { params: { id: string } }) => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Edit Post" module={null} />
                <FormEdit
                    id={params.id}
                />
            </DefaultLayout>
        </>
    );
}

export default JobPostEdit;