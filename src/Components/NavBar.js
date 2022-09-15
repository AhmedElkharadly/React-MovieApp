import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import "./navbar.css";
import { homeic, exploreic, notificationic, profileic, moreic } from "./svg";

function NavBar(props) {
  const [myRef, setMyRef] = useState(React.createRef());

  const myFunction = (e) => {
    myRef.current.className === "nav"
    ? (myRef.current.className += " resNavSide")
    : (myRef.current.className = "nav");
    
    console.log(myRef.current);
  };
  const blur = (e) => {
    myRef.current.className = "nav";
  }

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
      <div className="nav" ref={myRef}  onBlur={blur}>
        {console.log(props.navArr)}
        {props.navArr?.map((navObj, index) => {
          return (
            <NavLink
              key={index}
              style={({ isActive }) => ({
                color: isActive ? "transparent" : "transparent",
                background: isActive ? "rgba(0, 0, 0, 0.911)" : "transparent",
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
                {/* {navObj.icon}  */}
                {navObj.navName}
              </span>
            </NavLink>
          );
        })}
      </div>
      <Button
        name="LogIn"
        bgColor="rgba(0, 0, 0, 0.111)"
        color="White"
        h="38px"
        w="90px"
      />
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
