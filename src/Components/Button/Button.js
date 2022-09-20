import "./button.css";

function Button(props) {
  return (
    <button
      className="rcButton"
      style={{
        background: props.bgColor,
        color: props.color,
        borderRadius: props.br,
        width: props.w,
        height: props.h,
        fontSize: props.fSize,
        fontFamily: props.fFamily,
        padding: props.pad
      }}
      type={props.type}
      onClick={props.HBC()}
    >
      {props.name} 
      {props.icon}
    </button>
  );
}
export default Button;
