import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; 

export const instance = axios.create({
  baseURL: "https://admin-dashboard-bd-app.onrender.com/api",
});

export const getDashboard = createAsyncThunk(
    "pharmacy/dashboard",
    async (_, { getState, rejectWithValue }) => {
      const state = getState();
      const token = state.user.user.token;
      
      if (!token) {
        return rejectWithValue("No token found");
      }
  
      try {
        const { data } = await instance.get("/dashboard", {
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