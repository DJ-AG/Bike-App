const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

const state = {
    userLoading: true,
    isLoading: false,
    showAlert: false,
    alertText: "",
    alertType: "",
    user: user ? JSON.stringify(user) : null,
    status: "pending",
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
    token:token

  };

  export default state