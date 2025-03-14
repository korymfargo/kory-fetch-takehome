import axios from "axios";

const baseURL = "https://frontend-take-home-service.fetch.com/";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
