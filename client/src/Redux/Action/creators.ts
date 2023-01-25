import axios from "axios";
import { Dispatch } from "redux";
import ActionType from "./types";

import { Action } from "./Interface";

const authFetch = axios.create({
  baseURL: "/api/v1",
});

const clearAlert = () => {
  return async (dispatch: Dispatch<Action>) => {
    setTimeout(() => {
      dispatch({ type: ActionType.CLEAR_ALERT });
    }, 3000);
  };
};

export const displayAlert = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.DISPLAY_ALERT });
    clearAlert();
  };
};

const addUserToLocalStorage = (user: string, token: string) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

const removeUserFromLocalStoorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const logoutUser = () => {
  return async (dispatch: Dispatch<Action>) => {
    await authFetch.get("/auth/logout");
    dispatch({ type: ActionType.LOGOUT_USER });
    removeUserFromLocalStoorage()
  };
};

export const loginUser = (currentUser: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token } = data;
      dispatch({
        type: ActionType.LOGIN_USER_SUCCESS,
        payload: { user, token },
      });
      addUserToLocalStorage(user, token);
    } catch (err: any) {
      dispatch({
        type: ActionType.LOGIN_USER_ERROR,
        payload: { msg: err.response.data.msg },
      });
    }
    clearAlert();
  };
};

export const registerUser = (currentUser: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/register", currentUser);
      const { user, token } = data;
      dispatch({
        type: ActionType.SETUP_USER_SUCCESS,
        payload: { user, token },
      });
      addUserToLocalStorage(user, token);
    } catch (err: any) {
      dispatch({
        type: ActionType.SETUP_USER_ERROR,
        payload: { msg: err.response.data.msg },
      });
    }
    clearAlert();
  };
};


export const toggleSidebar = () => {
  return async(dispatch:Dispatch<Action>) => {
    dispatch({type:ActionType.TOGGLE_SIDEBAR})
  }
}