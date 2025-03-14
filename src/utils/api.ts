import { axiosInstance } from "./axios";

export function login(name: string, email: string) {
  return axiosInstance.post("/auth/login", {
    name,
    email,
  });
}

export function logout() {
  return axiosInstance.post("/auth/logout");
}

export function fetchBreeds(): Promise<Array<string>> {
  return axiosInstance
    .get<Array<string>>("/dogs/breeds")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("Failed to fetch breeds", err);

      return [];
    });
}
