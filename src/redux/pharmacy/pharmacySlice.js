import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { filterOrdersByName, getAllOrders, getDashboard } from "./pharmacyOps";

const initialState = {
  dashboard: {
    totalProducts: null,
    totalSuppliers: null,
    totalCustomers: null,
    latestCustomers: [],
    incomeExpenses: [],
  },
  allOrders: [],
  isLoading: false,
  isError: false
};

const pharmacySlice = createSlice({
  name: "pharmacy",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDashboard.fulfilled, (state, action) => {
        state.dashboard = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.allOrders = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(filterOrdersByName.fulfilled, (state, action) => {
        state.allOrders = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addMatcher(
        isAnyOf(
          getDashboard.pending,
          getAllOrders.pending,
          filterOrdersByName.pending,
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getDashboard.rejected,
          getAllOrders.rejected,
          filterOrdersByName.rejected,
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      );
  },
});

export default pharmacySlice.reducer;