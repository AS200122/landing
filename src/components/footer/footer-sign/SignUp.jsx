import { socIconsConfig } from "../../../config";
import { Link } from "react-router-dom";

import "./SignUp.scss";

export default function SignUp() {
  return (
    <div className="sign-Up">
      <div className="sign-Up-text">
        <p className="sign-Up-text-ahead">You can be one step ahead.</p>
        <p>Sign up to hear about our updates on the dot.</p>
      </div>
      <div className="sign-Up-form">
        <input
          className="sign-Up-form-input"
          type="text"
          placeholder="Your email address"
        />
        <button className="sign-Up-form-button">SIGN UP</button>
      </div>
      <div className="sign-Up-socIcons">
        {socIconsConfig.map(({ id, icon, link }) => {
          return (
            <Link key={id} to={link}>
              {icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
