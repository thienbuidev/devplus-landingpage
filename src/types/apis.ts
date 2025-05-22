import { AxiosRequestConfig } from "axios";
import { StrapiResponse } from "./strapiResponse";

export interface RequestOptions<T> {
  method: AxiosRequestConfig["method"];
  headers?: Record<string, string>;
  url: string;
  data?: unknown;
  params?: unknown;
  onSuccess?: (data: StrapiResponse<T>) => void;
  onError?: (error: unknown) => void;
}
