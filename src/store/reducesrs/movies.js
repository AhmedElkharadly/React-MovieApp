import { SET_PAGE, SET_LANGUAGE } from "../actions/types";

const INITIAL_STATE = {
    currentLang: "en",
    currentLangName: "en",
    avilableLang: ["ar", "en", "fr"],
};

export function pageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_PAGE:
      console.log("no", action.payload);
      return {
        ...state,
        currentLang: action.payload,
      };
    case SET_LANGUAGE:
      console.log("no", action.payload);
      return {
        ...state,
        currentLangName: action.payload,
      };
    default:
      return state;
  }
}
