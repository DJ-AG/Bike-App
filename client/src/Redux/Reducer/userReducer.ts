import ActionType from "../Action/types";
import { Action } from "../Action/Interface";
import initialState from "./initialState";

interface RepositoriesState {
  userLoading: boolean;
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  user: null;
  status: string;
  isEditing: boolean;
  editStationId: string;
  stationLocation: string;
  stationTypeOptions:string[];
  totalStations: number;
  numOfPages: number;
  page: number;
  search: string;
  stations: any;
  searchStatus: string;
  searchType: string;
  sort: string;
  sortOptions: any;
}

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.DISPLAY_ALERT:
      console.log("DISPLAY ALERT CASE")
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: "Please provide all values!",
      };
    case ActionType.CLEAR_ALERT:
      console.log("CLEAR ALERT CASE")

      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };

    default:
      return state;
  }
};

export default reducer;
