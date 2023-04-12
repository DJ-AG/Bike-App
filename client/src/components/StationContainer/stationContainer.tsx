import { useEffect } from "react";
import { Station, Loading, Alert, PageBtnContainer } from "../index";
import Wrapper from "./stationContainer_wrapper";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { useAction } from "../../hooks/useActions";
import { loadMapApi } from "../../utils/GoogleMapsUtils";

const StationContainer = () => {
  const {
    stations,
    isLoading,
    page,
    totalStations,
    search,
    numOfPages,
    showAlert,
    pageLimit,
  } = useTypedSelector((state) => state.stations);
  const { getStations } = useAction();
  useEffect(() => {
    getStations();
    // eslint-disable-next-line
  }, [page, search]);
  useEffect(() => {
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener("load", function () {});
  }, []);
  if (isLoading) {
    return <Loading center />;
  }

  if (stations.length === 0) {
    return (
      <Wrapper>
        <h2>No stations to display...</h2>
      </Wrapper>
    );
  }
  const indexOfLastStation = page * pageLimit;
  const indexOfFirstStation = indexOfLastStation - pageLimit;
  const Render = stations
    .filter(
      (find: any) =>
        find.Name.toLowerCase().includes(search.toLowerCase()) ||
        find.Osoite.toLowerCase().includes(search.toLowerCase())
    )
    .slice(indexOfFirstStation, indexOfLastStation)
    .map((station: any) => {
      return <Station key={station._id} {...station} />;
    });

  return (
    <Wrapper>
      {showAlert && <Alert />}
      <h5>
        {totalStations} station{stations.length > 1 && "s"} found
      </h5>
      <div className="stations">{Render}</div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default StationContainer;
