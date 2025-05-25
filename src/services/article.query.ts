import { Article } from "types";
import { createQueryResource } from "../libs/queryFactory";
import { StrapiResponse } from "types/strapiResponse";

export const articleAPI = createQueryResource<StrapiResponse<Article>>("articles","articles");
