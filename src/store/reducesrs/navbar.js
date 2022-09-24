import { SET_NavObj } from "../actions/types";
import { bookmarkic, moviesIc, homeic } from "../../Components/svg";

const INITIAL_STATE = {
  navArr: [
    {
      navRoute: "/home",
      navName: "Home",
      icon: homeic
    },
    {
      navRoute: "/movies",
      navName: "Movies",
      icon: moviesIc,
    },
    {
      navRoute: "/favorites",
      navName: "Favorites",
      icon: bookmarkic,
    },
  ],
};

export const navbarReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case SET_NavObj: {
      return {
        ...state,
        navArr: actions.payload,
      };
    }
    default:
      return state;
  }
};
