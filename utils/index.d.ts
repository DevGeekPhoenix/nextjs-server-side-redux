import { ResponseType } from "axios/index.d";

export interface AxiosBaseQueryError {
  isSuccessful?: boolean;
  message?: string;
  status?: number;
}

export interface QueryProps {
  url: string;
  method: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  responseHandler?(response: any): void;
  responseType?: ResponseType;
  headers?: AxiosRequestHeaders;
}
