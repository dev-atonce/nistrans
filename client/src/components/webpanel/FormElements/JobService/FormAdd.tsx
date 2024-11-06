"use client";

import FormJobService from "./FormJobService";
import { JobServiceProps } from "@/types/jobServiceType";
import { useJobServiceStore } from "@/store/jobServiceStore";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FormAdd = () => {
    const router = useRouter();
    const { createItem } = useJobServiceStore();
    const [jobServiceState, setJobServiceState] = useState<Omit<JobServiceProps, "id" | "status" | "createdAt" | "updatedAt">>({
        service_name_th: "",
        service_name_en: "",
        service_detail: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setJobServiceState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleEditorChange = (value: string) => {
        setJobServiceState((prevState) => ({
            ...prevState,
            service_detail: value,
        }));
    };

    const handleSubmit = async () => {
        await createItem(jobServiceState);
        router.push("/webpanel/jobservice");
    };

    return (
        <>
            <FormJobService
                itemState={jobServiceState}
                setItemState={handleChange}
                handleSubmit={handleSubmit}
                handleEditorChange={handleEditorChange}
            />
        </>
    );
}

export default FormAdd;