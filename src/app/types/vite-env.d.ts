/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_REACT_ENV_API: string;
  readonly VITE_YANDEX_MAP_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
