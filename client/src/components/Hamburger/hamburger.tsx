import Wrapper from "./hamburger_wrapper";
import { FaTimes } from "react-icons/fa";

import NavLinks from "../NavLinks/NavLinks";
import { useAction } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";

const SmallSidebar = () => {
  const { toggleSidebar } = useAction();
  const { showSidebar } = useTypedSelector((state) => state.users);
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
