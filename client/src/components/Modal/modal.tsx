import { ImCross } from "react-icons/im";
import { useAction } from "../../hooks/useActions";

import { useTypedSelector } from "../../hooks/useTypeSelector";
import { Map } from "../index";
import Wrapper from "./modal_wrapper";
const Modal = () => {
  const { ModalAdress, X, Y } = useTypedSelector((state) => state.stations);
  const { handleCloseModal } = useAction();
  const Location = { X, Y };
  const closeModalHandler = () => {
    handleCloseModal();
  };
  return (
    <Wrapper>
      <header>
        <h2>{ModalAdress.toUpperCase()}</h2>
        <button className="btn close-btn" onClick={() => closeModalHandler()}>
          <ImCross />
        </button>
      </header>

      <Map
        mapType={google.maps.MapTypeId.ROADMAP}
        mapTypeControl={true}
        defaultLocation={Location}
      />
    </Wrapper>
  );
};

export default Modal;
