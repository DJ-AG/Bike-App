import produce from "immer";
import ActionType from "../Action/types";
import { Action } from "../Action/Interface";
import { initialState, initialStateProps } from "./initialState";

const reducer = produce(
  (state: initialStateProps = initialState, action: Action) => {
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
      case ActionType.GET_JORNEY_BEGIN:
        return {
          ...state,
          isLoading: true,
          showAlert: false,
        };
      case ActionType.GET_JORNEY_SUCCESS:
        return {
          ...state,
          isLoading: false,
          jorneys: action.payload.jorneys,
          totalJorneys: action.payload.totalJorneys,
          numOfPages: action.payload.numOfPages,
        };
      case ActionType.CREATE_JORNEY_BEGINE:
        return { ...state, isLoading: true };
      case ActionType.CREATE_JORNEY_SUCCESS:
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: "success",
          alertText: "New Jorney Created!",
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
      case ActionType.HANDLE_CHANGE:
        return {
          ...state,
          page: 1,
          [action.payload.name]: action.payload.value,
        };
      case ActionType.CLEAR_FILTERS:
        return {
          ...state,
          search: "",
          searchType: "all",
          sort: "latest",
        };
      case ActionType.CHANGE_PAGE:
        return { ...state, page: action.payload.page };

      case ActionType.CLEAR_VALUES:
        const stationState = {
          Name: "",
          Adress: "",
          City: "",
          Operaattor: "",
          Kapasiteet: "",
          x: "",
          y: "",
        };

        return {
          ...state,
          ...stationState,
        };
      case ActionType.CREATE_STATION_BEGIN:
        return { ...state, isLoading: true };
      case ActionType.CREATE_STATION_SUCCESS:
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: "success",
          alertText: "New Station Created!",
        };
      case ActionType.CREATE_STATION_ERROR:
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: "danger",
          alertText: action.payload.msg,
        };
      case ActionType.TOGGLE_MODAL:
        return {
          ...state,
          ModalToggle: !state.ModalToggle,
          X: action.payload.x,
          Y: action.payload.y,
          ModalAdress: action.payload.Adress,
        };
      case ActionType.CLOSE_MODAL:
        return {
          ...state,
          ModalToggle: !state.ModalToggle,
          ModalX: "",
          ModalY: "",
          ModalAdress: "",
        };
      case ActionType.TOGGLE_SIDEBAR:
        return {
          ...state,
          showSidebar: !state.showSidebar,
        };

      default:
        return state;
    }
  },
  initialState
);

export default reducer;
