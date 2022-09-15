import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Products from "./Pages/Products";
import Login from './Pages/LoginPage'
import "./App.css";
import Card from "./Components/Card/Card";
import Button from "./Components/Button/Button";
import LoginForm from "./Components/LoginForm/LoginForm";
import { homeic, exploreic, notificationic, profileic, moreic } from "../src/Components/svg";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navArr: [
        {
          navRoute: "/home",
          navName: "Home",
          icon: "homeic",
        },
        {
          navRoute: "/about",
          navName: "About",
          icon: "aboutIc",
        },
        {
          navRoute: "/products",
          navName: "Products",
          icon: "productsIc",
        },
        {
          navRoute: "/profile",
          navName: "Profile",
          icon: "profileic",
        },
      ],
    };
  }
  HbtnClick = () => {
    console.log("BTN Function");
  };

  render() {
    return (
      <>
        <NavBar
          navArr={this.state.navArr}
          imgSrc="1.JPG"
          imgw="50px"
          imgh="50px"
          margin="5px"
          mLeft="20px"
          navBgColor="rgba(0, 0, 0, 0.89)"
          navColor="white"
          logoBR="50px"
          navFSize="22px"
        />
        <div className="App">
          <div style={{ display: "flex", justifyContent: "center" }}></div>
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Routes>
              <Route path="/home" exact element={<div>This Is THe Home</div>} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<div>This Is THe About</div>} />
              <Route path="/profile" element={<div>Profile</div>} />
              <Route path="/login" element={<Login/>} />
            </Routes>
          </div>
        </div>
      </>
    );
  }
}

export default App;

{
  /* <LoginForm />
<Button 
name="LogIn" 
  color="black" 
  HBC={this.HbtnClick} 
/>
<Button
name="SignUp"
color="White"
  bgColor="Black"
  HBC={() => {
    console.log("Put Here The Function");
  }}
  <Card
    imgSrc="1.jpg"
    pBgColor="lightgray"
    pCategory="Shose Category"
    pName="Marsilia"
    pPrice="50$"
  />
/> */
}
