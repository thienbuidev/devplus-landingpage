export interface StrapiResponse<T> {
  data: T[] | T;
  meta: { pagination: PaginationData };
}
export interface PaginationData {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
