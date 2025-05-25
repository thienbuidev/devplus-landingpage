// lib/queryFactory.ts
import { api, APIOptions } from './api';
import {
  useQuery,
  UseQueryOptions,
  useQueryClient,
  QueryClient,
  QueryKey,
} from '@tanstack/react-query';


export function createQueryResource<TResponse>(
  key: string, path: string
) {


  function getQueryKey(options?: APIOptions): QueryKey {
    return [key, options?.params || {}, options?.query || {}];
  }

  function getQueryOptions(options?: APIOptions) {
    return {
      queryKey: getQueryKey(options),
      queryFn: () => api(path, options),
    };
  }

  function useQueryResource(
    options?: APIOptions,
    queryOptions?: Partial<UseQueryOptions<TResponse>>
  ) {
    return useQuery({
      ...getQueryOptions(options),
      ...queryOptions,
    });
  }

  function useClient() {
    return useQueryClient();
  }

  async function prefetch(client: QueryClient, options?: APIOptions) {
    return client.prefetchQuery(getQueryOptions(options));
  }

  return {
    // Client-side
    useQuery: useQueryResource,
    useClient,

    // Server-side
    prefetch,
    getQueryOptions,
  };
}
