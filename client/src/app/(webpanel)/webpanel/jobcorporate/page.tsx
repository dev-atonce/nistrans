import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";

import TableJobCorporate from "@/components/webpanel/Tables/TableJobCorporate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const JobCorporate: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Corporate Contact" module={null} />

        <TableJobCorporate />
      </DefaultLayout>
    </>
  );
};

export default JobCorporate;
