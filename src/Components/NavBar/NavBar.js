import "./navbar.css";
import React from "react";
import { moreic } from "../svg";
import { useState } from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentLangName } from "../../store/actions/language";
function NavBar(props) {
  const myRef = React.createRef();
  const myDropRef = React.createRef();

  const myFunction = (e) => {
    myRef.current.className === "nav"
      ? (myRef.current.className += " resNavSide")
      : (myRef.current.className = "nav");
    // console.log(myRef.current.className);
  };

  const lang = useSelector((state) => {
    return state.pages.currentLangName;
  });
  const dispatch = useDispatch();

  const changeToEN = () => {
    dispatch(setCurrentLangName("en"));
  };
  const changeToAR = () => {
    dispatch(setCurrentLangName("ar"));
  };

  const dorpDownLang = (e) => {
    myDropRef.current.className === "avilableLang"
      ? (myDropRef.current.className += " displayed")
      : (myDropRef.current.className = "avilableLang");
  };

  return (
    <div
      className="navBar"
      style={{
        backgroundColor: props.navBgColor,
      }}
      dir={lang == "ar" ? "rtl" : "ltr"}
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
      <div className="nav" ref={myRef}>
        {props.navArr?.map((navObj, index) => {
          return (
            <NavLink
              key={index}
              style={({ isActive }) => ({
                color: isActive ? "transparent" : "transparent",
                background: isActive ? "rgba(114, 113, 113, 0.4)" : "none",
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
                <div style={{margin: "5px"}}>{navObj.icon}</div>
                <div style={{margin: "5px"}}>{navObj.navName}</div>
                
              </span>
            </NavLink>
          );
        })}
      </div>
      <NavLink style={{ textDecoration: "none" }} to="/login">
        <Button
          w="90px"
          h="38px"
          name="LogIn"
          color="White"
          fFamily="cursive"
          // bgColor= "rgba(255, 255, 255, 0.06)"
          HBC={() => () => console.log("Login Button!")}
        />
      </NavLink>
      <div className="lang">
        <Button
          w="90px"
          h="30px"
          fSize="13px"
          color="white"
          fFamily="cursive"
          bgColor="transparent"
          name={`Lang: ${lang}`}
          HBC={() => dorpDownLang()}
        />
        <ul ref={myDropRef} className="avilableLang">
          <li onClick={() => changeToEN()}>en</li>
          <li onClick={() => changeToAR()}>ar</li>
        </ul>
      </div>
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
