import { JorneyContainer, SearchContainer } from "../../components";

const allStations = () => {
  return (
    <div>
      <SearchContainer sorting="on" page="jorney"/>
      <JorneyContainer/>
    </div>
  );
};

export default allStations;
