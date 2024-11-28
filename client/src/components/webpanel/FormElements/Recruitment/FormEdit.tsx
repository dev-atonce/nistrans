"use client";

import { BlogProps } from "@/types/blogType";
import { useBlogStore } from "@/store/blogStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FormRecruitment from "./FormRecruitment";

interface FormEditProps {
  id: string;
}

const FormEdit = ({ id }: FormEditProps) => {
  const router = useRouter();
  const { items, fetchItemById, updateItem } = useBlogStore();
  const [blogState, setBlogState] = useState<Omit<BlogProps, "id" | "status" | "createdAt" | "updatedAt">>({
    blog_title: "",
    blog_detail: "",
    location: "",
    slug: "",
  });

  const fetchData = async () => {
    await fetchItemById(id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      setBlogState({
        blog_title: items[0].blog_title,
        location: items[0].location,
        blog_detail: items[0].blog_detail,
        slug: items[0].slug,
      });
    }
  }, [items]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setBlogState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditorChange = (value: string) => {
    setBlogState((prevState) => ({
      ...prevState,
      blog_detail: value,
    }));
  };

  const handleSubmit = async () => {
    await updateItem(id, blogState);
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

export default FormEdit;
