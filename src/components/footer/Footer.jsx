import AboutUs from "./footer-about-Us/AboutUs";
import FooterBottom from "./footer-bottom/FooterBottom";
import Locations from "./footer-locations/Locations";
import Material from "./footer-material/Material";
import Services from "./footer-services/Services";
import SignUp from "./footer-sign/SignUp";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Services />
        <AboutUs />
        <Material />
        <Locations />
        <SignUp />
      </div>
      <div className="footer-bottom">
        <FooterBottom />
      </div>
    </footer>
  );
}
