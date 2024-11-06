"use client";
import { JobCorporateProps } from "@/types/jobCorporateType";
import { FormContactProps } from "@/types/formContactType";
import { useJobCorporateStore } from "@/store/jobCorporateStore";
import SwitcherStatus from "../../Button/SwitcherStatus";
import { useFormContactStore } from "@/store/formContactStore";

export default function Message({
  data,
  type,
}: {
  data: JobCorporateProps | FormContactProps;
  type?: string;
}) {
  // @ts-ignore
  const { id, company_name, contact_name, phone, email, title, detail } = data;

  const { onChangeStatus: onChangeJobCorporate } = useJobCorporateStore();
  const { onChangeStatus: onChangeFormContact } = useFormContactStore();

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
        <div className="flex flex-col items-center gap-2">
          <label>Mark As Read</label>
          {type === "contactPage" ? (
            <SwitcherStatus
              id={data?.id}
              status={Boolean(data?.status)}
              onChange={onChangeFormContact}
            />
          ) : (
            <SwitcherStatus
              id={data?.id}
              status={Boolean(data?.status)}
              onChange={onChangeJobCorporate}
            />
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
