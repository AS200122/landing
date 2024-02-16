import seasonImg from "../../../../assets/images/season.png";

import "./SeasonImage.scss";

export default function SeasonImage() {
  return (
    <div className="season-image">
      <img src={seasonImg} alt="" />
    </div>
  );
}
