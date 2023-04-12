import links from "./Utils/Links";
import { NavLink } from "react-router-dom";
import Wrapper from "./NavLinks_styles";

interface NavLinksProps {
  toggleSidebar: any;
}

const NavLinks: React.FC<NavLinksProps> = ({ toggleSidebar }) => {
  return (
    <Wrapper>
      <div className="nav-links">
        {links.map((link) => {
          const { text, path, id, icon } = link;
          return (
            <NavLink
              to={path}
              key={id}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default NavLinks;
