import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import FormEdit from "@/components/webpanel/FormElements/User/FormEdit";

import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";

import UserTable from "@/components/webpanel/Tables/UserTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const EditUser = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb
          pageName="Users"
          module={{ pageName: "User", url: "user" }}
        />
        <FormEdit id={params.id} />
      </DefaultLayout>
    </>
  );
};

export default EditUser;
