import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducesrs/combinedReducers";
import thunk from "redux-thunk";

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
