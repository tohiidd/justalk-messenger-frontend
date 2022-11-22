import { api } from "redux/api";

const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.mutation({
      query: (query) => ({
        url: `users?${query}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserMutation } = usersApi;
