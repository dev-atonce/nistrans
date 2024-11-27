import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import FormAdd from "@/components/webpanel/FormElements/News/FormAdd";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const NewsAdd = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb
          pageName="Create News"
          module={{ pageName: "News", url: "news" }}
        />
        <FormAdd />
      </DefaultLayout>
    </>
  );
};

export default NewsAdd;
