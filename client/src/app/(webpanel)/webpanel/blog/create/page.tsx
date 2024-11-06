import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import FormAdd from "@/components/webpanel/FormElements/Blog/FormAdd";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const BlogAdd = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb
          pageName="Create Blog"
          module={{ pageName: "Blog", url: "blog" }}
        />
        <FormAdd />
      </DefaultLayout>
    </>
  );
};

export default BlogAdd;
