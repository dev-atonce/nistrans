"use client";

import { BlogProps } from "@/types/blogType";
import { useBlogStore } from "@/store/blogStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FormBlog from "./FormBlog";

interface FormEditProps {
  id: string;
}

const FormEdit = ({ id }: FormEditProps) => {
  const router = useRouter();
  const { items, fetchItemById, updateItem } = useBlogStore();
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

  const fetchData = async () => {
    await fetchItemById(id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      setBlogState({
        blog_title_th: items[0].blog_title_th,
        blog_title_en: items[0].blog_title_en,
        blog_title_jp: items[0].blog_title_jp,
        blog_description_th: items[0].blog_description_th,
        blog_description_en: items[0].blog_description_en,
        blog_description_jp: items[0].blog_description_jp,
        blog_detail_th: items[0].blog_detail_th,
        blog_detail_en: items[0].blog_detail_en,
        blog_detail_jp: items[0].blog_detail_jp,
        slug: items[0].slug,
        blog_image: items[0].blog_image,
      });
    }
  }, [items]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
    await updateItem(id, blogState);
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

export default FormEdit;
