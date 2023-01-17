import Wrapper from "./Navbar_Wrapper";
import { Link } from "react-router-dom";

//import { FaAlignLeft } from 'react-icons/fa'
import { useState } from "react";
const Navbar = () => {
  const [showLogout, setShowLogout] = useState(true);
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn">
          LOGO#
        </button>
        <ul>
          <Link to="/">About</Link>
          <Link to="/show">All Stations</Link>
          <Link to="/create">Add Station</Link>
          <Link to="/profile">profile</Link>
        </ul>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            Register/Login
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" className="dropdown-btn">
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
