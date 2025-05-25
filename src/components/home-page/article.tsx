import { articleAPI } from "services/article.query";
import { ArticlePagination } from "./ArticlePagination";
import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";
import { api } from "libs/api";
export default async function Article() {
  const queryClient = new QueryClient();
  await articleAPI.prefetch(queryClient, {
    query: { "pagination[page]": 1, "pagination[pageSize]": 3 },
  });

  return (
    <div className="bg-gray-300 p-10 my-16">
      <div className="container">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ArticlePagination />
        </HydrationBoundary>
      </div>
    </div>
  );
}
