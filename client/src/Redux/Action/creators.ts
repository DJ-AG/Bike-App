import axios from "axios";
import { Dispatch } from "redux";
import ActionType from "./types";

import { Action } from "./Interface";

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


export const setupUser = ({
  currentUser,
  endPoint,
  alertText,
}: {
  currentUser: any;
  endPoint: any;
  alertText: string;
}) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SETUP_USER_BEGIN });

    try {
      const { data } = await axios.get(`/api/v1/auth/${endPoint}`, currentUser);
      const user = data.user;
      dispatch({
        type: ActionType.SETUP_USER_SUCCESS,
        payload: { user, alertText },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
};
