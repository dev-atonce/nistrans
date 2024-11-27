"use client";

import { BlogProps } from "@/types/blogType";
import { useBlogStore } from "@/store/blogStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormBlog from "./FormNews";

const FormAdd = () => {
  const router = useRouter();
  const { createItem } = useBlogStore();
  const [blogState, setBlogState] = useState<Omit<BlogProps, "id" | "status" | "createdAt" | "updatedAt">>({
    attachment: "",
    blog_title: "",
    blog_detail: "",
    slug: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // @ts-ignore
    const { name, value, files } = event.target;
    if (name === "attachment" && files && files[0]) {
      setBlogState((prevState) => ({
        ...prevState,
        attachment: files[0],
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
    const isSuccess = await createItem(blogState, 'news');
    if (isSuccess) {
      router.push("/webpanel/news");
    }
  };

  return (
    <FormBlog
      pageattach={false}
      itemState={blogState}
      setItemState={handleChange}
      handleSubmit={handleSubmit}
      handleEditorChange={handleEditorChange}
    />
  );
};

export default FormAdd;
