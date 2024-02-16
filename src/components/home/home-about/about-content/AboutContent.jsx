import "./AboutContent.scss";

export default function AboutContent() {
  return (
    <div className="about">
      <p className="about-made">What were we made for?</p>
      <p className="about-lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />{" "}
        eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Metus
        vulputate eu scelerisque felis imperdiet proin <br /> fermentum. Cras
        semper auctor neque vitae tempus quam <br /> pellentesque. Elementum
        sagittis vitae et leo duis. <br /> <br /> Elementum sagittis vitae et
        leo duis. Libero nunc consequat <br /> interdum varius. Habitant morbi
        tristique senectus et netus et <br /> malesuada fames ac.{" "}
      </p>
      <button className="about-button">ABOUT US</button>
    </div>
  );
}
