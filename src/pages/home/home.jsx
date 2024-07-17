import AboutUs from "../../components/aboutUs";
import Services from "../../components/services";
import "./home.scss";
import Body from "../../components/hero/Body";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <Body />
      </div>
      <div className="aboutUs">
        <AboutUs />
      </div>
      <div>
        <Services />
      </div>
    </div>
  );
};

export default Home;
