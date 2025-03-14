import axios, { AxiosResponse, AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const baseURL = "https://frontend-take-home-service.fetch.com/";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export const useAPIGuard = () => {
  const navigate = useNavigate();

  axiosInstance.interceptors.response.use(
    (respnse: AxiosResponse) => respnse,
    (err: AxiosError) => {
      if (err.response?.status === 401) {
        console.error("Unauthorized! Session expired!");
        navigate("/login");
      }

      return Promise.reject(err);
    }
  );
};
