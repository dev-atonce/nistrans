"use client";

import { BlogProps } from "@/types/blogType";
import { useBlogStore } from "@/store/blogStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormRecruitment from "./FormRecruitment";

const FormAdd = () => {
  const router = useRouter();
  const { createItem } = useBlogStore();
  const [blogState, setBlogState] = useState<
    Omit<BlogProps, "id" | "status" | "createdAt" | "updatedAt">
  >({
    blog_title: "",
    blog_detail: "",
    location: "",
    slug: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // @ts-ignore
    const { name, value, files } = event.target;
    if (name === "blog_image" && files && files[0]) {
      setBlogState((prevState) => ({
        ...prevState,
        blog_image: files[0],
      }));
    } else {
      setBlogState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleEditorChange = (value: string) => {
    setBlogState((prevState) => ({
      ...prevState,
      blog_detail: value,
    }));
  };

  const handleSubmit = async () => {
    await createItem(blogState, 'recruitment');
    router.push("/webpanel/recruitment");
  };

  return (
    <FormRecruitment
      itemState={blogState}
      setItemState={handleChange}
      handleSubmit={handleSubmit}
      handleEditorChange={handleEditorChange}
    />
  );
};

export default FormAdd;
