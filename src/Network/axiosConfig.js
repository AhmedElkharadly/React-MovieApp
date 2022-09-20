import axios from 'axios'


export const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=40b9cd171d9532635ec61365b799928f&page=8',
  });