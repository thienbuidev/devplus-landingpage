import { getArticle } from "services";
import { ArticlePagination } from "./ArticlePagination";

export default async function Content() {
  const articleData = await getArticle(1, 3);

  return (
    <div className="bg-gray-300 p-10 my-16">
      <div className="container">
        <ArticlePagination articleData={articleData} />
      </div>
    </div>
  );
}
