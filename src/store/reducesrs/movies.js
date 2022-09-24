import { SET_PAGE, SET_LANGUAGE, SET_PAGENUM } from "../actions/types";

const INITIAL_STATE = {
  list: [],
  currentLangName: "en",
  currentPageNum: 1,
  avilableLang: ["ar", "en", "fr"],
};

export function pageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_PAGE:
      // console.log("no", action.payload);
      return {
        ...state,
        list: action.payload,
      };
    case SET_PAGENUM:
      return {
        ...state,
        currentPageNum: action.payload,
      };

    case SET_LANGUAGE:
      // console.log("no", action.payload);
      return {
        ...state,
        currentLangName: action.payload,
      };
    default:
      return state;
  }
}
