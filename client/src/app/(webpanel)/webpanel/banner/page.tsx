import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import CreateBtn from "@/components/webpanel/Button/CreateBtn";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import TableBanner from "@/components/webpanel/Tables/TableBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const Banner: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Banner" module={null} />
        <CreateBtn link="/webpanel/banner/create" text="CREATE" />
        <TableBanner />
      </DefaultLayout>
    </>
  );
};

export default Banner;
