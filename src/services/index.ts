const BASE_URL = "http://localhost:4444";

type RestApiParams = {
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
};

export default async function restApi<T>({
  endpoint,
  method,
  body,
}: RestApiParams): Promise<T> {
  console.log();
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(res);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data: T = await res.json();
  return data;
}
