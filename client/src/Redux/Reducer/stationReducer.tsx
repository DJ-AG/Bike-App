import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    HANDLE_CHANGE,
    CLEAR_VALUES,
    CREATE_STATION_BEGIN,
    CREATE_STATION_SUCCESS,
    CREATE_STATION_ERROR,
    GET_STATION_BEGIN,
    GET_STATION_SUCCESS,
    DELETE_STATION_BEGIN,
    DELETE_STATION_ERROR,
    EDIT_STATION_BEGIN,
    EDIT_STATION_SUCCESS,
    EDIT_STATION_ERROR,
    SHOW_STATION_BEGIN,
    SHOW_STATION_SUCCESS,
    CLEAR_FILTERS,
    CHANGE_PAGE,
    GET_CURRENT_USER_BEGIN,
    GET_CURRENT_USER_SUCCESS,
  } from "../Action/actions";
  
  import { initialStationState } from "../Context/appContext";
  
  const reducer = (state: typeof initialStationState, action:any) => {
    switch (action) {
      case DISPLAY_ALERT:
        return {
          ...state,
          showAlert: true,
          alertType: "danger",
          alertText: "Please provide all values!",
        };
      case CLEAR_ALERT:
        return {
          ...state,
          showAlert: false,
          alertType: "",
          alertText: "",
        };
      case HANDLE_CHANGE:
        return {
          ...state,
          page: 1,
          [action.payload.name]: action.payload.value,
        };
      case CLEAR_VALUES:
        const initialState = {
          isEditing: false,
          editStationId: "",
          status: "pending",
        };
  
        return {
          ...state,
          ...initialState,
        };
  
      case CREATE_STATION_BEGIN:
        return { ...state, isLoading: true };
      case CREATE_STATION_SUCCESS:
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: "success",
          alertText: "New station Created!",
        };
      case CREATE_STATION_ERROR:
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: "danger",
          alertText: action.payload.msg,
        };
      case GET_STATION_BEGIN:
        return { ...state, isLoading: true, showAlert: false };
  
      case GET_STATION_SUCCESS:
        return {
          ...state,
          isLoading: false,
          stations: action.payload.stations,
          totalStations: action.payload.totalStations,
          numOfPages: action.payload.numOfPages,
        };
    //   case SET_EDIT_STATION:
    //     const station = state.stations.find(
    //       (station) => station._id === action.payload.id
    //     );
    //     const { _id, position, company, stationLocation, stationTypeOptions, status } =
    //       station;
    //     return {
    //       ...state,
    //       isEditing: true,
    //       editSTATIONId: _id,
    //       stationLocation,
    //       stationTypeOptions,
    //       status,
    //     };
      case DELETE_STATION_BEGIN:
        return { ...state, isLoading: true };
      case DELETE_STATION_ERROR:
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: "danger",
          alertText: action.payload.msg,
        };
      case EDIT_STATION_BEGIN:
        return {
          ...state,
          isLoading: true,
        };
      case EDIT_STATION_SUCCESS:
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: "success",
          alertText: "STATION Updated!",
        };
      case EDIT_STATION_ERROR:
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: "danger",
          alertText: action.payload.msg,
        };
      case SHOW_STATION_BEGIN:
        return {
          ...state,
          isLoading: true,
          showAlert: false,
        };
      case SHOW_STATION_SUCCESS:
        return {
          ...state,
          isLoading: false,
          STATION: action.payload.STATION,
          monthlyApplications: action.payload.monthlyApplications,
        };
      case CLEAR_FILTERS:
        return {
          ...state,
          search: "",
          searchStatus: "all",
          searchType: "all",
          sort: "latest",
        };
      case CHANGE_PAGE:
        return { ...state, page: action.payload.page };
      case GET_CURRENT_USER_BEGIN:
        return { ...state, userLoading: true, showAlert: false };
      case GET_CURRENT_USER_SUCCESS:
        return {
          ...state,
          userLoading: false,
          user: action.payload.user,
          userLocation: action.payload.location,
          STATIONLocation: action.payload.location,
        };
  
      default:
        throw new Error(`no such action : ${action.type}`);
        return state;
    }
  };
  
  export default reducer;
  