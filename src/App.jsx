import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/home/home";
import Gallery from "./pages/gallery";
import Layout from "./pages/layout/layout";
import Faq from "./pages/faq";
import PropTypes from "prop-types";

const TransitionApp = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="gallery"
            element={
              <PageTransition>
                <Gallery />
              </PageTransition>
            }
          />
          <Route
            path="faq"
            element={
              <PageTransition>
                <Faq />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  return (
    <Router>
      <TransitionApp />
    </Router>
  );
};

export default App;
