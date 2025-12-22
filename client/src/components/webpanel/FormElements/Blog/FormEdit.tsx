"use client";

import { BlogProps } from "@/types/blogType";
import { useBlogStore } from "@/store/blogStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { notification, Spin } from "antd";
import FormBlog from "./FormBlog";

interface FormEditProps {
  id: string;
}

const FormEdit = ({ id }: FormEditProps) => {
  const router = useRouter();
  const { items, fetchItemById, updateItem, isLoading } = useBlogStore();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
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
      setIsDataLoaded(true);
    }
  }, [items]);

  useEffect(() => {
    if (!isLoading && items.length === 0) {
      setIsDataLoaded(false);
    }
  }, [isLoading, items]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    // @ts-ignore
    const { name, value, files } = event.target;
    if (name === "blog_image" && files && files[0]) {
      const file = files[0];
      const maxSize = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSize) {
        notification.error({
          message: "File Size Error",
          description: "Image size must not exceed 2MB",
        });
      }
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
    if (!blogState.slug || blogState.slug.trim() === "") {
      notification.error({
        message: "Validation Error",
        description: "URL is required",
      });
      return;
    }
    if (blogState.blog_image && typeof blogState.blog_image === 'object' && 'size' in blogState.blog_image) {
      const maxSize = 2 * 1024 * 1024; // 2MB
      const file = blogState.blog_image as File;
      if (file.size > maxSize) {
        notification.error({
          message: "File Size Error",
          description: "Image size must not exceed 2MB",
        });
        return;
      }
    }
    await updateItem(id, blogState);
    router.push("/webpanel/blog");
  };

  // Show loading spinner until data is loaded
  if (isLoading || !isDataLoaded) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Spin size="large" tip="Loading..." />
      </div>
    );
  }

  return (
    <FormBlog
      itemState={blogState}
      setItemState={handleChange}
      handleSubmit={handleSubmit}
      handleEditorChange={handleEditorChange}
      isLoading={isLoading}
    />
  );
};

export default FormEdit;
