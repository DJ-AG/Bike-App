import { StationContainer, SearchContainer } from "../../components/index";

const allStations = () => {
  return (
    <div>
      <SearchContainer page="station" />
      <StationContainer />
    </div>
  );
};

export default allStations;
