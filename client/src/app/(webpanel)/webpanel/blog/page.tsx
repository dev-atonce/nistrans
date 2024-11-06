import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import CreateBtn from "@/components/webpanel/Button/CreateBtn";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import TableBlog from "@/components/webpanel/Tables/TableBlog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const Blog = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Blog" module={null} />
        <CreateBtn link="/webpanel/blog/create" text="CREATE" />
        <TableBlog />
      </DefaultLayout>
    </>
  );
};

export default Blog;
