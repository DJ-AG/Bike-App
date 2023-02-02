const token = localStorage.getItem("token");
export const stationState = {
  Nimi: "",
  Name: "",
  Osoite: "",
  Kaupunki: "",
  KaupunkiTypeOption: ["Helsinki", "Espoo"],
  OperaattorTypeOptions: ["CityBike Finland", "test"],
  Operaattor: "",
  Kapasiteet: "",
  x: "",
  y: "",
  stations: [],

  /*Modal Data */
  ModalToggle: false,
  ModalAdress: "",

  /*Map Data */
  X: "",
  Y: "",
  scriptLoaded: false,

  search: "",

  /*Future implementation */
  /*
  searchType: "all",
  sort: "latest",
  */

  totalStations: 0,
  numOfPages: 1,
  page: 1,

  /*Global Settings */
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  pageLimit: 10,
};
export const userState = {
  /* User Settings for future implementations */
  userLoading: true,
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: null,
  token: token,
  showSidebar: false,
};
