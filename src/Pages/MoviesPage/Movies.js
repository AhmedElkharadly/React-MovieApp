import { useState } from "react";
import "./movies.css";
import axios from "axios";
import { useEffect } from "react";
import Card from "../../Components/Card/Card";
import Button from "../../Components/Button/Button";

const Movies = (props) => {
  const [movie, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=40b9cd171d9532635ec61365b799928f&page=${pageNum}`
      )
      .then((response) => {
        setMovies(response.data.results);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error)
        
      });
  }, [pageNum]);

  const previousPage = () => {
    pageNum > 2 ? setPageNum(pageNum - 1) : setPageNum(1);
  };
  const nextPage = () => {
    setPageNum(pageNum + 1);
  };

  return (
    <div className="moviePageContainer">
      <div className="movieContainer">
        {movie.map((mov) => {
          return (
            <Card
              id={mov.id}
              key={mov.id}
              pName={mov.title}
              pCategory={mov.adult}
              rate={mov.vote_average}
              imgSrc={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
              pBgColor="rgb(160, 137, 95, 0.9)"
            />
          );
        })}
      </div>
      <div className="pagination">
        <li className="page-item">
          <Button HBC={() => previousPage} name="Previous" />
        </li>
        <li className="page-item">
          <Button HBC={() => nextPage} name="Next" />
        </li>
      </div>
    </div>
  );
};
export default Movies;
