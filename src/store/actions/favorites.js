export const addFavorites = (payload) => {
    return {
      type: "ADD_FAVORITES",
      payload,
    };
  };
export const splcieFavorites = (payload) => {
    return {
      type: "SPLICE_FAVORITES",
      payload,
    };
  };
export const setCounter = (payload) =>{
    return {
        type:"SET_COUNTER",
        payload
    }
}