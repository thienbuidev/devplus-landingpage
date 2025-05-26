import { HydrationBoundary } from '@tanstack/react-query';

export default function HydratedQuery({
  children,
  state,
}: {
  children: React.ReactNode;
  state: unknown;
}) {
  return <HydrationBoundary state={state}>{children}</HydrationBoundary>;
}
