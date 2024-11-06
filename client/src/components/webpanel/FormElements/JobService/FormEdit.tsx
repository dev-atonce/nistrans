"use client";

import FormJobService from "./FormJobService";
import { JobServiceProps } from "@/types/jobServiceType";
import { useJobServiceStore } from "@/store/jobServiceStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface FormEditProps {
    id: string;
}

const FormEdit = ({ id }: FormEditProps) => {
    const router = useRouter();
    const { items, fetchItemById, updateItem } = useJobServiceStore();
    const [jobServiceState, setJobServiceState] = useState<Omit<JobServiceProps, "id" | "status" | "createdAt" | "updatedAt">>({
        service_name_th: "",
        service_name_en: "",
        service_detail: "",
    });

    const fetchData = async () => {
        await fetchItemById(id);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (items.length > 0) {
            setJobServiceState({
                service_name_th: items[0].service_name_th,
                service_name_en: items[0].service_name_en,
                service_detail: items[0].service_detail,
            });
        }
    }, [items]);

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
        await updateItem(id, jobServiceState);
        router.push("/webpanel/jobservice");
    };

    return (
        <FormJobService
            itemState={jobServiceState}
            setItemState={handleChange}
            handleSubmit={handleSubmit}
            handleEditorChange={handleEditorChange}
        />
    );
}

export default FormEdit;