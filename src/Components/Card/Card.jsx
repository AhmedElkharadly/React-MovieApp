import "./card.css";
import { favIc } from ".././svg";
import Button from "../Button/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavorites, splcieFavorites } from "../../store/actions/favorites";
import { useEffect } from "react";

function Card(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorite.favorites);
  // const [favor, setFavor] = useState(false);
  // const inFavorites = useSelector((state) => {
  //   return state.favorite;
  // });

  const addFavMovie = (moviesData) => {
    dispatch(addFavorites(moviesData));
  };
  const removeFavourite = (moviesData) => {
    dispatch(splcieFavorites(moviesData));
  };

  const handleFav = (moviesData) => {
    if (favoriteList.includes(props.moviesData)) {
      removeFavourite(props.moviesData);
      // console.log("else");
    } else {
      if (favoriteList.length == 0) {
        addFavMovie(props.moviesData);
      }
      removeFavourite(props.moviesData);
      // console.log("else");
      addFavMovie(props.moviesData);
      console.log("reading the state empty after cahnging the route");
    }
  };

  const isFav = useSelector((state) => state.favorite.isFav);
  const favIcFill = () => {
    if (isFav?.includes(props.moviesData?.id)) return "red";
    else return "white";
  };

  const cardBtnHandling = (HBCC) =>
    typeof props.HBCC === "function" ? props.HBCC() : handleFav();

  const roteToID = () => {
    navigate(`/movies/${props.id}`);
  };

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
            bgColor={favIcFill()}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
