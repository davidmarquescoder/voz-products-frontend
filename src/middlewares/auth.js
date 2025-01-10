import AuthService from "@/services/auth/AuthService";

// Middleware
export default async function guard( to, from, next) {
  const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);
  
  return await AuthService.auth(token)
  .then(() => { return next(); })
  .catch(() => { return next({ name: "Login" }); })
}
