import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Popular from "./Popular";
import Explore from "./Explore";
import Join from "./Join";
import Footer from "./Footer";
import CandiLempuyunganDetail from "./CandiLempuyunganDetail";
import GWKDetail from "./GWKDetail";
import UluwatuDetail from "./UluwatuDetail";
import Team from "./Team";
import "./styles.css";

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const hideFooter = location.pathname === '/Team';

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main className="main">
              <Home />
              <About />
              <Popular />
              <Explore />
              <Join />
            </main>
          }
        />
        <Route path="/CandiLempuyunganDetail" element={<CandiLempuyunganDetail />} />
        <Route path="/GWKDetail" element={<GWKDetail />} />
        <Route path="/UluwatuDetail" element={<UluwatuDetail />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
      {/* Scroll Up Button */}
      <a href="#scroll-up" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;
