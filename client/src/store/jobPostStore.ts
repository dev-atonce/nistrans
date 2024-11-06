import { create } from "zustand";
import axios from "axios";
import { JobPostProps, JobPostState, ApiResponse } from "../types/jobPostType";
import { notification } from 'antd';
import { useUsersStore } from "./usersStore";

const API_URL = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/jobpost`;

export const useJobPostStore = create<JobPostState>((set) => ({
    jobposts: [],
    isLoading: false,
    error: null,

    total: 0,
    lastPage: 0,
    currPage: 1,

    fetchJobPosts: async (page) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get<ApiResponse>(`${API_URL}/all?page=${page}`, {
                headers: {
                    "authorization": `Bearer ${useUsersStore.getState().token}`,
                },
            });
            const { total, lastPage, currPage, rows } = response.data;
            set({
                jobposts: rows,
                total,
                lastPage,
                currPage,
                isLoading: false,
            });
        } catch (error: any) {
            set({ error: error.message, isLoading: false });
        }
    },

    fetchJobPostById: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get<JobPostProps>(`${API_URL}/${id}`, {
                headers: {
                    "authorization": `Bearer ${useUsersStore.getState().token}`,
                },
            });
            set((state) => ({
                ...state,
                jobposts: [response.data],
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

    createJobPost: async (newJobPost) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post<JobPostProps>(API_URL, newJobPost, {
                headers: {
                    "authorization": `Bearer ${useUsersStore.getState().token}`,
                },
            });
            set((state) => ({
                jobposts: [...state.jobposts, response.data],
                isLoading: false,
            }));
            notification.success({
                message: "Success !",
                description: "The JobPost was created successfully!",
            });
        } catch (error: any) {
            set({ error: error.message, isLoading: false });
            notification.error({
                message: "Fail !",
                description: error.message,
            });
        }
    },

    updateJobPost: async (id, updatedJobPost) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.put<JobPostProps>(`${API_URL}/${id}`, updatedJobPost,
                {
                    headers: {
                        "authorization": `Bearer ${useUsersStore.getState().token}`,
                    },
                }
            );
            set((state) => ({
                jobposts: state.jobposts.map((item) => item.id === id ? response.data : item),
                isLoading: false,
            }));
            notification.success({
                message: "Success !",
                description: "The JobPost was updated successfully!",
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
            const response = await axios.put<JobPostProps>(`${API_URL}/${id}`, { status }, {
                headers: {
                    "authorization": `Bearer ${useUsersStore.getState().token}`,
                },
            });
            set((state) => ({
                jobposts: state.jobposts.map((item) => item.id === id ? response.data : item),
                isLoading: false,
            }));
            notification.success({
                message: "Success !",
                description: "The JobPost status change successfully!",
            });
        } catch (error: any) {
            set({ error: error.message, isLoading: false });
            notification.error({
                message: "Fail !",
                description: error.message,
            });
        }
    },

    deleteJobPost: async (id) => {
        set({ isLoading: true, error: null });
        try {
            await axios.delete(`${API_URL}/${id}`, {
                headers: {
                    "authorization": `Bearer ${useUsersStore.getState().token}`,
                },
            });
            set((state) => ({
                jobposts: state.jobposts.filter((item) => item.id !== id),
                isLoading: false,
            }));
            notification.success({
                message: "Success !",
                description: "The JobPost was deleted successfully!",
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
