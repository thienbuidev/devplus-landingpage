"use client";

import { QueryClient } from "@tanstack/react-query";

interface QueryClientDefaultOptions {
  queries: {
    staleTime: number;
    refetchOnWindowFocus: boolean;
    placeholderData: (prevData: unknown) => unknown;
  };
}

export const getQueryClient = (): QueryClient =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        placeholderData: (prevData: unknown): unknown => prevData,
      },
    } as QueryClientDefaultOptions,
  });
