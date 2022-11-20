import { createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials } from "./auth/authSlice";
import { RootState } from "./store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReAuth = async (args: string | FetchArgs, api: any, extraOptions: {}) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 403) {
    console.log("sending refresh token");

    let refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
    console.log(refreshResult);

    if (refreshResult?.data) {
      api.dispatch(setCredentials({ ...refreshResult.data }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      return refreshResult;
    }
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});
