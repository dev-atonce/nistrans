"use client";

import { FormContactProps } from "@/types/formContactType";

import { useFormContactStore } from "@/store/formContactStore";

export default function Message({
  data,
  type,
}: {
  data: FormContactProps;
  type?: string;
}) {
  // @ts-ignore
  const { id, company_name, contact_name, phone, email, title, detail } = data;

  return (
    <div className="bg-white p-10 text-xl flex flex-col gap-4">
      <div className="flex justify-between">
        <div>
          Message from:{" "}
          {type == "contactPage" ? (
            <span className="font-bold text-2xl">{contact_name}</span>
          ) : (
            <span className="font-bold text-2xl">
              {company_name} - {contact_name}
            </span>
          )}
        </div>
      </div>
      {type !== "contactPage" && (
        <div>
          Title: <span className="font-bold text-lg">{title}</span>
        </div>
      )}

      <div>
        Email: <span className="font-bold text-lg">{email}</span>
      </div>
      <div>
        Phone: <span className="font-bold text-lg"> {phone}</span>
      </div>
      <div>
        Detail: <span className="font-bold text-lg"> {detail}</span>
      </div>
    </div>
  );
}
