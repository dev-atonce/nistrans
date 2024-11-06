import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";

import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import TableMailBox from "@/components/webpanel/Tables/TableMailBox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const Mailbox: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Mail Box" module={null} />
        <TableMailBox />
      </DefaultLayout>
    </>
  );
};

export default Mailbox;
