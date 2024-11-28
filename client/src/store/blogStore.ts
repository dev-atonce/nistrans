import { create } from "zustand";
import axios from "axios";
import { BlogProps, BlogState, ApiResponse } from "../types/blogType";
import { notification } from "antd";
import { useUsersStore } from "./usersStore";

const API_URL = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/blog`;

export const useBlogStore = create<BlogState>((set) => ({
  items: [],
  isLoading: false,
  error: null,

  total: 0,
  lastPage: 0,
  currPage: 1,

  fetchItems: async (page, type) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get<ApiResponse>(
        `${API_URL}/all?type=${type}&page=${page}`,
        {
          headers: {
            authorization: `Bearer ${useUsersStore.getState().token}`,
          },
        }
      );
      const { total, lastPage, currPage, rows } = response.data;
      set({
        items: rows,
        total,
        lastPage,
        currPage,
        isLoading: false,
      });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  fetchItemById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get<BlogProps>(`${API_URL}/${id}`, {
        headers: {
          authorization: `Bearer ${useUsersStore.getState().token}`,
        },
      });
      set((state) => ({
        ...state,
        items: [response.data],
        isLoading: false,
      }));
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      notification.error({
        message: "Fail !",
        description: error.message,
      });
    }
  },

  createItem: async (newItem, type) => {
    const formData = new FormData();
    formData.append("blog_title_th", newItem.blog_title_th);
    formData.append("blog_title_en", newItem.blog_title_en);
    formData.append("blog_title_jp", newItem.blog_title_jp);
    // @ts-ignore
    formData.append("slug", newItem.slug);
    if (newItem.blog_image) {
      formData.append("blog_image", newItem.blog_image);
    }
    if (newItem.attachment) {
      formData.append("attachment", newItem.attachment);
    }
    if (newItem.blog_description_th) {
      formData.append("blog_description_th", newItem.blog_description_th);
    }
    if (newItem.blog_description_en) {
      formData.append("blog_description_en", newItem.blog_description_en);
    }
    if (newItem.blog_description_jp) {
      formData.append("blog_description_jp", newItem.blog_description_jp);
    }
    if (newItem.location) {
      formData.append("location", newItem.location);
    }
    formData.append("blog_detail_th", newItem.blog_detail_th);
    formData.append("blog_detail_en", newItem.blog_detail_en);
    formData.append("blog_detail_jp", newItem.blog_detail_jp);
    formData.append("type", type);
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post<BlogProps>(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${useUsersStore.getState().token}`,
        },
      });
      set((state) => ({
        items: [...state.items, response.data],
        isLoading: false,
      }));
      notification.success({
        message: "Success !",
        description: "The Item was created successfully!",
      });
      return true;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      notification.error({
        message: "Fail !",
        description: error.message,
      });
      return false;
    }
  },

  updateItem: async (id, updatedItem) => {
    const formData = new FormData();
    formData.append("blog_title_th", updatedItem.blog_title_th);
    formData.append("blog_title_en", updatedItem.blog_title_en);
    formData.append("blog_title_jp", updatedItem.blog_title_jp);
    // @ts-ignore
    formData.append("slug", updatedItem.slug);
    if (updatedItem.blog_image) {
      formData.append("blog_image", updatedItem.blog_image);
    }
    if (updatedItem.attachment) {
      formData.append("attachment", updatedItem.attachment);
    }
    if (updatedItem.blog_description_th) {
      formData.append("blog_description_th", updatedItem.blog_description_th);
    }
    if (updatedItem.blog_description_en) {
      formData.append("blog_description_en", updatedItem.blog_description_en);
    }
    if (updatedItem.blog_description_jp) {
      formData.append("blog_description_jp", updatedItem.blog_description_jp);
    }
    if (updatedItem.location) {
      formData.append("location", updatedItem.location);
    }
    formData.append("blog_detail_th", updatedItem.blog_detail_th);
    formData.append("blog_detail_en", updatedItem.blog_detail_en);
    formData.append("blog_detail_jp", updatedItem.blog_detail_jp);
    set({ isLoading: true, error: null });
    try {
      const response = await axios.put<BlogProps>(
        `${API_URL}/${id}`,
        formData,
        {
          headers: {
            authorization: `Bearer ${useUsersStore.getState().token}`,
          },
        }
      );
      set((state) => ({
        items: state.items.map((item) =>
          item.id === id ? response.data : item
        ),
        isLoading: false,
      }));
      notification.success({
        message: "Success !",
        description: "The Item was updated successfully!",
      });
      return true;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      notification.error({
        message: "Fail !",
        description: error.message,
      });
      return false;
    }
  },

  onChangeStatus: async (id, status) => {
    set({ isLoading: true, error: null });
    const formData = new FormData();
    formData.append("status", String(status));
    try {
      const response = await axios.put<BlogProps>(
        `${API_URL}/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${useUsersStore.getState().token}`,
          },
        }
      );
      set((state) => ({
        items: state.items.map((item) =>
          item.id === id ? response.data : item
        ),
        isLoading: false,
      }));
      notification.success({
        message: "Success !",
        description: "The Item status change successfully!",
      });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      notification.error({
        message: "Fail !",
        description: error.message,
      });
    }
  },

  deleteItem: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          authorization: `Bearer ${useUsersStore.getState().token}`,
        },
      });
      set((state) => ({
        items: state.items.filter((item) => item.id !== id),
        isLoading: false,
      }));
      notification.success({
        message: "Success !",
        description: "The Item was deleted successfully!",
      });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      notification.error({
        message: "Fail !",
        description: error.message,
      });
    }
  },
}));
