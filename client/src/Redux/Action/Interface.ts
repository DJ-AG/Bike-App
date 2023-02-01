export interface DisplayAlert {
  type: "DISPLAY_ALERT";
}

export interface ClearAlert {
  type: "CLEAR_ALERT";
}

export interface setupUserBegin {
  type: "SETUP_USER_BEGIN";
}
export interface setupUserSuccess {
  payload: any;
  type: "SETUP_USER_SUCCESS";
  action?: {};
}
export interface SetupUserError {
  payload: any;
  type: "SETUP_USER_ERROR";
  action?: string;
}
export interface loginUserBegin {
  type: "LOGIN_USER_BEGIN";
}
export interface loginUserSuccess {
  payload: any;
  type: "LOGIN_USER_SUCCESS";
  action?: {};
}
export interface loginUserError {
  payload: any;
  type: "LOGIN_USER_ERROR";
  action?: string;
}

export interface logout {
  type: "LOGOUT_USER";
}
export interface toggleSidebar {
  type: "TOGGLE_SIDEBAR";
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

export type Action =
  | DisplayAlert
  | ClearAlert
  | setupUserBegin
  | setupUserSuccess
  | SetupUserError
  | loginUserBegin
  | loginUserSuccess
  | loginUserError
  | logout
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
  | closeModal;
