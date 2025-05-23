import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { envVariables } from "../constants/envVars";
import { RequestOptions } from "types";
import { StrapiResponse } from "types/strapiResponse";

// 1. Create instance axios
const AXIOS: AxiosInstance = axios.create({
  baseURL: envVariables.apiUrl || "http://localhost:1337/api",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json;charset=utf-8",
  },
});

// 2. Interceptor logic for request and response
const onRequest = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  console.info(
    `[request] [${config.method?.toUpperCase()} ${config.url} ${
      config.baseURL
    }]`
  );
  //   const token = await helper.getToken();
  //   if (token) {
  //     config.headers.Authorization = `Bearer ${token}`;
  //   }
  return config;
};

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = async (response: AxiosResponse): Promise<AxiosResponse> => {
  console.info(`[response] [${response.status}]`);
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  console.error(`[response error]`, error);

  //   if (error.response?.status === 401) {
  //     await helper.removeToken();
  //   }

  return Promise.reject(error);
};

// 3. Add interceptor into instance
export function setupInterceptorsTo(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}

// 4. Add to main instance
setupInterceptorsTo(AXIOS);

// 5. Function to call API

const request = async <T>({
  method,
  headers = {},
  url,
  data,
  params,
  onSuccess,
  onError,
}: RequestOptions<T>): Promise<StrapiResponse<T>> => {
  try {
    const response = await AXIOS({
      method,
      headers,
      url,
      data,
      params,
    });

    onSuccess?.(response.data as StrapiResponse<T>);
    return response.data as StrapiResponse<T>;
  } catch (error) {
    const errorMessage = axios.isAxiosError(error)
      ? error.response?.data || "Unknown Axios error"
      : error instanceof Error
      ? error.message
      : "Unknown error";

    onError?.(errorMessage);
    throw new Error(errorMessage);
  }
};

export { AXIOS, request };
