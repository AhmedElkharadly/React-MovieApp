import "./card.css";
import { favIc } from ".././svg";
import Button from "../Button/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavorites, splcieFavorites } from "../../store/actions/favorites";

function Card(props) {
  const navigate = useNavigate();
  const favoriteList = useSelector((state) => state.favorite.favorites);
  // const [favor, setFavor] = useState(false);
  // const inFavorites = useSelector((state) => {
  //   return state.favorite;
  // });
  const dispatch = useDispatch();
  const addFavMovie = (moviesData) => {
    dispatch(addFavorites(moviesData));
  };
  const removeFavourite = (moviesData) => {
    dispatch(splcieFavorites(moviesData));
  };

  const handleFav = (moviesData) => {
    if (favoriteList.includes(props.moviesData))
      removeFavourite(props.moviesData);
    else {
      addFavMovie(props.moviesData);
    }
  };

  const cardBtnHandling = (HBCC) => 
    typeof(props.HBCC) === 'function' ? props.HBCC() :handleFav() ;
  // const handleFav = (e) => {
  // setFavor((prevState) => ({
  //   favor: !prevState.favor,
  // }));
  // if inFavorites.
  //   if (e.target.matches("button")) {
  //     if (!favor.favor) {
  //       e.target.style.backgroundColor = "rgba(255, 0, 0, 0.651)",
  //         dispatch(addFavorites(props.moviesData));
  //     } else {
  //       (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.494)"),
  //         dispatch(splcieFavorites(props.moviesData));
  //     }
  //   } else if (e.target.parentElement.matches("button")) {
  //     if (!favor.favor) {
  //       (e.target.parentElement.style.backgroundColor =
  //         "rgba(255, 0, 0, 0.651)"),
  //         dispatch(addFavorites(props.moviesData));
  //       } else {
  //         (e.target.parentElement.style.backgroundColor =
  //           "rgba(255, 255, 255, 0.494)"),
  //           dispatch(splcieFavorites(props.moviesData));
  //         }
  //       } else {
  //         if (!favor.favor) {e.target.parentElement.parentElement.style.backgroundColor =
  //           "rgba(255, 0, 0, 0.651)",
  //           dispatch(addFavorites(props.moviesData));
  //         }else {
  //           e.target.parentElement.parentElement.style.backgroundColor =
  //           "rgba(255, 255, 255, 0.494)",
  //           dispatch(splcieFavorites(props.moviesData));
  //         };
  //   }
  // };

  const roteToID = () => {
    navigate(`/movies/${props.id}`);
  };

  return (
    <div className="cardContainer0">
      <div
        className="cardContainer"
        style={{
          backgroundColor: props.pBgColor,
        }}
      >
        <img
          onClick={roteToID}
          className="pImg"
          alt={props.name}
          src={props.imgSrc}
          style={{
            width: props.pImgw,
            height: props.pImgh,
          }}
        />
        <div className="rate">{props.rate}</div>
        <div className="cardFooter">
          <h3 className="pName">{props.pName}</h3>
          <Button
            HBC={cardBtnHandling}
            w="fit-content"
            fSize="12px"
            h="10px"
            pad="20px"
            name=""
            icon={favIc}
            bgColor="rgba(255, 255, 255, 0.496)"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
