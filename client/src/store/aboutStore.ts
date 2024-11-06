import { AboutProps, AboutState } from "./../types/aboutType";
import { create } from "zustand";
import axios from "axios";
import { notification } from "antd";
import { useUsersStore } from "./usersStore";

const API_URL = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/about`;

export const useAboutStore = create<AboutState>((set) => {
  return {
    items: [],
    isLoading: false,
    error: null,

    total: 0,
    lastPage: 0,
    currPage: 1,

    fetchItemByType: async (type) => {
      set({ isLoading: true, error: null });
      try {
        const response = await axios.get<AboutProps>(`${API_URL}/${type}`, {
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

    updateLogo: async (updatedItem: any) => {
      const formData = new FormData();
      formData.append("type", updatedItem.type);

      if (updatedItem.image) {
        formData.append("image", updatedItem.blog_image);
      }

      set({ isLoading: true, error: null });
      try {
        const response = await axios.put<any>(`${API_URL}/`, formData, {
          headers: {
            authorization: `Bearer ${useUsersStore.getState().token}`,
          },
        });
        set((state) => ({
          ...state,
          isLoading: false,
        }));
        notification.success({
          message: "Success !",
          description: "The Item was updated successfully!",
        });
      } catch (error: any) {
        set({ error: error.message, isLoading: false });
        notification.error({
          message: "Fail !",
          description: error.message,
        });
      }
    },

    updateItem: async (type, updatedAbout) => {
      set({ isLoading: true, error: null });
      try {
        const response = await axios.put<AboutProps>(
          `${API_URL}/${type}`,
          updatedAbout,
          {
            headers: {
              authorization: `Bearer ${useUsersStore.getState().token}`,
            },
          }
        );
        set((state) => ({
          users: state.items.map((item) =>
            item.type === type ? response.data : item
          ),
          isLoading: false,
        }));
        notification.success({
          message: "Success !",
          description: "The User was updated successfully!",
        });
      } catch (error: any) {
        set({ error: error.message, isLoading: false });
        notification.error({
          message: "Fail !",
          description: error.message,
        });
      }
    },
  };
});
