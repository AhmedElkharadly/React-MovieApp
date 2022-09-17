import "./navbar.css";
import React from "react";
import { moreic } from "../svg";
import { useState } from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";


function NavBar(props) {
  const [myRef, setMyRef] = useState(React.createRef());
  
  const myFunction = (e) => {
    myRef.current.className === "nav"
      ? (myRef.current.className += " resNavSide")
      : (myRef.current.className = "nav");
    console.log(myRef.current.style.transition);
  };

  // const blur = (e) => {
  //   myRef.current.className = "nav";
  // };

  return (
    <div
      className="navBar"
      style={{
        backgroundColor: props.navBgColor,
      }}
    >
      <img
        src={props.imgSrc}
        alt="Logo"
        style={{
          width: props.imgw,
          height: props.imgh,
          cursor: props.pointer,
          margin: props.margin,
          marginLeft: props.mLeft,
          borderRadius: props.logoBR,
        }}
      />
      <div
        className="nav"
        ref={myRef}
        // onBlur={blur()}
      >
        {/* {console.log(props.navArr)} */}
        {props.navArr?.map((navObj, index) => {
          return (
            <NavLink
              key={index}
              style={({ isActive }) => ({
                color: isActive ? "transparent" : "transparent",
                background: isActive
                  ? "rgba(114, 113, 113, 0.4)"
                  : "none",
              })}
              className="navLink"
              to={navObj.navRoute}
            >
              <span
                style={{
                  color: props.navColor,
                  fontSize: props.navFSize,
                }}
              >
                {navObj.navName}
              </span>
            </NavLink>
          );
        })}
      </div>
      <NavLink to="/login">
        <Button
          name="LogIn"
          bgColor="rgba(0, 0, 0, 0.111)"
          color="White"
          h="38px"
          w="90px"
          HBC={() => console.log("Passed to NavLink")}
        />
      </NavLink>
      <button
        className="more"
        style={{
          color: props.navColor,
        }}
      >
        <span className="more" onClick={myFunction}>
          {moreic}
        </span>
      </button>
    </div>
  );
}

export default NavBar;
