import "./movies.css";
// import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import Button from "../../Components/Button/Button";
import { getMovies } from "../../store/actions/movies";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPageNum } from "../../store/actions/pageNumber";

const Movies = (props) => {
  const pageNum = useSelector((state) => state.pages.currentPageNum);
  const movies = useSelector((state) => state.pages.list.results);
  const lang = useSelector((state) => state.pages.currentLangName);
  const dispatch = useDispatch();
  // const [movie, setMovies] = useState([]);
  // const [lang, setlang] = useState("ar");
  // const [pageNum, setPageNum] = useState(2);

  useEffect(() => {
    // ------- Using Axios With Redux ------------
    dispatch(getMovies(pageNum, lang));
    // ------- Using Axios Direct ------------
    //  axios
    //   .get(
    //     `https://api.themoviedb.org/3/movie/popular?api_key=40b9cd171d9532635ec61365b799928f&page=${pageNum}`
    //   )
    //   .then((response) => {s
    //     setMovies(response.data.results);
    //     // console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   });
  }, [pageNum, lang]);

  // const previousPage = () => {
  //   pageNum > 2 ? setPageNum(pageNum - 1) : setPageNum(1);
  // };
  // const nextPage = () => {
  //   setPageNum(pageNum + 1);
  // };

  return (
    <div dir={lang == "ar" ? "rtl" : "ltr"} className="moviePageContainer">
      <div className="movieContainer">
        {movies?.map((mov) => {
          return (
            <Card
              HBCC={" "}
              moviesData={mov}
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
          <Button
            bgColor="rgb(255, 255, 200, .5)"
            HBC={() =>
              pageNum === 1 ? "" : dispatch(setCurrentPageNum(pageNum - 1))
            }
            name="Previous"
          />
        </li>
        <li className="page-item">
          <Button
            bgColor="rgb(255, 255, 200, .5)"
            HBC={() => dispatch(setCurrentPageNum(pageNum + 1))}
            name="Next"
          />
        </li>
      </div>
    </div>
  );
};
export default Movies;
