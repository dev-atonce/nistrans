import { SeoProps, ApiResponse, SeoState } from "./../types/seoType";
import { create } from "zustand";
import axios from "axios";
import { notification } from "antd";
import { useUsersStore } from "./usersStore";

const API_URL = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/seo`;

export const useSeoStore = create<SeoState>((set) => {
  return {
    items: [],
    isLoading: false,
    error: null,

    total: 0,
    lastPage: 0,
    currPage: 1,

    fetchItems: async (page: number) => {
      set({ isLoading: true, error: null });
      try {
        const response = await axios.get<ApiResponse>(
          `${API_URL}/`,
          //   `${API_URL}?page=${page}`,
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
        const response = await axios.get<SeoProps>(`${API_URL}/${id}`, {
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

    updateItem: async (id, updatedUser) => {
      console.log(updatedUser);
      set({ isLoading: true, error: null });
      try {
        const response = await axios.put<SeoProps>(
          `${API_URL}/${id}`,
          updatedUser,
          {
            headers: {
              authorization: `Bearer ${useUsersStore.getState().token}`,
            },
          }
        );
        set((state) => ({
          users: state.items.map((item) =>
            item.id === id ? response.data : item
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
