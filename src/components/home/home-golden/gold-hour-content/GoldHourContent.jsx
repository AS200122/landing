import { goldDataConfig } from "../../../../config";

import "./GoldHourContent.scss";

export default function GoldenContent() {
  return (
    <>
      <div className="gold">
        {goldDataConfig.map(({ id, title, date }) => {
          return (
            <div key={id} className="gold-date">
              <p className="gold-date-text">{title}</p>
              <div className="gold-date-dot"></div>
              <p className="gold-date-text">{date}</p>
            </div>
          );
        })}
        <div className="gold-golden">
          <p className="gold-golden-during">During the golden hour.</p>
          <p className="gold-golden-lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
            Metus vulputate eu <br /> scelerisque felis imperdiet proin
            fermentum. Cras semper auctor neque <br /> vitae tempus quam
            pellentesque. Elementum sagittis vitae et leo duis. <br />
            <br />
            Elementum sagittis vitae et leo duis. Libero nunc consequat interdum{" "}
            <br />
            varius. Habitant morbi tristique senectus et netus et malesuada
            fames ac.{" "}
          </p>
          <button className="gold-golden-button">READ MORE</button>
        </div>
      </div>
    </>
  );
}
