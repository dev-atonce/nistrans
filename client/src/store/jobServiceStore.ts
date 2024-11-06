import { create } from "zustand";
import axios from "axios";
import { JobServiceProps, JobServiceState, ApiResponse } from "../types/jobServiceType";
import { notification } from 'antd';
import { useUsersStore } from "./usersStore";

const API_URL = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/jobservice`;

export const useJobServiceStore = create<JobServiceState>((set) => ({
    items: [],
    isLoading: false,
    error: null,

    total: 0,
    lastPage: 0,
    currPage: 1,

    fetchItems: async (page) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get<ApiResponse>(`${API_URL}/all?page=${page}`, {
                headers: {
                    "authorization": `Bearer ${useUsersStore.getState().token}`,
                },
            });
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
            const response = await axios.get<JobServiceProps>(`${API_URL}/${id}`, {
                headers: {
                    "authorization": `Bearer ${useUsersStore.getState().token}`,
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

    createItem: async (newItem) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post<JobServiceProps>(API_URL, newItem, {
                headers: {
                    "authorization": `Bearer ${useUsersStore.getState().token}`,
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
        } catch (error: any) {
            set({ error: error.message, isLoading: false });
            notification.error({
                message: "Fail !",
                description: error.message,
            });
        }
    },

    updateItem: async (id, updatedItem) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.put<JobServiceProps>(`${API_URL}/${id}`, updatedItem,
                {
                    headers: {
                        "authorization": `Bearer ${useUsersStore.getState().token}`,
                    },
                }
            );
            set((state) => ({
                items: state.items.map((item) => item.id === id ? response.data : item),
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

    onChangeStatus: async (id, status) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.put<JobServiceProps>(`${API_URL}/${id}`, { status }, {
                headers: {
                    "authorization": `Bearer ${useUsersStore.getState().token}`,
                },
            });
            set((state) => ({
                items: state.items.map((item) => item.id === id ? response.data : item),
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
                    "authorization": `Bearer ${useUsersStore.getState().token}`,
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
