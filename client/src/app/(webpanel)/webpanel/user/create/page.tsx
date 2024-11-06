import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import FormAdd from "@/components/webpanel/FormElements/User/FormAdd";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const UserCreate: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb
          pageName="Create User"
          module={{ pageName: "User", url: "user" }}
        />
        <FormAdd />
      </DefaultLayout>
    </>
  );
};

export default UserCreate;
