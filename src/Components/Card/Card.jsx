import Button from "../Button/Button";
import { favIc } from ".././svg";
import "./card.css";

function Card(props) {
  const handleFav = (e) => {
      console.log(e.target.style.fill);
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
          className="pImg"
          src={props.imgSrc}
          alt="Product Picture"
          style={{
            width: props.pImgw,
            height: props.pImgh,
          }}
        />

        <h3 className="pName">{props.pName}</h3>
        {/* <h3 className="pCat">{props.pCategory}</h3> */}
        {/* {console.log(props.imgSrc) <Rating />} */}
        <Button
          HBC={handleFav}
          w="fit-content"
          name={favIc}
          bgColor="transparent"
        />
        {/* <h3 className="pPrice">{props.pPrice}</h3> */}
      </div>
    </div>
  );
}

export default Card;
