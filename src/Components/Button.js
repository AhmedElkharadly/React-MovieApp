import { type } from "@testing-library/user-event/dist/type";
import "./button.css";

function Button(props) {
  return (
    <button
      className="rcButton"
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        borderRadius: props.br,
        width: props.w,
        height: props.h,
        fontSize: props.fSize,
        fontFamily: props.fFamily,
        padding: props.pad
      }}
      type={props.type}
      onClick={() => {props.HBC()}}
    >
      {props.name}
    </button>
  );
}
export default Button;
