"use client";

import { BlogProps } from "@/types/blogType";
import { useBlogStore } from "@/store/blogStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FormNews from "./FormNews";

interface FormEditProps {
  id: string;
}

const FormEdit = ({ id }: FormEditProps) => {
  const router = useRouter();
  const { items, fetchItemById, updateItem } = useBlogStore();
  const [blogState, setBlogState] = useState<Omit<BlogProps, "id" | "status" | "createdAt" | "updatedAt">>({
    attachment: "",
    blog_title: "",
    blog_detail: "",
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
        blog_detail: items[0].blog_detail,
        slug: items[0].slug,
        attachment: items[0].attachment,
      });
    }
  }, [items]);

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
    const isSuccess = await updateItem(id, blogState);
    if (isSuccess) {
      router.push("/webpanel/news");
    }
  };

  return (
    <FormNews
      pageattach={true}
      itemState={blogState}
      setItemState={handleChange}
      handleSubmit={handleSubmit}
      handleEditorChange={handleEditorChange}
    />
  );
};

export default FormEdit;
