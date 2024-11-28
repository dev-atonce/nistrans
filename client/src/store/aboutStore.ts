import { AboutProps, AboutState, logoProps } from "./../types/aboutType";
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

    updateLogo: async (updatedItem, type) => {
      set({ isLoading: true, error: null });
      const formData = new FormData();
      formData.append("type", type);
      if (updatedItem) {
        formData.append("image", updatedItem);
      }
      try {
        await axios.put<logoProps>(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/logo/${type}`, formData, {
          headers: {
            authorization: `Bearer ${useUsersStore.getState().token}`,
          },
        });
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
