import { CommonHttpClient } from './common-client';

const apiClient = new CommonHttpClient({
  config: { baseURL: 'https://hackatonbackend.ladyk3000.repl.co' },
});

export { apiClient };
