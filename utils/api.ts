export const apiFetch = async <T>(
  path: string,
  opts: {
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    body?: Record<string, unknown>;
    headers?: HeadersInit;
    params?: Record<string, unknown>;
  } = {}
): Promise<T> => {
  const config = useRuntimeConfig();
  const token = useCookie("token")?.value;

  return await $fetch<T>(`${config.public.apiBaseUrl}${path}`, {
    method: opts.method || "GET",
    body: opts.body,
    params: opts.params,
    headers: {
      ...opts.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
};
