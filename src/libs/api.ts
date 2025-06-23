export interface APIOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  params?: Record<string, string | number>;
  query?: Record<string, string | number>;
  body?: unknown;
  headers?: Record<string, string>;
  next?: { revalidate?: number; tags?: string[] };
}
export async function api(path: string, options: APIOptions = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  console.log("object", path, baseUrl);

  if (options.params) {
    for (const key in options.params) {
      path = path.replace(
        `:${key}`,
        encodeURIComponent(String(options.params[key]))
      );
    }
  }

  let queryString = "";
  if (options.query) {
    const searchParams = new URLSearchParams();
    for (const key in options.query) {
      searchParams.append(key, String(options.query[key]));
    }
    queryString = `?${searchParams.toString()}`;
  }

  const fullUrl = `${baseUrl}/${path}${queryString}`;

  console.log("object", fullUrl);

  const res = await fetch(fullUrl, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
    next: options.next || { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}: ${res.statusText}`);
  }

  return res.json();
}
