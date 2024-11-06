"use client";

import FormBanner from "./FormBanner";
import { BannerFormProps } from "@/types/bannerType";
import { useBannerStore } from "@/store/bannerStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface FormEditProps {
  id: string;
}

const FormEdit = ({ id }: FormEditProps) => {
  const router = useRouter();
  const { banners, updateBanner, fetchBannerById } = useBannerStore();
  const [bannerState, setBannerState] = useState<BannerFormProps>({
    title: "",
    image: "",
    image_alt: "",
    link: "",
  });

  const fetchData = async () => {
    await fetchBannerById(id);
  };

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
    await updateBanner(id, bannerState);
    router.push("/webpanel/banner");
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (banners.length > 0) {
      setBannerState({
        title: banners[0].title,
        image: banners[0].image,
        image_alt: banners[0].image_alt,
        link: banners[0].link,
      });
    }
  }, [banners]);

  return (
    <FormBanner
      itemState={bannerState}
      setItemState={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default FormEdit;
