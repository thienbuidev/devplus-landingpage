// lib/queryFactory.ts
import { api, APIOptions } from './api';
import {
  useQuery,
  UseQueryOptions,
  QueryClient,
  QueryKey,
} from '@tanstack/react-query';


export function createQueryResource<TResponse>(
  key: string, path: string, options: APIOptions
) {

  function getQueryKey(): QueryKey {
    return [key, options?.params || {}, options?.query || {}];
  }

  function getQueryOptions() {
    return {
      queryKey: getQueryKey(),
      queryFn: () => api(path, options),
    };
  }

  function useQueryResource(
    queryOptions?: Partial<UseQueryOptions<TResponse>>
  ) {
    return useQuery({
      ...getQueryOptions(),
      ...queryOptions,
    });
  }

  async function prefetch(client: QueryClient) {
    return client.prefetchQuery(getQueryOptions());
  }

  return {
    useQuery: useQueryResource,
    prefetch,
  };
}
