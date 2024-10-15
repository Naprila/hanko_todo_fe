export const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const isProduction = process.env.NODE_ENV === "production";
export const BACKEND_URL = isProduction
  ? "https://hanko-todo-be.onrender.com"
  : "http://localhost:3001";

