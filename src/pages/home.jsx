import Hero from "../components/hero/Hero";
import AboutUs from "../components/aboutUs";
import Services from "../components/services";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="aboutUs">
        <AboutUs />
      </div>
      <div >
        <Services />
      </div>
    </div>
  );
};

export default Home;
