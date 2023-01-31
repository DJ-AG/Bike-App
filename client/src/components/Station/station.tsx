import {
  FaLocationArrow,
  FaCity,
} from "react-icons/fa";
import { MdAssistantNavigation, MdDirectionsBike } from "react-icons/md";
import Wrapper from "./station_wrapper";
import { Modal, StationInfo } from "../index";
import { useAction } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";

const Job = ({
  _id,
  Name,
  City,
  Adress,
  Osoite,
  Kaupunki,
  x,
  y,
  Operaattor,
}: {
  Kaupunki: any;
  _id: any;
  City: string;
  Adress: string;
  x: string;
  y: string;
  Name: string;
  isLoading: any;
  Operaattor: any;
  Osoite: string;
}) => {
  const { deleteStation, handleModal } = useAction();
  const { ModalToggle } = useTypedSelector((state) => state.stations);
  return (
    <Wrapper>
      {ModalToggle && <Modal />}
      <header>
        <div className="main-icon">{!Name ? Name : Name.charAt(0)}</div>
        <div className="info">
          <h5>{Name}</h5>
          <p>
            <FaCity /> {Kaupunki || City}
          </p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <StationInfo
            icon={<FaLocationArrow />}
            text={Adress || Osoite || ""}
          />
          <StationInfo icon={<MdDirectionsBike />} text={Operaattor || ""} />
          <StationInfo
            icon={<MdAssistantNavigation />}
            text={`Y: ${y}, X: ${x}` || ""}
          />
        </div>
        <footer>
          <div className="actions">
            <button
              type="button"
              className="btn modal-btn"
              onClick={() => handleModal(x,y,Adress)}
            >
              View Map
            </button>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => deleteStation(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
