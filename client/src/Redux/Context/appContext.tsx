import React from "react";

const initialUserState = {
  userLoading: true,
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: null,
  status: "pending",
};

const initialStationState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  isEditing: false,
  editStationId: "",
  stationLocation: "",
  stationTypeOptions: ["Helsinki", "Espoo"],
  totalStations: 0,
  numOfPages: 1,
  page: 1,
  search: "",
  stations: [],
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

export interface IProviderProps {
  children?: any;
}

type AppContextState = { isMenuOpen: boolean; isSideOpen: boolean }
// omitting additional array wrapped around context value

// renamed `initialState` to `appCtxDefaultValue` to be a bit more concise
const AppContext = React.createContext([initialStationState,initialUserState]);

const AppProvider = (props: IProviderProps) => {
  const [stationState, setStationState] = React.useState(initialStationState);
  const [userState,setUserState] = React.useState(initialUserState)

  return (
      <AppContext.Provider value={[stationState,userState]}>
          {props.children}
      </AppContext.Provider>
  );
};


const useAppContext = () => {
  return React.useContext(AppContext);
};

export { useAppContext, AppProvider, initialUserState, initialStationState };
