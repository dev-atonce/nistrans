import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";

import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import TableSeo from "@/components/webpanel/Tables/TableSeo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const Seo: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="SEO" module={null} />

        <TableSeo />
      </DefaultLayout>
    </>
  );
};

export default Seo;
