import { create } from "zustand";
import axios from "axios";
import { BannerProps, BannerState, ApiResponse } from "../types/bannerType";
import { notification } from 'antd';
import { useUsersStore } from "./usersStore";

const API_URL = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/banner`;

export const useBannerStore = create<BannerState>((set) => ({
    banners: [],
    isLoading: false,
    error: null,

    total: 0,
    lastPage: 0,
    currPage: 1,

    fetchBanners: async (page) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get<ApiResponse>(`${API_URL}/all?page=${page}`, {
                headers: {
                    "authorization": `Bearer ${useUsersStore.getState().token}`,
                },
            });
            const { total, lastPage, currPage, rows } = response.data;
            set({
                banners: rows,
                total,
                lastPage,
                currPage,
                isLoading: false,
            });
        } catch (error: any) {
            set({ error: error.message, isLoading: false });
        }
    },

    fetchBannerById: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get<BannerProps>(`${API_URL}/${id}`, {
                headers: {
                    "authorization": `Bearer ${useUsersStore.getState().token}`,
                },
            });
            set((state) => ({
                ...state,
                banners: [response.data],
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

    createBanner: async (newBanner) => {
        const formData = new FormData();
        formData.append("title", newBanner.title);
        formData.append("link", newBanner.link);
        if (newBanner.image) {
            formData.append("image", newBanner.image);
        }
        formData.append("image_alt", newBanner.image_alt);
        set({ isLoading: true, error: null });

        try {
            const response = await axios.post<BannerProps>(API_URL, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "authorization": `Bearer ${useUsersStore.getState().token}`,
                },
            });
            set((state) => ({
                banners: [...state.banners, response.data],
                isLoading: false,
            }));
            notification.success({
                message: "Success !",
                description: "The banner was created successfully!",
            });
        } catch (error: any) {
            set({ error: error.message, isLoading: false });
            notification.error({
                message: "Fail !",
                description: error.message,
            });
        }
    },

    updateBanner: async (id, updatedBanner) => {
        const formData = new FormData();
        formData.append("title", updatedBanner.title);
        formData.append("link", updatedBanner.link);
        if (updatedBanner.image) {
            formData.append("image", updatedBanner?.image);
        }
        formData.append("image_alt", updatedBanner.image_alt);

        set({ isLoading: true, error: null });
        try {
            const response = await axios.put<BannerProps>(`${API_URL}/${id}`, formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "authorization": `Bearer ${useUsersStore.getState().token}`,
                    },
                }
            );
            set((state) => ({
                banners: state.banners.map((item) => item.id === id ? response.data : item),
                isLoading: false,
            }));
            notification.success({
                message: "Success !",
                description: "The banner was updated successfully!",
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
            const response = await axios.put<BannerProps>(`${API_URL}/${id}`, { status }, {
                headers: {
                    "authorization": `Bearer ${useUsersStore.getState().token}`,
                },
            });
            set((state) => ({
                banners: state.banners.map((item) => item.id === id ? response.data : item),
                isLoading: false,
            }));
            notification.success({
                message: "Success !",
                description: "The banner status change successfully!",
            });
        } catch (error: any) {
            set({ error: error.message, isLoading: false });
            notification.error({
                message: "Fail !",
                description: error.message,
            });
        }
    },

    deleteBanner: async (id) => {
        set({ isLoading: true, error: null });
        try {
            await axios.delete(`${API_URL}/${id}`, {
                headers: {
                    "authorization": `Bearer ${useUsersStore.getState().token}`,
                },
            });
            set((state) => ({
                banners: state.banners.filter((item) => item.id !== id),
                isLoading: false,
            }));
            notification.success({
                message: "Success !",
                description: "The banner was deleted successfully!",
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
