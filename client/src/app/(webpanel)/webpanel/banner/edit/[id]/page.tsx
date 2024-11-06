import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import FormEdit from "@/components/webpanel/FormElements/Banner/FormEdit";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const BannerEdit = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb
          pageName="Edit Banner"
          module={{ pageName: "Banner", url: "banner" }}
        />
        <FormEdit id={params.id} />
      </DefaultLayout>
    </>
  );
};

export default BannerEdit;
