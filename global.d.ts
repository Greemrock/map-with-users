declare module "*.scss";

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_SERVER: string;
    REACT_APP_PORT: string;
    REACT_APP_USERNAME: string;
    REACT_APP_PASSWORD: string;
  }
}
