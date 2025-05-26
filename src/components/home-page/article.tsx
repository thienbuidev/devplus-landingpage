import { getArticles } from "services/article.query";
import { ArticlePagination } from "./ArticlePagination";
import WithQueryPrefetch from "../cross-data-ssr/WithQueryPrefetch";

export default async function Article() {
  return (
    <div className="bg-gray-300 p-10 my-16">
      <div className="container">
        <WithQueryPrefetch prefetchFn={getArticles(1).prefetch}>
          <ArticlePagination />
        </WithQueryPrefetch>
      </div>
    </div>
  );
}
