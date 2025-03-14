import { axiosInstance } from "./axios";
import { ResponseFetchDog, ResponseSearchDog } from "@types";

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

export function fetchDogs(): Promise<ResponseFetchDog> {
  return new Promise((resolve) => {
    axiosInstance
      .get<ResponseSearchDog>("/dogs/search")
      .then((res) => {
        axiosInstance
          .post<ResponseFetchDog>("/dogs", res.data.resultIds)
          .then((response) => {
            resolve(response.data);
          })
          .catch((err) => {
            console.error("Failed to fetch dogs!", err);
            resolve([]);
          });
      })
      .catch((err) => {
        console.error("Failed to fetch dogs!", err);
        resolve([]);
      });
  });
}
