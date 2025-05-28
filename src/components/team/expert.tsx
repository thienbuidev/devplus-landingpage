"use server";
import { getExperts } from "services/expert.query";
import WithQueryPrefetch from "../cross-data-ssr/WithQueryPrefetch";
import { ExpertList } from "./ExpertList";

export default async function ExpertPage() {
  return (
    <div className="w-full px-10 md:px-20 lg:px-40 py-10 bg-gray-100">
      <WithQueryPrefetch prefetchFn={getExperts(null,null).prefetch}>
        <ExpertList />
      </WithQueryPrefetch>
    </div>
  );
}
