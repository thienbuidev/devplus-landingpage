import { University, Service, Article } from "types";
import { methods, urls } from "../constants";
import { request } from "../libs";
import { StrapiResponse } from "types/strapiResponse";

export const getUniversity = async (
  onSuccess?: (data: StrapiResponse<University>) => void,
  onError?: (error: unknown) => void
) => {
  return request<University>({
    method: methods.get,
    url: urls.university,
    onSuccess,
    onError,
  });
};

export const getService = async (
  onSuccess?: (data: StrapiResponse<Service>) => void,
  onError?: (error: unknown) => void
) => {
  return request<Service>({
    method: methods.get,
    url: urls.service,
    onSuccess,
    onError,
  });
};
export const getArticle = async (
  page: number,
  limit: number,
  onSuccess?: (data: StrapiResponse<Article>) => void,
  onError?: (error: unknown) => void
) => {
  return request<Article>({
    method: methods.get,
    url: urls.article,
    onSuccess,
    onError,
    params: { "pagination[page]": page, "pagination[pageSize]": limit },
  });
};
