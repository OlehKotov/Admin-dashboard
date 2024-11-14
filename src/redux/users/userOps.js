import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

export const instance = axios.create({
  baseURL: "https://admin-dashboard-bd-app.onrender.com/api",
});

export const login = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/user/login", userData);
      const token = data.data.accessToken;
      toast.success("Login successful!");
      return { userData: data.data, token };
    } catch (error) {
      toast.error(
        "Login failed: " + (error.response?.data?.message || "Unknown error")
      );
      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.user.user.token;
      if (!token) {
        return;
      }
      await instance.post("/user/logout", {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Logout successful!");
    } catch (error) {
      toast.error(
        "Logout failed: " + (error.response?.data?.message || "Unknown error")
      );
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "user/current",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.user.user.token;
    if (!token) {
      return rejectWithValue("No token found");
    }

    try {
      const { data } = await instance.get("/user/user-info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
