import { footerBottomConfig } from "../../../config";
import { Link } from "react-router-dom";

import "./FooterBottom.scss";

export default function FooterBottom() {
  return (
    <div className="footer-bottom-content">
      <p>© APOLLONIAN, LLC</p>
      <div className="footer-bottom-content-links">
        {footerBottomConfig.map(({ id, text, link }) => {
          return (
            <>
              <Link to={link} key={id}>
                {text}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
