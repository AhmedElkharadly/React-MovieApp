import axios from "axios";
import "./cardDetails.css";
import { favIc } from "../svg";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addFavorites, splcieFavorites } from "../../store/actions/favorites";

const CardDetails = () => {
  const [movie, setMovie] = useState({});
  // const [favor, setFavor] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const dispatch = useDispatch();

  const lang = useSelector((state) => state.pages.currentLangName);
  const favoriteList = useSelector((state) => state.favorite.favorites);
  const isFav = useSelector((state)=> state.favorite.isFav)

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}&language=${lang}?api_key=40b9cd171d9532635ec61365b799928f`
      )
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        error.message == "Request failed with status code 404"
          ? navigate("movies/*")
          : console.log(error);
      });
    console.log(id);
  }, []);

  const favAdding = (e) => {
    // setFavor((prevState) => ({
    //   favor: !prevState.favor,
    // }));
    // if (favor.favor) {
    //   e.target.style.fill = "red";
    // } else {
    //   e.target.style.fill = "white";
    // }
    // console.log(favor);
    // console.log(e);
    // setFavor({favor : !favor})
  };


  const addFavMovie = (movie) => {
    dispatch(addFavorites(movie));
  };
  const removeFavourite = (movie) => {
    dispatch(splcieFavorites(movie));
  };
  const handleFav = (e) => {
    if (favoriteList.includes(movie)) {
      removeFavourite(movie);
    } else {
      // e.target.style.fill == "red"
      addFavMovie(movie);
    }
    // console.log(movie)
  };
  return (
    <div dir={lang == "ar" ? "rtl" : "ltr"} className="cardDetailsContainer">
      <div className="cardDetailstextContainer">
        <span className="CardDetailsFavIc" style={
          {
            fill: isFav?.includes(movie?.id)?  "red": "white"
          }
          } onClick={handleFav}>
          {favIc}
        </span>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>
          <b>Type:</b> {movie.adult ? "Adult" : "Family"}
        </p>
        <p>
          <b>Rate:</b> {movie.vote_average}
        </p>
        <p>
          <b>Releade Date:</b> {movie.release_date}
        </p>
        <p>
          <b>Language:</b>{" "}
          {movie.original_language == "en" ? "English" : "Forign"}
        </p>
        <a className="moviePage" target="blank" href={movie.homepage}>
          To The Movie
        </a>
      </div>
      <div className="sideImgeContainer">
        <img
          className="sideImge"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
    </div>
  );
};
export default CardDetails;
