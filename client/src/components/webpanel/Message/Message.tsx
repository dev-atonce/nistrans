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
  const { telephone,id, companyName, contactName,department,address , email, title, detail } = data;

  return (
    <div className="bg-white p-10 text-xl flex flex-col gap-4">
      <div className="flex justify-between">
        <div>
          Message from:{" "}
          {type == "contactPage" ? (
            <span className="font-bold text-2xl">{contactName}</span>
          ) : (
            <span className="font-bold text-2xl">
              {companyName} - {contactName}
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
        Phone: <span className="font-bold text-lg"> {telephone}</span>
      </div>
      <div>
        Detail: <span className="font-bold text-lg"> {detail}</span>
      </div>
    </div>
  );
}
