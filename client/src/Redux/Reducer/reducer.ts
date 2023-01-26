import ActionType from "../Action/types";
import { Action } from "../Action/Interface";
import initialState from "./initialState";

interface RepositoriesState {
  userLoading: boolean;
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  user: any;
  status: string;
  isEditing: boolean;
  editStationId: string;
  stationLocation: string;
  stationTypeOptions: string[];
  totalStations: number;
  numOfPages: number;
  page: number;
  search: string;
  stations: any;
  searchStatus: string;
  searchType: string;
  showSidebar: boolean;
  sort: string;
  sortOptions: any;
  token: string | null;
}

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: "Please provide all values!",
      };
    case ActionType.CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };
    case ActionType.LOGIN_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText: "Login Successful! Redirecting...",
      };
    case ActionType.LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };

    case ActionType.LOGOUT_USER:
      return {
        ...initialState,
        user: null,
        token: null,
      };
    case ActionType.SETUP_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.SETUP_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText: "Register Successful! Redirecting...",
      };
    case ActionType.SETUP_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };
    case ActionType.TOGGLE_SIDEBAR:
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };

    case ActionType.GET_STATION_BEGIN:
      return {
        ...state,
        isLoading: true,
        showAlert: false,
      };

    case ActionType.GET_STATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stations: action.payload.stations,
        totalStations: action.payload.totalStations,
        numOfPages: action.payload.numOfPages,
      };
    default:
      return state;
  }
};

export default reducer;
