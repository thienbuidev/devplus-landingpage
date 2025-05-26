import { dehydrate, QueryClient } from '@tanstack/react-query';
import HydratedQuery from './HydratedQuery';

type WithQueryPrefetchProps = {
  prefetchFn: (client: QueryClient) => Promise<void>;
  children: React.ReactNode;
};

export default async function WithQueryPrefetch({
  prefetchFn,
  children,
}: WithQueryPrefetchProps) {
  const client = new QueryClient();
  await prefetchFn(client);

  return (
    <HydratedQuery state={dehydrate(client)}>
      {children}
    </HydratedQuery>
  );
}
