import { FaLocationArrow } from "react-icons/fa";
import Wrapper from "./Jorney_wrapper";
import { Modal, StationInfo } from "../index";
import { useTypedSelector } from "../../hooks/useTypeSelector";

const Station = (props: any) => {
  const { ModalToggle } = useTypedSelector((state) => state.stations);
  let data = JSON.stringify(props)
    .replaceAll(" ", "_")
    .replaceAll(" ", "_")
    .replaceAll("(", "")
    .replaceAll(")", "");
  let fixedData = JSON.parse(data);
  const {
    Departure,
    Return,
    Departure_station_name,
    Return_station_name,
    Covered_distance_m,
    Duration_sec,
  } = fixedData;
  let fixDuration;
  let duration;
  for (let i in Duration_sec) {
    fixDuration = Duration_sec[i];
    let h = Math.floor(fixDuration / 3600);
    let m = Math.floor((fixDuration % 3600) / 60);
    let s = Math.floor((fixDuration % 3600) % 60);
    let hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    let mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    let sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    duration = hDisplay + mDisplay + sDisplay;
  }
  return (
    <Wrapper>
      {ModalToggle && <Modal />}
      <div className="content">
        <div className="content-center">
          <StationInfo
            icon={<FaLocationArrow />}
            text={`Departure: ${Departure.replaceAll("T", " Time: ")}`}
          />
          <StationInfo
            icon={<FaLocationArrow />}
            text={`Returned: ${Return.replaceAll("T", " Time: ")}`}
          />
          <StationInfo
            icon={<FaLocationArrow />}
            text={`Departure station: ${Departure_station_name.replaceAll(
              "_",
              " "
            )}`}
          />
          <StationInfo
            icon={<FaLocationArrow />}
            text={`Return station name: ${Return_station_name.replaceAll(
              "_",
              " "
            )}`}
          />
          <StationInfo
            icon={<FaLocationArrow />}
            text={`Covered distance: ${Covered_distance_m} Meters `}
          />
          <StationInfo
            icon={<FaLocationArrow />}
            text={`Duration: ${duration}`}
          />
        </div>
        <footer>
          <div className="actions">
            {/* <button
              type="button"
              className="btn modal-btn"
              onClick={() => handleModal(x, y, Osoite ? Osoite : Adress)}
            >
              View Map
            </button> */}
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Station;
