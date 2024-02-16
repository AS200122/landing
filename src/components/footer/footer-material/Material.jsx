import { materialConfig } from "../../../config";
import { Link } from "react-router-dom";

import "./Material.scss";

export default function Material() {
  return (
    <div className="material">
      {materialConfig.map(({ id, title, text, link }) => {
        return (
          <Link to={link}>
            <p className="material-title" key={id}>
              {title}
            </p>
            <p>{text}</p>
          </Link>
        );
      })}
    </div>
  );
}
