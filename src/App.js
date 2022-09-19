import React, { Component} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Movies from "./Pages/MoviesPage/Movies";
import Login from './Pages/LoginPage'
import "./App.css";
import CardDetails from "./Components/CardDetails/CardDetails";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";

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
          navRoute: "/profile",
          navName: "profile",
          icon: "favic",
        }
      ],
    };
  }
  HbtnClick = () => {
    console.log(this.props);
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
              <Routes>
              <Route exact path="/"  element={<Home/>} />
              <Route exact path="/home" element={<Home/>} />
              <Route exact path="/movies"  element={<Movies />} />
              <Route exact path="/movies/:id"  element={<CardDetails />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/login" element={<Login/>} />
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
