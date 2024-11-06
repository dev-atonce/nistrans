import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import FormEdit from "@/components/webpanel/FormElements/Seo/FormEdit";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const SeoEdit = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb
          pageName="Edit Seo"
          module={{ pageName: "Seo", url: "seo" }}
        />
        <FormEdit id={params.id} />
      </DefaultLayout>
    </>
  );
};

export default SeoEdit;
