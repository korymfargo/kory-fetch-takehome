import { axiosInstance } from "./axios";
import {
  Dog,
  DogsFilter,
  ResponseFetchDog,
  ResponseSearchDog,
  SortOrder,
} from "@types";

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

export function fetchDogs(
  filter: DogsFilter,
  saveDogToStore: (dogs: Array<Dog>) => void,
  savedDogs: Record<string, Dog>
): Promise<ResponseFetchDog> {
  return new Promise((resolve) => {
    const params = buildParamsfromFilter(filter);
    axiosInstance
      .get<ResponseSearchDog>("/dogs/search", {
        params: params,
      })
      .then((res) => {
        // just retrieve dogIds which is not available in store
        const unAvailableDogs = res.data.resultIds.filter(
          (id) => !savedDogs[id]
        );

        // if all dogs returned by search is available then we don't need to call dogs api to fetch dog data
        if (unAvailableDogs.length === 0) {
          resolve(res.data.resultIds);

          return;
        }

        axiosInstance
          .post<Array<Dog>>("/dogs", unAvailableDogs)
          .then((response) => {
            const dogs: Array<Dog> = response.data;

            // Save fetched dogs to store
            saveDogToStore(dogs);

            resolve(res.data.resultIds);
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

function buildParamsfromFilter(filter: DogsFilter) {
  const params: {
    breeds?: string[];
    ageMin?: number;
    ageMax?: number;
    sort?: string;
    from?: number;
  } = {};

  if (filter.breeds && filter.breeds.filter((v) => !!v).length > 0) {
    params.breeds = [...filter.breeds];
  }
  params.ageMin = filter.minAge;
  params.ageMax = filter.maxAge;
  params.from = filter.from ?? 0;
  params.sort = filter.sort == SortOrder.ASC ? "breed:asc" : "breed:desc";

  return params;
}
