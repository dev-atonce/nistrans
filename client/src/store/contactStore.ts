import {
  ContactProps,
  ApiResponse,
  ContactState,
} from "./../types/contactType";
import { create } from "zustand";
import axios from "axios";
import { notification } from "antd";
import { useUsersStore } from "./usersStore";

const API_URL = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/contactinfo`;
// @ts-ignore
export const useContactStore = create<ContactState>((set) => {
  return {
    items: [],
    isLoading: false,
    error: null,
    total: 0,
    lastPage: 0,
    currPage: 1,

    fetchItems: async () => {
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

    updateItem: async (updatedItem) => {
      set({ isLoading: true, error: null });
      try {
        const response = await axios.put<ContactProps>(
          `${API_URL}/`,
          updatedItem,
          {
            headers: {
              authorization: `Bearer ${useUsersStore.getState().token}`,
            },
          }
        );
        set((state) => ({
          ...state,
          items: [response.data],
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
  };
});
