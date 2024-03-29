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

export const toggleSidebar = () => {
  return async (dispatch: Dispatch<Action>) => {
    console.log("togglesidebar active");
    dispatch({ type: ActionType.TOGGLE_SIDEBAR });
  };
};

export const createStation = (
  Name: string,
  Osoite: string,
  Kaupunki: string,
  Operaattor: string,
  Kapasiteet: string,
  x: string,
  y: string
) => {
  return async (dispatch: Dispatch<Action>) => {
    const data = {
      Name,
      Osoite,
      Kaupunki,
      Operaattor,
      Kapasiteet,
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
    }
    clearAlert();
  };
};

export const getJorneys = (page:any, sort:any, search:any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.GET_JORNEY_BEGIN });
    try {
      let url = `/jorney/getjorneys?page=${page}&sort=${sort}`;
      if (search) {
        url = url + `&search=${search}`;
      }
      const { data } = await authFetch(url);
      const { jorneys, totalJorneys, numOfPages } = data;
      dispatch({
        type: ActionType.GET_JORNEY_SUCCESS,
        payload: { jorneys, totalJorneys, numOfPages },
      });
    } catch (err: any) {
      console.log(err.response);
    }
    clearAlert();
  };
};

export const handleChange = ({ name, value }: { name: any; value: any }) => {
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

export const handleOpenModal = (x: string, y: string, Adress: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.TOGGLE_MODAL, payload: { x, y, Adress } });
  };
};

export const handleCloseModal = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.CLOSE_MODAL });
  };
};

export const deleteStation = (stationId: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.DELETE_STATION_BEGIN });
    try {
      await authFetch.delete(`/station/${stationId}`);
      clearAlert();
      getStations();
      window.location.reload();
    } catch (error: any) {
      if (error.response.status === 401) return;
      dispatch({
        type: ActionType.DELETE_STATION_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };
};
