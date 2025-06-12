import { Article } from "types";
import { createQueryResource } from "../libs/queryFactory";
import { StrapiResponse } from "types/strapiResponse";

export const getArticles = (page: number) =>
  createQueryResource<StrapiResponse<Article>>("articles", "articles", {
    query: { "pagination[page]": page, "pagination[pageSize]": 3 },
  });
