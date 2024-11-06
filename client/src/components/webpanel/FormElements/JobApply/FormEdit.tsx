"use client";

import FormJobApply from "./FormJobApply";
import { JobApplyProps } from "@/types/jobApplyType";
import { useJobApplyStore } from "@/store/jobApplyStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface FormEditProps {
    id: string;
}

const FormEdit = ({ id }: FormEditProps) => {
    const router = useRouter();
    const { items, fetchItemById, updateItem } = useJobApplyStore();
    const [jobApplyState, setJobApplyState] = useState<Omit<JobApplyProps, "id" | "createdAt" | "updatedAt">>({
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

    const fetchData = async () => {
        await fetchItemById(id);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (items.length > 0) {
            setJobApplyState({ ...items[0] });
        }
    }, [items]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setJobApplyState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        await updateItem(id, jobApplyState);
        router.push("/webpanel/jobapply");
    };

    return (
        <FormJobApply
            itemState={jobApplyState}
            setItemState={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}

export default FormEdit;