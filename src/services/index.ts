import { Test } from "types";
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
