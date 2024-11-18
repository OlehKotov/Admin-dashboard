import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getDashboard } from "./pharmacyOps";

const initialState = {
  dashboard: {
    totalProducts: null,
    totalSuppliers: null,
    totalCustomers: null,
    latestCustomers: [],
    incomeExpenses: [],
  },
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
      .addMatcher(
        isAnyOf(
          getDashboard.pending,
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getDashboard.rejected,
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      );
  },
});

export default pharmacySlice.reducer;