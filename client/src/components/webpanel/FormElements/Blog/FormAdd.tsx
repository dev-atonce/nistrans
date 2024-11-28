"use client";

import { BlogProps } from "@/types/blogType";
import { useBlogStore } from "@/store/blogStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FormBlog from "./FormBlog";

const FormAdd = () => {
  const router = useRouter();
  const { createItem } = useBlogStore();
  const [blogState, setBlogState] = useState<
    Omit<BlogProps, "id" | "status" | "createdAt" | "updatedAt">
  >({
    blog_image: "",
    blog_title_th: "",
    blog_title_en: "",
    blog_title_jp: "",
    blog_description_th: "",
    blog_description_en: "",
    blog_description_jp: "",
    blog_detail_th: "",
    blog_detail_en: "",
    blog_detail_jp: "",
    slug: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement| HTMLTextAreaElement>
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

  const handleEditorChange = (value: string, language: string) => {
    setBlogState((prevState) => ({
      ...prevState,
      [`blog_detail_${language}`]: value,
    }));
  };

  const handleSubmit = async () => {
    await createItem(blogState, 'blog');
    router.push("/webpanel/blog");
  };

  return (
    <FormBlog
      itemState={blogState}
      setItemState={handleChange}
      handleSubmit={handleSubmit}
      handleEditorChange={handleEditorChange}
    />
  );
};

export default FormAdd;
