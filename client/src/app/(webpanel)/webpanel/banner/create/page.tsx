import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import FormAdd from "@/components/webpanel/FormElements/Banner/FormAdd";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard",
};

const BannerCreate: React.FC = () => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Add Banner" module={{ pageName: "Banner", url: "banner" }}/>
                <FormAdd />
            </DefaultLayout>
        </>
    );
}

export default BannerCreate;