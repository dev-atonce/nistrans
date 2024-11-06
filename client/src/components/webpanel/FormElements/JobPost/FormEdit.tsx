"use client";

import FormJobPost from "./FormJobPost";
import { JobPostProps } from "@/types/jobPostType";
import { useJobPostStore } from "@/store/jobPostStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface FormEditProps {
    id: string;
}

const FormEdit = ({ id }: FormEditProps) => {
    const router = useRouter();
    const { jobposts, fetchJobPostById, updateJobPost } = useJobPostStore();
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

    const fetchData = async () => {
        await fetchJobPostById(id);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (jobposts.length > 0) {
            setJobPostState({
                job_position: jobposts[0].job_position,
                job_type: jobposts[0].job_type,
                salary: jobposts[0].salary,
                location: jobposts[0].location,
                province: jobposts[0].province,
                en_skill: jobposts[0].en_skill,
                jp_skill: jobposts[0].jp_skill,
                ch_skill: jobposts[0].ch_skill,
                kr_skill: jobposts[0].kr_skill,
                staff_name: jobposts[0].staff_name,
                job_description: jobposts[0].job_description,
            });
        }
    }, [jobposts]);

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
        await updateJobPost(id, jobPostState);
        router.push("/webpanel/jobpost");
    };

    return (
        <FormJobPost
            itemState={jobPostState}
            setItemState={handleChange}
            handleSubmit={handleSubmit}
            handleEditorChange={handleEditorChange}
        />
    );
}

export default FormEdit;