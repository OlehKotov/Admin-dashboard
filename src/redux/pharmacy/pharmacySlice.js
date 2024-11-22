// import { createSlice, isAnyOf } from "@reduxjs/toolkit";
// import { filterOrdersByName, getOrders, getDashboard, getCustomers, filterCustomersByName, getProducts, filterProductsByName, addNewProduct, deleteProduct, updateProduct } from "./pharmacyOps";

// const initialState = {
//   dashboard: {
//     totalProducts: null,
//     totalSuppliers: null,
//     totalCustomers: null,
//     latestCustomers: [],
//     incomeExpenses: [],
//   },
//   orders: [],
//   customers: [],
//   products: [],
//   currentPage: 1,
//   itemsPerPage: 5, 
//   totalPages: 0,
//   isLoading: false,
//   isError: false
// };

// const pharmacySlice = createSlice({
//   name: "pharmacy",
//   initialState,
//   reducers: {
//     setCurrentPage(state, action) {
//       state.currentPage = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getDashboard.fulfilled, (state, action) => {
//         state.dashboard = action.payload;
//         state.isLoading = false;
//         state.isError = false;
//       })
//       .addCase(getOrders.fulfilled, (state, action) => {
//         state.orders = action.payload;
//         state.totalPages = Math.ceil(action.payload.length / state.itemsPerPage);
//         state.isLoading = false;
//         state.isError = false;
//       })
//       .addCase(filterOrdersByName.fulfilled, (state, action) => {
//         state.orders = action.payload;
//         state.isLoading = false;
//         state.isError = false;
//       })
//       .addCase(getCustomers.fulfilled, (state, action) => {
//         state.customers = action.payload;
//         state.totalPages = Math.ceil(action.payload.length / state.itemsPerPage);
//         state.isLoading = false;
//         state.isError = false;
//       })
//       .addCase(filterCustomersByName.fulfilled, (state, action) => {
//         state.customers = action.payload;
//         state.isLoading = false;
//         state.isError = false;
//       })
//       .addCase(getProducts.fulfilled, (state, action) => {
//         state.products = action.payload;
//         state.totalPages = Math.ceil(action.payload.length / state.itemsPerPage);
//         state.isLoading = false;
//         state.isError = false;
//       })
//       .addCase(filterProductsByName.fulfilled, (state, action) => {
//         state.products = action.payload;
//         state.isLoading = false;
//         state.isError = false;
//       })
//       .addCase(addNewProduct.fulfilled, (state, action) => {
//         state.products.push(action.payload);
//         state.isLoading = false;
//         state.isError = false;
//       })
//       .addCase(deleteProduct.fulfilled, (state, action) => {
//         state.products = state.products.filter(
//           (product) => product._id !== action.payload
//         );
//         state.isLoading = false;
//         state.isError = false;
//       })
//       .addCase(updateProduct.fulfilled, (state, action) => {
//         const index = state.products.findIndex(
//           (product) => product._id === action.payload._id
//         );
//         if (index !== -1) {
//           state.products[index] = action.payload;
//         }
//         state.isLoading = false;
//         state.isError = false;
//       })
//       .addMatcher(
//         isAnyOf(
//           getDashboard.pending,
//           getOrders.pending,
//           filterOrdersByName.pending,
//           getCustomers.pending,
//           filterCustomersByName.pending,
//           getProducts.pending,
//           filterProductsByName.pending,
//           addNewProduct.pending,
//           deleteProduct.pending,
//           updateProduct.pending,
//         ),
//         (state) => {
//           state.isLoading = true;
//           state.isError = false;
//         }
//       )
//       .addMatcher(
//         isAnyOf(
//           getDashboard.rejected,
//           getOrders.rejected,
//           filterOrdersByName.rejected,
//           getCustomers.rejected,
//           filterCustomersByName.rejected,
//           getProducts.rejected,
//           filterProductsByName.rejected,
//           addNewProduct.rejected,
//           deleteProduct.rejected,
//           updateProduct.rejected,
//         ),
//         (state) => {
//           state.isLoading = false;
//           state.isError = true;
//         }
//       );
//   },
// });

// export const { setCurrentPage } = pharmacySlice.actions;

// export default pharmacySlice.reducer;