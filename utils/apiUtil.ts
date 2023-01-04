import axios, { AxiosError } from "axios";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosBaseQueryError, QueryProps } from "./index.d";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl?: string } = { baseUrl: "" }
  ): BaseQueryFn<QueryProps, unknown, AxiosBaseQueryError> =>
  async ({ url, method, data, responseType = "json" }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        responseType,
        data,
      });
      return {
        data: result.data,
      };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          ...err.response,
        },
      };
    }
  };
