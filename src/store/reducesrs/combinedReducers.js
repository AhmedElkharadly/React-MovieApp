import { combineReducers } from "redux";
import { favoriteReducer } from "./favorite";
import { LanguageReducer } from "./language";
import { navbarReducer } from "./navbar";
import { pageReducer } from "./movies";


export default combineReducers({
  // language: LanguageReducer,
  favorite: favoriteReducer,
  navBar: navbarReducer,
  pages : pageReducer,
  
});
