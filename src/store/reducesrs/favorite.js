import { ADD_FAVORITES, SET_COUNTER, SPLICE_FAVORITES } from "../actions/types";

const INITIAL_STATE = {
  counter: 0,
  favorites: [],
  isFav: []
};

export function favoriteReducer(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case ADD_FAVORITES: {
      return {
        ...state,
        favorites: [...state.favorites, actions.payload],
        counter: state.favorites.length + 1,
        isFav: [...state.isFav,  actions.payload.id ]
      };
    }
    case SPLICE_FAVORITES:
      let index = state.favorites.findIndex(
        (movie) => movie.id === actions.payload?.id
      );
      state.favorites.splice(index, 1);
      state.isFav.splice(index, 1);
      // console.log(actions.payload?.id);
      return {
        ...state,
        favorites: [...state.favorites],
        counter: state.favorites.length,
        isFav:[...state.isFav]
      };
    case SET_COUNTER:
      return {
        ...state,
        counter: actions.payload,
      };
    default: {
      return state;
    }
  }
}
