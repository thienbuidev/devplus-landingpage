import { Expert } from "types";
import { createQueryResource } from "../libs/queryFactory";
import { StrapiResponse } from "types/strapiResponse";

export const getExperts = (practice: string | null, name: string | null) =>
  createQueryResource<StrapiResponse<Expert>>("experts", "experts", {
    query: {
      "filters[practice][$containsi]": practice || "",
      "filters[name][$containsi]": name || "",
    },
  });
