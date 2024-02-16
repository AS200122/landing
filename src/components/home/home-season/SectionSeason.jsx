import SectionSeasonContent from "./section-season-content/SectionSeasonContent";
import SeasonImage from "./section-season-image/SeasonImage";

import "./SectionSeason.scss";

export default function HomeSeason() {
  return (
    <section className="section-season">
      <SectionSeasonContent />
      <SeasonImage />
    </section>
  );
}
