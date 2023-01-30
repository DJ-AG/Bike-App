import ActionType from "../Action/types";
import { Action } from "../Action/Interface";
import {userState} from "./initialState";

interface RepositoriesUserState {
  userLoading: boolean;
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  user: any;
  showSidebar: boolean;
  token: string | null;
}

const userReducer = (
  state= userState,
  action: Action
): RepositoriesUserState => {
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
        ...userState,
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
    default:
      return state;
  }
};

export default userReducer;
