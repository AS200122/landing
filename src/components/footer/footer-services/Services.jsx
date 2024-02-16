import { servicesConfig } from "../../../config";
import { Link } from "react-router-dom";

import "./Services.scss";

export default function Services() {
  return (
    <div className="services">
      {servicesConfig.map(({ id, title, text, link }) => {
        return (
          <Link to={link}>
            <p className="services-title" key={id}>
              {title}
            </p>
            <p>{text}</p>
          </Link>
        );
      })}
    </div>
  );
}
