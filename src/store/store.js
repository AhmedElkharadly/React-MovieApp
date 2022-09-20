import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducesrs/combinedReducers";

export const store = createStore(reducers, composeWithDevTools());
