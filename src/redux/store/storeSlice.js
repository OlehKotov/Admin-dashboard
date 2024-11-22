import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addNewProduct,
  deleteProduct,
  filterCustomersByName,
  filterOrdersByName,
  filterProductsByName,
  getDashboard,
  filterSuppliersByName,
  login,
  logout,
  updateProduct,
} from "./storeOps";

const initialState = {
  token: null,
  isLoggedIn: false,
  dashboard: {
    totalProducts: null,
    totalSuppliers: null,
    totalCustomers: null,
    latestCustomers: [],
    incomeExpenses: [],
    user: {
      id: null,
      name: null,
      email: null,
    },
  },
  orders: [],
  customers: [],
  products: [],
  suppliers: [],
  currentPage: 1,
  itemsPerPage: 5,
  totalPages: 0,
  isLoading: false,
  isError: false,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(getDashboard.fulfilled, (state, action) => {
        state.dashboard = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(filterOrdersByName.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.totalPages = Math.ceil(
          action.payload.length / state.itemsPerPage
        );
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(filterCustomersByName.fulfilled, (state, action) => {
        state.customers = action.payload;
        state.totalPages = Math.ceil(
          action.payload.length / state.itemsPerPage
        );
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(filterProductsByName.fulfilled, (state, action) => {
        state.products = action.payload;
        state.totalPages = Math.ceil(
          action.payload.length / state.itemsPerPage
        );
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product._id !== action.payload
        );
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload.data;
        const index = state.products.findIndex(
          (product) => product._id === updatedProduct._id
        );
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(filterSuppliersByName.fulfilled, (state, action) => {
        state.suppliers = action.payload;
        state.totalPages = Math.ceil(
          action.payload.length / state.itemsPerPage
        );
        state.isLoading = false;
        state.isError = false;
      })
      .addMatcher(
        isAnyOf(
          login.pending,
          logout.pending,
          getDashboard.pending,
          filterOrdersByName.pending,
          filterCustomersByName.pending,
          filterProductsByName.pending,
          addNewProduct.pending,
          deleteProduct.pending,
          updateProduct.pending,
          filterSuppliersByName.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          login.rejected,
          logout.rejected,
          getDashboard.rejected,
          filterOrdersByName.rejected,
          filterCustomersByName.rejected,
          filterProductsByName.rejected,
          addNewProduct.rejected,
          deleteProduct.rejected,
          updateProduct.rejected,
          filterSuppliersByName.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      );
  },
});

export const { setCurrentPage } = storeSlice.actions;

export default storeSlice.reducer;
