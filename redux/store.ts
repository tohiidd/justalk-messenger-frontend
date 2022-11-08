import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import authSlice from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
