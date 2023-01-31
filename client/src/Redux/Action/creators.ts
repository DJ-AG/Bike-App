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
    removeUserFromLocalStoorage();
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
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.TOGGLE_SIDEBAR });
  };
};

export const createStation = (
  Name: string,
  Adress: string,
  City: string,
  Operaattor: string,
  Capacity: string,
  x: string,
  y: string
) => {
  return async (dispatch: Dispatch<Action>) => {
    const data = {
      Name,
      Adress,
      City,
      Operaattor,
      Capacity,
      x,
      y,
    };
    dispatch({ type: ActionType.CREATE_STATION_BEGIN });
    try {
      await authFetch.post("/station/create", data);
      dispatch({ type: ActionType.CREATE_STATION_SUCCESS });
      dispatch({ type: ActionType.CLEAR_VALUES });
    } catch (error: any) {
      if (error.response.status === 401) return;
      dispatch({
        type: ActionType.CREATE_STATION_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    getStations();
    clearAlert();
  };
};

export const getStations = () => {
  let url = "/station/getstations";
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.GET_STATION_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { stations, totalStations, numOfPages } = data;
      dispatch({
        type: ActionType.GET_STATION_SUCCESS,
        payload: { stations, totalStations, numOfPages },
      });
    } catch (err: any) {
      console.log(err.response);
      logoutUser();
    }
    clearAlert();
  };
};

export const handleChange = ({
  name,
  value,
}: {
  name: string;
  value: number;
}) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.HANDLE_CHANGE, payload: { name, value } });
  };
};

export const clearFilters = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.CLEAR_FILTERS });
  };
};
export const clearValues = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.CLEAR_VALUES });
  };
};

export const changePage = (page: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.CHANGE_PAGE, payload: { page } });
  };
};

export const handleModal = (x: string, y: string, Adress: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.TOGGLE_MODAL, payload:{x,y,Adress} });
  };
};

export const closeModal = () => {
  return async(dispatch:Dispatch<Action>)=>{
    dispatch({type:ActionType.CLOSE_MODAL})
  }
}

export const deleteStation = (stationId: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.DELETE_STATION_BEGIN });
    try {
      await authFetch.delete(`/station/${stationId}`);
      clearAlert();
      getStations();
    } catch (error: any) {
      if (error.response.status === 401) return;
      dispatch({
        type: ActionType.DELETE_STATION_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };
};
