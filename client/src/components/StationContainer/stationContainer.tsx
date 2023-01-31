import { useEffect } from "react";
import {Station, Loading, Alert, PageBtnContainer } from "../index";
import Wrapper from "./stationContainer_wrapper";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { useAction } from "../../hooks/useActions";

const StationContainer = () => {
  const {
    stations,
    isLoading,
    page,
    totalStations,
    search,
    searchType,
    numOfPages,
    showAlert,
    pageLimit,
  } = useTypedSelector((state) => state.stations);
  const { getStations } = useAction();
  useEffect(() => {
    getStations();
    // eslint-disable-next-line
  }, [page, search, searchType]);
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
  const currentStations = stations.slice(
    indexOfFirstStation,
    indexOfLastStation
  );

  const Render = currentStations
    .filter((find: any) =>
      find.Name
        ? find.Name.toLowerCase().includes(search)
        : find.Adress.toLowerCase().includes(search)
    )
    .map((station: any) => {
      return (
        <div>
          <Station key={station._id} {...station} />
        </div>
      );
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
