import "./App.css";
import { connect } from "react-redux";
import React, { Component, Suspense } from "react";
import NavBar from "./Components/NavBar/NavBar";
import RoutesApp from "./Components/Routes/Routes";
// import Home from "./Pages/Home/Home";
// import Login from './Pages/LoginPage'
// import Favorites from "./Pages/Favorites/Favorites";
// import Movies from "./Pages/MoviesPage/Movies";
// import CardDetails from "./Components/CardDetails/CardDetails";


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
          <RoutesApp/>
        </div>
      </>
    );
  }
}

const mapStoreToProps = (state) => {
  return {
    navArr: state.navBar.navArr,
  };
};

export default connect(mapStoreToProps)(App);
