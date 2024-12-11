"use client";

import FormSeo from "./FormSeo";
import { SeoProps } from "@/types/seoType";
import { useSeoStore } from "@/store/seoStore";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface FormEditProps {
  id: string;
}

const FormAdd = ({ id }: FormEditProps) => {
  const router = useRouter();
  const { items, updateItem, fetchItemById } = useSeoStore();
  const [seoState, setSeoState] = useState<SeoProps>({
    page: "",
    seoDescriptionTH: "",
    seoDescriptionEN: "",
    seoDescriptionJP: "",
    seoKeywordTH: "",
    seoKeywordEN: "",
    seoKeywordJP: "",
    seoTitleTH: "",
    seoTitleEN: "",
    seoTitleJP: "",
  });

  const fetchData = async () => {
    await fetchItemById(id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const { name, value, files } = event.target;
    if (name === "image" && files && files[0]) {
      setSeoState((prevState) => ({
        ...prevState,
        image: files[0],
      }));
    } else {
      setSeoState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    await updateItem(id, seoState);
    router.push("/webpanel/seo");
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      setSeoState({
        seoDescriptionTH: items[0]?.seoDescriptionTH,
        seoDescriptionEN: items[0]?.seoDescriptionEN,
        seoDescriptionJP: items[0]?.seoDescriptionJP,
        seoKeywordTH: items[0]?.seoKeywordTH,
        seoKeywordEN: items[0]?.seoKeywordEN,
        seoKeywordJP: items[0]?.seoKeywordJP,
        seoTitleTH: items[0]?.seoTitleTH,
        seoTitleEN: items[0]?.seoTitleEN,
        seoTitleJP: items[0]?.seoTitleJP,
        page: items[0].page,
      });
    }
  }, [items]);

  return (
    <FormSeo
      itemState={seoState}
      setItemState={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default FormAdd;
