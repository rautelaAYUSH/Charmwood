import Nav from "./Nav.jsx";
import "./hero.scss";
import { Body } from "./Body.jsx";
import AboutUs from "../aboutUs.jsx";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="nav">
          <Nav />
        </div>
        <div className="body">
          <Body />
        </div>
      </div>
      <div className="aboutUs">
        <AboutUs/>
      </div>
    </>
  );
}

export default Hero;
