import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class CommonHttpClient {
  client: AxiosInstance;

  constructor({ config }: { config: AxiosRequestConfig }) {
    this.client = axios.create(config);
  }

  get<T>(url: string, config?: AxiosRequestConfig) {
    return this.client.get<T>(url, config).then(({ data }) => data);
  }

  post<T>(url: string, body?: any, config?: AxiosRequestConfig) {
    return this.client.post<T>(url, body, config).then(({ data }) => data);
  }

  put<T>(url: string, body?: any, config?: AxiosRequestConfig) {
    return this.client.put<T>(url, body, config).then(({ data }) => data);
  }

  delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.client.delete<T>(url, config).then(({ data }) => data);
  }
}

export { CommonHttpClient };
