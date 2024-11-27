import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import CreateBtn from "@/components/webpanel/Button/CreateBtn";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import TableNews from "@/components/webpanel/Tables/TableNews";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard",
};

const NewsPage = () => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="News" module={null} />
                <CreateBtn link="/webpanel/news/create" text="CREATE" />
                <TableNews />
            </DefaultLayout>
        </>
    );
}

export default NewsPage;