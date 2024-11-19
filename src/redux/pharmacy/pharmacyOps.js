import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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

  export const getAllOrders = createAsyncThunk(
    "pharmacy/allOrders",
    async (_, { getState, rejectWithValue }) => {
      const state = getState();
      const token = state.user.user.token;
      
      if (!token) {
        return rejectWithValue("No token found");
      }
  
      try {
        const { data } = await instance.get("/orders", {
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

  export const filterOrdersByName = createAsyncThunk(
    'pharmacy/filterOrdersByName',
    async (name, { getState, rejectWithValue }) => {
      const state = getState();
      const token = state.user.user.token;
  
      if (!token) {
        return rejectWithValue('No token found');
      }
  
      try {
        const { data } = await instance.get(`/orders?name=${name}`, {
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