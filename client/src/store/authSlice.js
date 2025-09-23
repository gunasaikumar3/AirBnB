// store/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, refreshApi, logoutApi } from "../api/authApi.js";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const res = await loginApi(email, password);
    return res.access;
  }
);

export const refresh = createAsyncThunk("auth/refresh", async () => {
  const res = await refreshApi();
  return res.access;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await logoutApi();
  return null;
});

const authSlice = createSlice({
  name: "auth",
  initialState: { access: null, status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(refresh.pending, (state) => {
        state.status = "loading";
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.access = action.payload;
        state.status = "succeeded";
      })
      .addCase(refresh.rejected, (state) => {
        state.access = null;
        state.status = "failed";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.access = action.payload;
        state.status = "succeeded";
      })
      .addCase(logout.fulfilled, (state) => {
        state.access = null;
        state.status = "idle";
      });
  },
});

export default authSlice.reducer;
