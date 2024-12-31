import React from "react";
import "./AboutMe.css"; // Archivo CSS para los estilos

const AboutMe = ({ about }) => {
  const renderDescription = (description) => {
    return description.split("\n").map((line, index) => (
      <p key={index}>{line}</p>
    ));
  };

  return (
    <div className="about-me" id="about">
      <section className="about-header">
        <h1>{about.title}</h1>
      </section>
      <section className="about-content">
        <div className="about-text">
          {renderDescription(about.description)}
        </div>
        <div className="about-image">
          <img src={`/portafolio/assets/foto.svg`} alt="Nicolás" />
        </div>
      </section>
      <section className="about-skills">
        {about.tools.map((toolCategory, index) => (
          <div key={index} className="skills-column">
            <h3>{toolCategory.title}</h3>
            {toolCategory.items.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutMe;
