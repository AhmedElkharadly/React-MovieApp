import { combineReducers } from "redux";
import { favoriteReducer } from "./favorite";
import { LanguageReducer } from "./language";

export default combineReducers({
  language: LanguageReducer,
  favorite: favoriteReducer,
});
