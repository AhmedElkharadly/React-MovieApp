import axios from "axios";
import { SET_PAGE } from "./types";

export const getMovies = (pageNum, lang) => (dispatch) => {
  const res = axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?page=${pageNum}&language=${lang}&api_key=40b9cd171d9532635ec61365b799928f`
    )
    .then((response) => {
      let result = response.data;
      dispatch({ type: SET_PAGE, payload: result });
    })
    .catch((err) => console.log("data err", err));
};
