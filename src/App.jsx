import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Gallery from "./pages/gallery";
import Layout from "./pages/layout/layout";
import Faq from "./pages/faq";
import Contact from "./pages/contact";
import About from "./pages/about";
import Services from "./pages/services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="our-story" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
