import { combineReducers } from "redux";
import userReducer from "./userReducer";
import stationReducer from './stationReducer'

const rootReducer = combineReducers({
  stations: stationReducer,users: userReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
