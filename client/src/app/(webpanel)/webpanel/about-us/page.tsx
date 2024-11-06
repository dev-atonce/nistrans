import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import FormAbout from "@/components/webpanel/FormElements/About/FormAbout";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const AboutUs: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="About Us" module={null} />

        <FormAbout />
      </DefaultLayout>
    </>
  );
};

export default AboutUs;
