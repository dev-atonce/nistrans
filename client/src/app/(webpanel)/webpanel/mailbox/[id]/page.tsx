"use client";
import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import Message from "@/components/webpanel/Message/Message";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import { useUsersStore } from "@/store/usersStore";
import { useEffect, useState } from "react";

const MailBoxView = ({ params }: { params: { id: string } }) => {
  // @ts-ignore
  const [msg, setMsg] = useState({} as any);
  const { token } = useUsersStore();
  const { id } = params;

  const fetchMsg = async (id: string, token: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/formcontact/${id}`,
      {
        cache: "no-store",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    setMsg(data);
  };

  useEffect(() => {
    //@ts-expect-error
    fetchMsg(id, token);
  }, []);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb
          pageName={`Message from: ${msg?.companyName} - ${msg?.contactName}`}
          module={{ pageName: "Mail Box", url: "mailbox" }}
        />
        <Message data={msg} type="contactPage" />
      </DefaultLayout>
    </>
  );
};
export default MailBoxView;
