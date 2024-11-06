"use client";

import FormJobInformation from "./FormJobInformation";
import { JobInformationProps } from "@/types/jobInformationType";
import { useJobInformationStore } from "@/store/jobInformationStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface FormEditProps {
    id: string;
}

const FormEdit = ({ id }: FormEditProps) => {
    const router = useRouter();
    const { items, fetchItemById, updateItem } = useJobInformationStore();
    const [jobInformationState, setJobInformationState] = useState<Omit<JobInformationProps, "id" | "createdAt" | "updatedAt">>({
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
        remark: "",
    });

    const fetchData = async () => {
        await fetchItemById(id);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (items.length > 0) {
            setJobInformationState({ ...items[0] });
        }
    }, [items]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setJobInformationState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        await updateItem(id, jobInformationState);
        router.push("/webpanel/jobinformation");
    };

    return (
        <FormJobInformation
            itemState={jobInformationState}
            setItemState={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}

export default FormEdit;