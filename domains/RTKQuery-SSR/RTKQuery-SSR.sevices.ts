import { createApi } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { axiosBaseQuery } from "../../utils/apiUtil";

export const RTKQuerySSRApi = createApi({
  reducerPath: "RTKQuerySSR",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  refetchOnMountOrArgChange: true,
  //cache time in seconds
  keepUnusedDataFor: 0,
  refetchOnReconnect: true,

  endpoints(build) {
    return {
      getPhotos: build.query<any, null>({
        query: () => ({
          url: `/photos`,
          method: "GET",
        }),

        transformResponse(response: any) {
          return response;
        },
      }),
    };
  },
});

export const { useGetPhotosQuery } = RTKQuerySSRApi;

export const { getPhotos } = RTKQuerySSRApi.endpoints;
