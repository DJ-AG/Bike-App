import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducer/index";
import logger from 'redux-logger'

export const store = createStore(reducers, {}, applyMiddleware(thunk));
