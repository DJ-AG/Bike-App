import { FaLocationArrow, FaCity, FaStoreAlt } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";
import Wrapper from "./station_wrapper";
import { Modal, StationInfo } from "../index";
import { useAction } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";

const Station = ({
  _id,
  Name,
  Adress,
  Osoite,
  Kaupunki,
  x,
  y,
  Operaattor,
  Kapasiteet,
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
  Kapasiteet: string;
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
            <FaCity /> {Kaupunki}
          </p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <StationInfo icon={<FaLocationArrow />} text={`Adress: ${Osoite}`} />
          <StationInfo
            icon={<MdDirectionsBike />}
            text={`Bike Capasity: ${Kapasiteet}`}
          />
          <StationInfo icon={<FaStoreAlt />} text={`Provider: ${Operaattor}`} />
        </div>
        <footer>
          <div className="actions">
            <button
              type="button"
              className="btn modal-btn"
              onClick={() => handleModal(x, y, Osoite ? Osoite : Adress)}
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

export default Station;
