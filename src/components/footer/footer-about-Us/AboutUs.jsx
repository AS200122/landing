import { aboutConfig } from "../../../config";
import { Link } from "react-router-dom";

import "./AboutUs.scss";

export default function AboutUs() {
  return (
    <div className="footer-about">
      {aboutConfig.map(({ id, title, text, link }) => {
        return (
          <Link to={link}>
            <p className="footer-about-title" key={id}>
              {title}
            </p>
            <p>{text}</p>
          </Link>
        );
      })}
    </div>
  );
}
