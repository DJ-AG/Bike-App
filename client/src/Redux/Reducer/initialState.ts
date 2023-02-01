const token = localStorage.getItem("token");
export const stationState = {
  Nimi: "",
  Name: "",
  Adress: "",
  City: "",
  CityTypeOptions: ["Helsinki", "Espoo"],
  OperaattorTypeOptions: ["CityBike Finland", "test"],
  Operaattor: "",
  Kapasiteet: "",
  x: "",
  y: "",
  stations: [],
  editStationId: "",

  /*Modal Data */
  ModalToggle: false,
  ModalAdress: "",

  /*Map Data */
  X: "",
  Y: "",
  scriptLoaded:false,

  search: "",
  searchType: "all",
  sort: "latest",
  totalStations: 0,
  numOfPages: 1,
  page: 1,
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  pageLimit: 10,
};
export const userState = {
  userLoading: true,
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: null,
  token: token,
  showSidebar: false,
};
