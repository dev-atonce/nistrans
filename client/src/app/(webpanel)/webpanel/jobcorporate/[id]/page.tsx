import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";

import Message from "@/components/webpanel/FormElements/JobCorporate/Message";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const fetchMsg = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/jobcorporate/${id}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return data;
};

const JobCorporateView = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const msg = await fetchMsg(id);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb
          pageName={`Message: ${msg?.company_name} - ${msg?.contact_name}`}
          module={{ pageName: "Corporate Contact", url: "jobcorporate" }}
        />
        <Message data={msg} />
      </DefaultLayout>
    </>
  );
};
export default JobCorporateView;
