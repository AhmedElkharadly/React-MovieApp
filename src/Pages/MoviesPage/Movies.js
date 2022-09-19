import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../../Components/Card/Card";
import "./movies.css";

const Movies = (props) => {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?page=2&api_key=40b9cd171d9532635ec61365b799928f`
        )
        .then((response) => {
          setMovies(response.data.results);
          // console.log(response.data.results)
        })
        .catch((error) => console.log(error));
  }, []);
  

  
  console.log(movie);
  return (
    <div className="moviePageContainer">
      {movie.map((mov) => {
        return (
          <Card 
            id={mov.id}
            key={mov.id}
            pName={mov.title}
            pCategory={mov.adult}
            imgSrc={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
            // pPrice={mov.overview}
            // pBgColor="rgb(160, 137, 95, 0.8)"
          />
        );
      })}
    </div>
  );
};
export default Movies;
