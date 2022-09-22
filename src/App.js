import "./App.css";
import Home from "./Pages/Home/Home";
import Login from './Pages/LoginPage'
import React, { Component} from "react";
import Profile from "./Pages/Profile/Profile";
import Movies from "./Pages/MoviesPage/Movies";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import CardDetails from "./Components/CardDetails/CardDetails";
import {connect} from 'react-redux'

class App extends Component {
  render() {
    // console.log(this.props);
    return (
      <>
        <NavBar
          navArr={this.props.navArr}
          imgSrc="1.JPG"
          imgw="70px"
          imgh="50px"
          margin="5px"
          mLeft="5px"
          navBgColor="rgba(0, 0, 0, 0.89)"
          navColor="white"
          logoBR="50px"
          navFSize="22px"
          />
        <div className="App">
              <Routes>
              <Route path="/"  element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/movies"  element={<Movies />} />
              <Route path="/movies/:id"  element={<CardDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login/>} />
              <Route path="*" element={<h1>Error 404 Not Found</h1>} />
            </Routes>
        </div>
      </>
    );
  }
}

const mapStoreToProps = (state) => {
  return{
    navArr : state.navBar.navArr
  }
}

export default connect(mapStoreToProps)(App);

