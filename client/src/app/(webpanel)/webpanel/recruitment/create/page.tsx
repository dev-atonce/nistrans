import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import FormAdd from "@/components/webpanel/FormElements/Recruitment/FormAdd";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const RecruimentAdd = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb
          pageName="Create Recruiment"
          module={{ pageName: "Recruiment", url: "recruiment" }}
        />
        <FormAdd />
      </DefaultLayout>
    </>
  );
};

export default RecruimentAdd;
