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
  | getStationsSuccess;
