import React, { Component} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Movies from "./Pages/Movies";
import Login from './Pages/LoginPage'
import "./App.css";


class App extends Component {
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
          navRoute: "/movies",
          navName: "Movies",
          icon: "moviesIc",
        },
        {
          navRoute: "/favorite",
          navName: "Favorite",
          icon: "favic",
        }
      ],
    };
  }
  HbtnClick = () => {
    console.log(this.props);
  };

  render() {
    // {console.log(this)}
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
              <Routes>
              <Route path="/" exact element={<div> Home</div>} />
              <Route path="/home" element={<div> Home</div>} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/favorite" element={<div>Fav</div>} />
              <Route path="/login" element={<Login/>} />
              <Route path="*" element={<h1>Error 404 Not Found</h1>} />
            </Routes>
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
