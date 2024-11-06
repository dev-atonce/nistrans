"use client";
import Cover from "@/components/website/layout/Cover";
import ApplicationForm from "@/components/website/layout/ApplicationForm";
import { JobApplyProps } from "@/types/jobApplyType";
import { useState } from "react";

export default function ApplyPage() {
  const [jobApply, setJobApply] = useState<JobApplyProps>({
    resume: "",
    job_code: "",
    job_position: "",
    job_type: "",
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
    email: "",
    rate_min: "",
    rate_max: "",
    personal_detail: "",
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
      setJobApply((prevState) => ({
        ...prevState,
        image: files[0],
      }));
    } else {
      setJobApply((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <Cover
        pageName="สมัครงาน"
        engName="Application"
        prevPage={[{ url: "/", pageName: "หน้าแรก" }]}
      />
      <div className="container mx-auto ">
        <ApplicationForm itemState={jobApply} setItemState={onChangeItem} />
      </div>
    </>
  );
}
