export interface DisplayAlert {
  type: "DISPLAY_ALERT";
}

export interface ClearAlert {
  type: "CLEAR_ALERT";
}

export interface toggleSidebar {
  type: "TOGGLE_SIDEBAR";
}

export interface getJorneysBegin {
  type: "GET_JORNEY_BEGIN";
}

export interface getJorneySuccess {
  type: "GET_JORNEY_SUCCESS";
  payload: any;
}

export interface createJorneyBegin {
  type: "CREATE_JORNEY_BEGINE";
}
export interface createJorneySuccess {
  type: "CREATE_JORNEY_SUCCESS";
}

export interface getStationsBegin {
  type: "GET_STATION_BEGIN";
}
export interface getStationsSuccess {
  type: "GET_STATION_SUCCESS";
  payload: any;
}
export interface handleChange {
  type: "HANDLE_CHANGE";
  payload: any;
}
export interface clearFilters {
  type: "CLEAR_FILTERS";
}
export interface changePage {
  type: "CHANGE_PAGE";
  payload: { page: number };
}
export interface setEditStation {
  type: "SET_EDIT_STATION";
  payload: { id: number };
}

export interface deleteStationBegin {
  type: "DELETE_STATION_BEGIN";
}
export interface deleteStationError {
  type: "DELETE_STATION_ERROR";
}
export interface clearValues {
  type: "CLEAR_VALUES";
}
export interface creatStationBegin {
  type: "CREATE_STATION_BEGIN";
}
export interface createStationSuccess {
  type: "CREATE_STATION_SUCCESS";
}
export interface createStationError {
  type: "CREATE_STATION_ERROR";
  payload: { msg: string };
}
export interface handleModal {
  type: "TOGGLE_MODAL";
  payload: { x: any; y: any; Adress: any };
}
export interface closeModal {
  type: "CLOSE_MODAL";
}

export interface handleSorting {
  type: "HANDLE_SORT";
  payload: string;
}
export interface handleJorneyCalculation {
  type: "HANDLE_JORNEY_CALCULATION";
  payload: any;
}

export type Action =
  | DisplayAlert
  | ClearAlert
  | toggleSidebar
  | getStationsBegin
  | getStationsSuccess
  | handleChange
  | clearFilters
  | changePage
  | setEditStation
  | deleteStationBegin
  | deleteStationError
  | clearValues
  | creatStationBegin
  | createStationSuccess
  | createStationError
  | handleModal
  | getJorneysBegin
  | getJorneySuccess
  | createJorneyBegin
  | createJorneySuccess
  | closeModal
  | handleSorting
  | handleJorneyCalculation;
