import { University, Service } from "types";
import { methods, urls } from "../constants";
import { request } from "../libs";

export const getUniversity = async (
  onSuccess?: (data: University[]) => void,
  onError?: (error: unknown) => void
) => {
  return request<University[]>({
    method: methods.get,
    url: urls.university,
    onSuccess,
    onError,
  });
};

export const getService = async (
  onSuccess?: (data: Service[]) => void,
  onError?: (error: unknown) => void
) => {
  return request<Service[]>({
    method: methods.get,
    url: urls.service,
    onSuccess,
    onError,
  });
};
