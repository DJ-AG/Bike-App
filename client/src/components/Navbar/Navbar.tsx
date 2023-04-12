import Wrapper from "./Navbar_Wrapper";
import { FaAlignLeft } from "react-icons/fa";
import { useAction } from "../../hooks/useActions";
import NavLinks from "../NavLinks/NavLinks";
import Hamburger from "../Hamburger/hamburger";

const Navbar = () => {
  const { toggleSidebar } = useAction();
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="hidden-burger">
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignLeft />
          </button>
        </div>
        <Hamburger />
        <div className="hidden-nav">
          <NavLinks toggleSidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
