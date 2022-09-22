import "./button.css";
import React, { useState } from "react";
import {useRef} from 'react';
function Button(props,refrence) {
  // const [refr ,setRefr] = useState(React.createRef());
  // const [passingRef ,setPassingRefr] = useState(React.createRef());
  // props.passingRef =()=> ({refr})

  return (
    <button
      // ref={refr}
      className="rcButton"
      style={{
        background: props.bgColor,
        color: props.color,
        borderRadius: props.br,
        width: props.w,
        height: props.h,
        fontSize: props.fSize,
        fontFamily: props.fFamily,
        padding: props.pad,
      }}
      type={props.type}
      onClick={props.HBC}
    >
      {props.name}
      {props.icon}
    </button>
  );
}
export default Button;
