import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import FormEdit from "@/components/webpanel/FormElements/JobService/FormEdit";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard",
};

const JobServiceEdit = ({ params }: { params: { id: string } }) => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Edit Service" module={null} />
                <FormEdit
                    id={params.id}
                />
            </DefaultLayout>
        </>
    );
}

export default JobServiceEdit;