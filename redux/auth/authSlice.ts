import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: null | any;
  token: string | null;
}
const initialState = {
  user: null,
  token: null,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.token = accessToken;
      if (user) {
        state.user = user;
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});
export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
