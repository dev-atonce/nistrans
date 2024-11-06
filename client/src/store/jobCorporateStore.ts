import { create } from "zustand";
import axios from "axios";

import {
  JobCorporateProps,
  JobCorporateState,
  ApiResponse,
} from "@/types/jobCorporateType";
import { notification } from "antd";
import { useUsersStore } from "./usersStore";

const API_URL = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/jobcorporate`;

export const useJobCorporateStore = create<JobCorporateState>((set) => ({
  contacts: [],
  isLoading: false,
  error: null,

  total: 0,
  lastPage: 0,
  currPage: 1,

  fetchContact: async (page) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get<ApiResponse>(
        `${API_URL}/all?page=${page}`,
        {
          headers: {
            authorization: `Bearer ${useUsersStore.getState().token}`,
          },
        }
      );
      const { total, lastPage, currPage, rows } = response.data;
      set({
        contacts: rows,
        total,
        lastPage,
        currPage,
        isLoading: false,
      });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  fetchContactById: async (id) => {
    try {
      const response = await axios.get<JobCorporateProps>(`${API_URL}/${id}`, {
        headers: {
          authorization: `Bearer ${useUsersStore.getState().token}`,
        },
      });
      set((state) => ({
        ...state,
        contacts: [response.data],
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

  onChangeStatus: async (id, status) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.put<JobCorporateProps>(
        `${API_URL}/${id}`,
        {
          status,
        },
        {
          headers: {
            authorization: `Bearer ${useUsersStore.getState().token}`,
          },
        }
      );
      set((state) => ({
        contacts: state.contacts.map((item) =>
          item.id === id ? response.data : item
        ),
        isLoading: false,
      }));
      notification.success({
        message: "Success !",
        description: "The Message status changed successfully!",
      });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      notification.error({
        message: "Fail !",
        description: error.message,
      });
    }
  },

  deleteContact: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          authorization: `Bearer ${useUsersStore.getState().token}`,
        },
      });
      set((state) => ({
        contacts: state.contacts.filter((item) => item.id !== id),
        isLoading: false,
      }));
      notification.success({
        message: "Success !",
        description: "The Message was deleted successfully!",
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
