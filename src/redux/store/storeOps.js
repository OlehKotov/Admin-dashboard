import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const instance = axios.create({
  baseURL: "https://admin-dashboard-bd-app.onrender.com/api",
});

export const login = createAsyncThunk(
  "store/login",
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
  "store/logout",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.store.token;
      if (!token) {
        return;
      }
      await instance.post(
        "/user/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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

export const getDashboard = createAsyncThunk(
  "store/dashboard",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.store.token;

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

export const filterOrdersByName = createAsyncThunk(
  "store/filterOrdersByName",
  async (name, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.store.token;

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

export const filterCustomersByName = createAsyncThunk(
  "store/filterCustomersByName",
  async (name, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.store.token;

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

export const filterProductsByName = createAsyncThunk(
  "store/filterProductsByName",
  async (name, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.store.token;

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
  "store/addNewProduct",
  async (productData, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.store.token;

    if (!token) {
      return rejectWithValue("No token found");
    }

    try {
      const { data } = await instance.post("/products", productData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Product successfully created!");
      return data.data;
    } catch (error) {
      toast.error("An error occurred while creating the product.");
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "store/deleteProduct",
  async (productId, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.store.token;

    if (!token) {
      return rejectWithValue("No token found");
    }

    try {
      await instance.delete(`/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Product successfully deleted!");
      return productId;
    } catch (error) {
      toast.error("An error occurred while deleting the product.");
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "store/updateProduct",
  async ({ productId, updatedData }, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.store.token;

    if (!token) {
      return rejectWithValue("No token found");
    }

    try {
      const response = await instance.put(
        `/products/${productId}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Product successfully updated!");
      return response.data;
    } catch (error) {
      toast.error("An error occurred while updating the product.");
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const filterSuppliersByName = createAsyncThunk(
  "store/filterSuppliersByName",
  async (name, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.store.token;

    if (!token) {
      return rejectWithValue("No token found");
    }

    try {
      const { data } = await instance.get(`/suppliers?name=${name}`, {
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
