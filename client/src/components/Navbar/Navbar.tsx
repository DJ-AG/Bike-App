import Wrapper from "./Navbar_Wrapper";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { useAction } from "../../hooks/useActions";
import NavLinks from "../NavLinks/NavLinks";
import Hamburger from "../Hamburger/hamburger";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { logoutUser, toggleSidebar } = useAction();
  const { user } = useTypedSelector((state) => state.users);
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="hidden-burger">
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignLeft />
          </button>
        </div>
        <div className="hidden-nav">
        <NavLinks />
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <Hamburger />
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" className="dropdown-btn" onClick={logoutUser}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
