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

export const getOrders = createAsyncThunk(
  "pharmacy/orders",
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
  "pharmacy/filterOrdersByName",
  async (name, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.user.user.token;

    if (!token) {
      return rejectWithValue("No token found");
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

export const getCustomers = createAsyncThunk(
  "pharmacy/customers",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.user.user.token;

    if (!token) {
      return rejectWithValue("No token found");
    }

    try {
      const { data } = await instance.get("/customers", {
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

export const filterCustomersByName = createAsyncThunk(
  "pharmacy/filterCustomersByName",
  async (name, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.user.user.token;

    if (!token) {
      return rejectWithValue("No token found");
    }

    try {
      const { data } = await instance.get(`/customers?name=${name}`, {
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

export const getProducts = createAsyncThunk(
  "pharmacy/products",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.user.user.token;

    if (!token) {
      return rejectWithValue("No token found");
    }

    try {
      const { data } = await instance.get("/products", {
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

export const filterProductsByName = createAsyncThunk(
  "pharmacy/filterProductsByName",
  async (name, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.user.user.token;

    if (!token) {
      return rejectWithValue("No token found");
    }

    try {
      const { data } = await instance.get(`/products?name=${name}`, {
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

export const addNewProduct = createAsyncThunk(
  "pharmacy/addNewProduct",
  async (productData, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.user.user.token;

    if (!token) {
      return rejectWithValue("No token found");
    }

    try {
      const { data } = await instance.post("/products", productData, {
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
