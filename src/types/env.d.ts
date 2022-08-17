// Add all .env variables here to prevent typescript error
declare module "@env" {
  export const API_BASE: string;
}
