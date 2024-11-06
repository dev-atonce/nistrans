"use client";

import FormBanner from "./FormBanner";
import { BannerFormProps } from "@/types/bannerType";
import { useBannerStore } from "@/store/bannerStore";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FormAdd = () => {
    const router = useRouter();
    const { createBanner } = useBannerStore();
    const [bannerState, setBannerState] = useState<BannerFormProps>({
        title: "",
        image: "",
        image_alt: "",
        link: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = event.target;
        if (name === "image" && files && files[0]) {
            setBannerState((prevState) => ({
                ...prevState,
                image: files[0],
            }));
        } else {
            setBannerState((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async () => {
        await createBanner(bannerState);
        router.push("/webpanel/banner");
    };

    return (
        <>
            <FormBanner
                itemState={bannerState}
                setItemState={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    );
}

export default FormAdd;