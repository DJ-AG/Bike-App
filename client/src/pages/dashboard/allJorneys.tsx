import { JorneyContainer, SearchContainer } from "../../components";
import AddJorney from "./addJorney";

const allStations = () => {
  return (
    <div>
      <AddJorney/>
      <SearchContainer/>
      <JorneyContainer/>
    </div>
  );
};

export default allStations;
