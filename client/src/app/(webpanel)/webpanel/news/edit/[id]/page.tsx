import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import FormEdit from "@/components/webpanel/FormElements/News/FormEdit";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const NewsEdit = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb
          pageName="Edit News"
          module={{ pageName: "News", url: "news" }}
        />
        <FormEdit id={params.id} />
      </DefaultLayout>
    </>
  );
};

export default NewsEdit;
