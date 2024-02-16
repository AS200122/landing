import AboutUsImage from "./about-image/AboutUsImage";
import AboutContent from "./about-content/AboutContent";

import "./SectionAboutUs.scss";

export default function HomeAboutUs() {
  return (
    <section className="about-Us">
      <AboutUsImage />
      <AboutContent />
    </section>
  );
}
