const BASE_URL = "http://localhost:4444/api";

type RestApiParams = {
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
};

export default async function restApi<T>({
  endpoint,
  method,
  body,
}: RestApiParams): Promise<T> {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data: T = await res.json();
  return data;
}
