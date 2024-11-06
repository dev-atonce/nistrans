"use client";
import Cover from "@/components/website/layout/Cover";
import ResumeForm from "@/components/website/layout/ResumeForm";
import { JobInformationProps } from "@/types/jobInformationType";
import { useState } from "react";

export default function Resume() {
  const [jobInformation, setJobInformation] = useState<JobInformationProps>({
    resume: "",
    profile_image: "",
    title: "",
    firstname: "",
    lastname: "",
    nickname: "",
    age: "",
    gender: "",
    phone: "",
    telephone: "",
    address: "",
    location: "",
    email: "",
    rate_min: "",
    rate_max: "",
    personal_detail: "",
    interest_job_1: "",
    interest_job_2: "",
    interest_job_3: "",
    en_skill: "",
    en_skill_file: "",
    jp_skill: "",
    jp_skill_file: "",
    ch_skill: "",
    ch_skill_file: "",
    kr_skill: "",
    kr_skill_file: "",
    other_skill: "",
    company_name: "",
    start_month: "",
    start_year: "",
    end_month: "",
    end_year: "",
    detail: "",
  });

  const onChangeItem = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    // @ts-ignore
    const { name, value, files } = event.target;
    if (name === "image" && files && files[0]) {
      setJobInformation((prevState) => ({
        ...prevState,
        image: files[0],
      }));
    } else {
      setJobInformation((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <Cover
        pageName="ฝากประวัติ"
        engName="Resume"
        prevPage={[{ url: "/", pageName: "หน้าแรก" }]}
      />
      <div className="container mx-auto ">
        <ResumeForm itemState={jobInformation} setItemState={onChangeItem} />
      </div>
    </>
  );
}
