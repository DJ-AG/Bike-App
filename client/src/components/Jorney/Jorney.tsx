import Wrapper from "./Jorney_wrapper";
import { JorneyInfo } from "../index";
import TimeConverter from "../../utils/TimeImplementUtil";

interface JorneyProps {
  Departure: string;
  Return: string;
  Departure_station_name: string;
  Return_station_name: string;
  Covered_distance_m: string;
  Duration_sec: any;
}

const Station: React.FC<JorneyProps> = ({
  Departure,
  Return,
  Departure_station_name,
  Return_station_name,
  Covered_distance_m,
  Duration_sec,
}) => {
  let duration = TimeConverter(Duration_sec)
  return (
    <Wrapper>
      <div className="content">
        <div className="content-center">
          <JorneyInfo
            text={`Departure: ${Departure.replaceAll("T", " Time: ")}`}
          />
          <JorneyInfo text={`Returned: ${Return.replaceAll("T", " Time: ")}`} />
          <JorneyInfo
            text={`Departure station: ${Departure_station_name.replaceAll(
              "_",
              " "
            )}`}
          />
          <JorneyInfo
            text={`Return station name: ${Return_station_name.replaceAll(
              "_",
              " "
            )}`}
          />
          <JorneyInfo
            text={`Covered distance: ${Covered_distance_m} Meters `}
          />
          <JorneyInfo text={`Duration: ${duration}`} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Station;
