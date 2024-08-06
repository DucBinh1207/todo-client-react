import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4444",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 1000, // nếu vượt quá timeout thì sẽ ngừng request (throw về error)
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // if (error.response.status === 404) {
    //   window.location.replace("/404");
    // }
    console.log(error);

    return Promise.reject(error);
  },
);

export const get = <T>({
  url,
  params,
  config,
}: {
  url: string;
  params?: AxiosRequestConfig["params"];
  config?: AxiosRequestConfig;
}): Promise<T> => apiClient.get(url, { url, params, ...config });

export const post = ({
  url,
  data,
  config,
}: {
  url: string;
  data: unknown;
  config?: AxiosRequestConfig;
}) => apiClient.post(url, data, config);

export const update = ({
  url,
  data,
  config,
}: {
  url: string;
  data: unknown;
  config?: AxiosRequestConfig;
}) => apiClient.put(url, data, config);

export const remove = ({ url }: { url: string }) => apiClient.delete(url);
