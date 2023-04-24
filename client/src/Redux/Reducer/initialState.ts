export interface initialStateProps {
  Nimi: string;
  Name: string;
  Osoite: string;
  Kaupunki: string;
  KaupunkiTypeOption: string[];
  OperaattorTypeOptions: string[];
  Operaattor: string;
  Kapasiteet: string;
  x: string;
  y: string;
  X: string;
  Y: string;
  stations: string[];
  ModalToggle: boolean;
  ModalAdress: string;
  scriptLoaded: boolean;
  search: string;
  totalStations: number;
  numOfPages: number;
  page: number;
  pageLimit: number;
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  showSidebar: boolean;
  Departure: string,
  Return: string,
  Departure_station_id: string,
  Departure_station_name: string,
  Return_station_id: string,
  Return_station_name: string,
  Covered_distance_m: string,
  Duration: string
  jorneys:string[]
  totalJorneys:number,
  sort: string,
  sortOptions: string[],


}

export const initialState: initialStateProps = {
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
  totalStations: 0,
  numOfPages: 1,
  page: 1,

  /*Global Settings */
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  pageLimit: 10,
  showSidebar: false,

  /*Jorney Settings */
  jorneys:[],
  totalJorneys:0,
  Departure: "",
  Return: "",
  Departure_station_id: "",
  Departure_station_name: "",
  Return_station_id: "",
  Return_station_name: "",
  Covered_distance_m: "",
  Duration: "",
  sort: 'Shortest Duration',
  sortOptions: ['Longes Distance', 'Shortest Distance', 'Longest Duration', 'Shortest Duration'],
};

