import { api } from "./../api";

const uploadApi = api.injectEndpoints({
  endpoints: (build) => ({
    uploadImage: build.mutation<any, any>({
      query: (imageFile) => {
        const payload = new FormData();
        payload.append("image", imageFile);
        return {
          url: "file/upload",
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});
