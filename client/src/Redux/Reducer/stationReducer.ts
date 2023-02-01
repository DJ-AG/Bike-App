import ActionType from "../Action/types";
import { Action } from "../Action/Interface";
import { stationState } from "./initialState";

const stationReducer = (state = stationState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_STATION_BEGIN:
      console.log("GET_STATION_BEGIN trigger");
      return {
        ...state,
        isLoading: true,
        showAlert: false,
      };
    case ActionType.GET_STATION_SUCCESS:
      console.log("GET_STATION_SUCCESS trigger");
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        stations: action.payload.stations,
        totalStations: action.payload.totalStations,
        numOfPages: action.payload.numOfPages,
      };
    case ActionType.HANDLE_CHANGE:
      console.log("HANDLE_CHANGE trigger");
      return {
        ...state,
        page: 1,
        [action.payload.name]: action.payload.value,
      };
    case ActionType.CLEAR_FILTERS:
      console.log("CLEAR_FILTERS trigger");
      return {
        ...state,
        search: "",
        searchType: "all",
        sort: "latest",
      };
    case ActionType.CHANGE_PAGE:
      console.log("CHANGE_PAGE trigger");
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
      console.log("CREATE_STATION_BEGIN");
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
      console.log("payload", action.payload);
      return {
        ...state,
        ModalToggle: !state.ModalToggle,
        X: action.payload.x,
        Y: action.payload.y,
        ModalAdress: action.payload.Adress,
      };
    case ActionType.CLOSE_MODAL:
      console.log("modal closed!");
      return {
        ...state,
        ModalToggle: !state.ModalToggle,
        ModalX: "",
        ModalY: "",
        ModalAdress: "",
      };

    default:
      return state;
  }
};

export default stationReducer;
