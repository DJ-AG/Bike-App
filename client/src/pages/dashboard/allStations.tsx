import { StationContainer, SearchContainer } from "../../components/index";

const allStations = () => {
  return (
    <div>
      <SearchContainer sorting="no" page="station" />
      <StationContainer />
    </div>
  );
};

export default allStations;
