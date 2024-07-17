import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Gallery from "./pages/gallery";
import Layout from "./pages/layout/layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="faq" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
