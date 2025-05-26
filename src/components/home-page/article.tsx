import { getArticle } from "services";
import { ArticlePagination } from "./ArticlePagination";

export default async function Content() {
  const articleData = await getArticle(1, 3);

  return (
    <div className="bg-gray-300 p-0 md:p-10 py-2 md:py-6 my-16">
      <div className="container">
        <ArticlePagination articleData={articleData} />
      </div>
    </div>
  );
}
