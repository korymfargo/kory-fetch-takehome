import { axiosInstance } from "./axios";

export function login(name: string, email: string) {
  return axiosInstance.post("/auth/login", {
    name,
    email,
  });
}
