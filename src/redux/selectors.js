import { createSelector } from "@reduxjs/toolkit";

export const selectUserName = (state) => state.store.dashboard.user.name;
export const selectUserEmail = (state) => state.store.dashboard.user.email;
export const selectUserToken = (state) => state.store.token;
export const selectIsLoggedIn = (state) => state.store.isLoggedIn;
export const selectIsLoading = (state) => state.store.isLoading;
export const selectIsError = (state) => state.store.isError;
export const selectDashboard = (state) => state.store.dashboard;

export const selectOrders = createSelector(
  [
    (state) => state.store.orders,
    (state) => state.store.currentPage,
    (state) => state.store.itemsPerPage,
  ],
  (orders, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return orders.slice(startIndex, endIndex);
  }
);

export const selectCustomers = createSelector(
  [
    (state) => state.store.customers,
    (state) => state.store.currentPage,
    (state) => state.store.itemsPerPage,
  ],
  (customers, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return customers.slice(startIndex, endIndex);
  }
);

export const selectProducts = createSelector(
  [
    (state) => state.store.products,
    (state) => state.store.currentPage,
    (state) => state.store.itemsPerPage,
  ],
  (products, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return products.slice(startIndex, endIndex);
  }
);

export const selectSuppliers = createSelector(
  [
    (state) => state.store.suppliers,
    (state) => state.store.currentPage,
    (state) => state.store.itemsPerPage,
  ],
  (suppliers, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return suppliers.slice(startIndex, endIndex);
  }
);

export const selectTotalPages = (state) => state.store.totalPages;
export const selectCurrentPage = (state) => state.store.currentPage;
