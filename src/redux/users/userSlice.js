import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getCurrentUser,
  login,
  logout,
} from "./userOps";

const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
    token: null,
  },
  isLoggedIn: false,
  isLoading: false,
  isError: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.token = action.payload.token;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.id = action.payload._id;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addMatcher(
        isAnyOf(
          login.pending,
          getCurrentUser.pending,
          logout.pending,
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          login.rejected,
          getCurrentUser.rejected,
          logout.rejected,
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      );
  },
});

export default userSlice.reducer;
