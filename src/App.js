import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaHome, FaLeaf, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import HomePage from "./pages/HomePage";
import PlantsPage from "./pages/PlantsPage";
import PlantDetailPage from "./pages/PlantDetailPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import SplashScreen from "./components/SplashScreen";
import "./App.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashEnd = () => {
    setShowSplash(false);
  };

  // Menambahkan efek fade-out setelah splash screen selesai
  useEffect(() => {
    if (!showSplash) {
      const splashElement = document.querySelector(".splash-screen");
      splashElement && splashElement.classList.add("fade-out");
    }
  }, [showSplash]);

  return (
    <>
      {showSplash ? (
        <SplashScreen onSplashEnd={handleSplashEnd} />
      ) : (
        <Router>
          <header className="header">
            <h1 className="header-title">That All About Plants</h1>
          </header>

          <div className="page-container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/plants" element={<PlantsPage />} />
              <Route path="/plants/:id" element={<PlantDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>

          <nav className="navbar">
            <ul className="nav-links">
              <li>
                <a href="/" className="nav-link">
                  <FaHome /> Home
                </a>
              </li>
              <li>
                <a href="/plants" className="nav-link">
                  <FaLeaf /> Plants
                </a>
              </li>
              <li>
                <a href="/contact" className="nav-link">
                  <FaPhoneAlt /> Contact
                </a>
              </li>
              <li>
                <a href="/about" className="nav-link">
                  <FaInfoCircle /> About
                </a>
              </li>
            </ul>
          </nav>
        </Router>
      )}
    </>
  );
}

export default App;
