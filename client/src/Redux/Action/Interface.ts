
export interface DisplayAlert {
    type: "DISPLAY_ALERT";
  }
  
  export  interface ClearAlert {
    type: "CLEAR_ALERT";
  }
  
  export  interface setupUserBegin {
    type: "SETUP_USER_BEGIN";

  }
  export  interface setupUserSuccess {
    type: "SETUP_USER_SUCCESS";
    action?:{}
  }
  export  interface SetupUserError {
    type: "SETUP_USER_ERROR";
    action?:string
  }

  export type Action =
  | DisplayAlert
  | ClearAlert
  | setupUserBegin
  | setupUserSuccess
  | SetupUserError;
