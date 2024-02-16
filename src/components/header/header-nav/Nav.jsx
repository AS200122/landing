import { navConfig } from "../../../config";
import { Link } from "react-router-dom";

import "./Nav.scss";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-menu">
        {navConfig.map(({ id, title, link }) => {
          return (
            <Link to={link} key={id} className="nav-menu-link">
              {title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
