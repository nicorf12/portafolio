import React from "react";
import Navbar from "../components/Navbar";
import "./HeroBanner.css"; // Archivo CSS para estilos

const HeroBanner = ({header}) => {
  return (
    <div className="hero-banner" id="home">
      <Navbar />
      <div className="hero-content">
        <h1>
          {header.title} <span className="highlight">{header.name}</span>
        </h1>
        <p>{header.subtitle}</p>
      </div>
    </div>
  );
};

export default HeroBanner;
