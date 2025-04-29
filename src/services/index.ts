import { Test, University } from "types";
import { methods, urls } from "../constants";
import { request } from "../libs";

export const getAllTestUser = async (
  onSuccess?: (data: Test[]) => void,
  onError?: (error: unknown) => void
) => {
  return request<Test[]>({
    method: methods.get,
    url: urls.test,
    onSuccess,
    onError,
  });
};

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
