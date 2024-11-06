import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import FormHome from "@/components/webpanel/FormElements/Home/FormHome";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const Home = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Home" module={null} />
        <FormHome />
      </DefaultLayout>
    </>
  );
};

export default Home;
