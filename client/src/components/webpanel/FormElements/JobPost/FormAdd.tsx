"use client";

import FormJobPost from "./FormJobPost";
import { JobPostProps } from "@/types/jobPostType";
import { useJobPostStore } from "@/store/jobPostStore";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FormAdd = () => {
    const router = useRouter();
    const { createJobPost } = useJobPostStore();
    const [jobPostState, setJobPostState] = useState<Omit<JobPostProps, "id" | "status" | "createdAt" | "updatedAt" | "job_code">>({
        job_position: "",
        job_type: "",
        salary: "",
        location: "",
        province: "",
        en_skill: "",
        jp_skill: "",
        ch_skill: "",
        kr_skill: "",
        staff_name: "",
        job_description: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setJobPostState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleEditorChange = (value: string) => {
        setJobPostState((prevState) => ({
            ...prevState,
            job_description: value,
        }));
    };

    const handleSubmit = async () => {
        await createJobPost(jobPostState);
        router.push("/webpanel/jobpost");
    };

    return (
        <>
            <FormJobPost
                itemState={jobPostState}
                setItemState={handleChange}
                handleSubmit={handleSubmit}
                handleEditorChange={handleEditorChange}
            />
        </>
    );
}

export default FormAdd;