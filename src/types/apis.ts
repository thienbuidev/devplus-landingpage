import { AxiosRequestConfig } from "axios";

export interface RequestOptions<T> {
  method: AxiosRequestConfig["method"];
  headers?: Record<string, string>;
  url: string;
  data?: unknown;
  onSuccess?: (data: T) => void;
  onError?: (error: unknown) => void;
}
