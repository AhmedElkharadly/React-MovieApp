import { axiosInstance } from "./axiosConfig";

export const getMoviesDetails = (id) => {
  return axiosInstance.get(`${id}`);
};

export const getMovies = (pageNum) => {
  return axiosInstance.get();
};