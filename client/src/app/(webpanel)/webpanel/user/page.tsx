import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import CreateBtn from "@/components/webpanel/Button/CreateBtn";

import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";

import UserTable from "@/components/webpanel/Tables/UserTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const Users: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Users" module={null} />
        <CreateBtn link="/webpanel/user/create" text="CREATE" />
        <UserTable />
      </DefaultLayout>
    </>
  );
};

export default Users;
