import { createSelector } from "@reduxjs/toolkit";


export const selectUserName = (state) => state.user.user.name;
export const selectUserEmail = (state) => state.user.user.email;
export const selectUserToken = (state) => state.user.user.token;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectIsLoading = (state) => state.user.isLoading;
export const selectIsError = (state) => state.user.isError;

export const selectDashboard = (state) => state.pharmacy.dashboard;

export const selectAllOrders = (state) => state.pharmacy.orders;

export const selectOrders = createSelector(
    [(state) => state.pharmacy.orders, (state) => state.pharmacy.currentPage, (state) => state.pharmacy.itemsPerPage],
    (orders, currentPage, itemsPerPage) => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return orders.slice(startIndex, endIndex);
    }
  );

  export const selectCustomers = createSelector(
    [(state) => state.pharmacy.customers, (state) => state.pharmacy.currentPage, (state) => state.pharmacy.itemsPerPage],
    (customers, currentPage, itemsPerPage) => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return customers.slice(startIndex, endIndex);
    }
  );

  export const selectProducts = createSelector(
    [(state) => state.pharmacy.products, (state) => state.pharmacy.currentPage, (state) => state.pharmacy.itemsPerPage],
    (products, currentPage, itemsPerPage) => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return products.slice(startIndex, endIndex);
    }
  );
  
  export const selectTotalPages = (state) => state.pharmacy.totalPages;
  export const selectCurrentPage = (state) => state.pharmacy.currentPage;



