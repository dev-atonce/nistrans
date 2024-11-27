import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import FormEdit from "@/components/webpanel/FormElements/Recruitment/FormEdit";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const RecruitmentEdit = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb
          pageName="Edit Recruitment"
          module={{ pageName: "Recruitment", url: "recruitment" }}
        />
        <FormEdit id={params.id} />
      </DefaultLayout>
    </>
  );
};

export default RecruitmentEdit;
