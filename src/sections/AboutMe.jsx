import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";

const AboutMe = ({ about }) => {
  const renderDescription = (description) => {
    return description.split("\n").map((line, index) => (
      <p key={index}>{line}</p>
    ));
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="about-me" id="about">
      <motion.section
        className="about-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={headerVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>{about.title}</h1>
      </motion.section>
      <section className="about-glass">
        <motion.div
          className="about-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {renderDescription(about.description)}
        </motion.div>
        <motion.div
          className="about-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={`/portafolio/assets/foto.svg`} alt="Nicolás" />
        </motion.div>
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
