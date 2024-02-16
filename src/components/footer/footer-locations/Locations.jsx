import { locationsConfig } from "../../../config";
import { Link } from "react-router-dom";

import "./Locations.scss";

export default function Locations() {
  return (
    <div className="locations">
      {locationsConfig.map(({ id, title, text, link }) => {
        return (
          <Link to={link}>
            <p className="locations-title" key={id}>
              {title}
            </p>
            <p className="locationText">{text}</p>
          </Link>
        );
      })}
    </div>
  );
}
