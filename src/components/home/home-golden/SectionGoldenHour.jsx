import GoldenContent from "./gold-hour-content/GoldHourContent";
import GoldenImage from "./golden-image/GoldenImage";

import "./SectionGoldenHour.scss";

export default function HomeGolden() {
  return (
    <section className="section-golden-hour">
      <GoldenImage />
      <GoldenContent />
    </section>
  );
}
