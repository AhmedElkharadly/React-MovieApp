const INITIAL_STATE = {
    favorites: []
}

export function favoriteReducer(state = INITIAL_STATE, actions) {
    switch (actions.type) {
        case "ADD_FAVORITES": {
            return {
                ...state,
                favorites: actions.payload
            }
        }
        default: { return state} 
    }
}

