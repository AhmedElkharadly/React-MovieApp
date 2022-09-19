import Button from "../Button/Button";
import { favIc } from ".././svg";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Card(props) {
  const [favor, setFavor] = useState(false);
  const navigate = useNavigate();

  const handleFav = (e) => {
    setFavor((prevState) => ({
      favor: !prevState.favor,
    }));

    if (!favor.favor) {
      e.target.style.fill = "red";
      e.target.style.color = "red";
    } else {
      e.target.style.fill = "black";
      e.target.style.color = "black";
    }

    console.log(e.target.style.fill);
  };

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
        <div className="cardFooter">
          <h3 className="pName">{props.pName}</h3>
          <Button
            HBC={() => handleFav}
            w="fit-content"
            fSize="12px"
            h="10px"
            pad="20px"
            name="Add to Favorites"
            icon={favIc}
            bgColor="rgba(80, 90, 8, 0.2)"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
