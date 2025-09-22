import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, refreshApi, logoutApi } from "../api/authApi.js";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const res = await loginApi(email, password); // should return { access }
    return res.access; // ✅ This line is the key
  }
);

export const refresh = createAsyncThunk("auth/refresh", async () => {
  const res = await refreshApi(); // should return { access }
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
      .addCase(login.fulfilled, (state, action) => {
        state.access = action.payload; // ✅ just token string
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.access = action.payload; // ✅ just token string
      })
      .addCase(logout.fulfilled, (state) => {
        state.access = null;
      });
  },
});

export default authSlice.reducer;
