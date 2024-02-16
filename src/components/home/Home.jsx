import HomeAboutUs from "./home-about/SectionAboutUs";
import HomeGolden from "./home-golden/SectionGoldenHour";
import HomeImage from "./home-image/HomeImage";
import HomeProducts from "./home-products/Section";
import HomeSeason from "./home-season/SectionSeason";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <HomeImage />
      <HomeProducts />
      <HomeGolden />
      <HomeSeason />
      <HomeAboutUs />
    </div>
  );
};

export default Home;
