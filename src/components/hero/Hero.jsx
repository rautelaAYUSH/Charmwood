import Nav from "./Nav.jsx";
import "./hero.scss";
import { Body } from "./Body.jsx";

const Hero = () => {
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
    </>
  );
}

export default Hero;
