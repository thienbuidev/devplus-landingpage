"use client";

import { useEffect, useState } from "react";

type FetchOptions<T> = {
  fetchFn: () => Promise<T>;
  enabled?: boolean;
  dependencies?: number | string | boolean;
};

export const useFetchData = <T>({
  fetchFn,
  enabled = true,
  dependencies,
}: FetchOptions<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (!enabled) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchFn();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchFn, enabled, dependencies]);

  return { data, isLoading, error };
};
