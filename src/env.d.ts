interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly NG_APP_ENV: string;
  readonly NG_APP_PRODUCTION: boolean;
}
