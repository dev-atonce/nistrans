import { create } from "zustand";
import axios from "axios";
import { UsersProps, UsersState, ApiResponse } from "../types/usersType";
import { notification } from "antd";

const API_URL = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/users`;

export const useUsersStore = create<UsersState>((set) => ({
  users: [],
  isLoading: false,
  error: null,

  token: null,

  role: "",
  user: "",
  id: "",

  total: 0,
  lastPage: 0,
  currPage: 1,

  initializeAuth: async () => {
    try {
      const token = localStorage.getItem("token");
      const userData = JSON.parse(localStorage.getItem("user") || "{}");

      await axios.get<any>(`${API_URL}/check/auth`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      set({
        token: token,
        role: userData?.role || "",
        user: userData?.username || "",
        id: userData?.id || "",
      });

      return true;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      notification.error({
        message: "Fail!",
        description: error.message,
      });
      return false;
    }
  },

  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      const { accessToken, userData } = response.data;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("user", JSON.stringify(userData));
      set({
        token: accessToken,
        role: userData.role,
        user: userData.username,
      });
      notification.success({
        message: "Success!",
        description: "Login successfully!",
      });
      return true;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      notification.error({
        message: "Fail!",
        description: error.message,
      });
      return false;
    }
  },

  logout: async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({
      token: null,
      role: "",
      user: "",
      id: "",
    });
  },

  fetchUsers: async (page: number) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get<ApiResponse>(`${API_URL}?page=${page}`,
        {
          headers: {
            authorization: `Bearer ${useUsersStore.getState().token}`,
          },
        }
      );

      const { total, lastPage, currPage, rows } = response.data;

      let filteredRows = rows;
      const userData = JSON.parse(localStorage.getItem("user") || "{}");
      if (userData?.role != "super") {
        filteredRows = rows.filter((item) => item?.role !== "super");
      } else if (userData?.role === "user") {
        filteredRows = [];
      }
      set({
        users: filteredRows,
        total,
        lastPage,
        currPage,
        isLoading: false,
      });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  fetchUserById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get<UsersProps>(`${API_URL}/${id}`, {
        headers: {
          authorization: `Bearer ${useUsersStore.getState().token}`,
        },
      });

      set((state) => ({
        ...state,
        users: [response.data],
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

  createUser: async (newUser) => {
    try {
      const response = await axios.post<UsersProps>(API_URL, newUser, {
        headers: {
          authorization: `Bearer ${useUsersStore.getState().token}`,
        },
      });
      set((state) => ({
        users: [...state.users, response.data],
        isLoading: false,
      }));
      notification.success({
        message: "Success !",
        description: "The User was created successfully!",
      });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      notification.error({
        message: "Fail !",
        description: error.message,
      });
    }
  },

  updateUser: async (id, updatedUser) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.put<UsersProps>(
        `${API_URL}/${id}`,
        updatedUser,
        {
          headers: {
            authorization: `Bearer ${useUsersStore.getState().token}`,
          },
        }
      );
      set((state) => ({
        users: state.users.map((item) =>
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

  onChangeStatus: async (id, status) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.put<UsersProps>(
        `${API_URL}/${id}`,
        { status },
        {
          headers: {
            authorization: `Bearer ${useUsersStore.getState().token}`,
          },
        }
      );
      set((state) => ({
        banners: state.users.map((item) =>
          item.id === id ? response.data : item
        ),
        isLoading: false,
      }));
      notification.success({
        message: "Success !",
        description: "The User status change successfully!",
      });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      notification.error({
        message: "Fail !",
        description: error.message,
      });
    }
  },

  deleteUser: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          authorization: `Bearer ${useUsersStore.getState().token}`,
        },
      });
      set((state) => ({
        users: state.users.filter((item) => item.id !== id),
        isLoading: false,
      }));
      notification.success({
        message: "Success !",
        description: "The user was deleted successfully!",
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
