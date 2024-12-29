import React from "react";
import "./AboutMe.css"; // Archivo CSS para los estilos

const AboutMe = () => {
  return (
    <div className="about-me" id="about">
      <section className="about-header">
        <h1>ACERCA DE MI</h1>
      </section>
      <section className="about-content">
        <div className="about-text">
          <p>
            ¡Hola! Soy Nicolás, estudiante de Ingeniería Informática en la Universidad de Buenos Aires,
            actualmente en tercer año de carrera. Apasionado por la tecnología y el aprendizaje continuo,
            mi principal interés radica en el campo de la ciberseguridad, un área que considero esencial para
            proteger a las personas y organizaciones en un mundo cada vez más digitalizado. Aunque mi interés
            esté centrado en la seguridad, estoy abierto a todo tipo de proyectos que me permitan aprender y
            contribuir en diversas áreas tecnológicas.
          </p>
          <p>
            Me apasiona entender cómo funcionan las cosas desde su núcleo y cómo pueden ser vulneradas. Esta curiosidad
            me motiva a especializarme en ciberseguridad, un campo que considero esencial para proteger a las personas y
            organizaciones en un mundo cada vez más digitalizado. Sin embargo, también disfruto desarrollando proyectos
            interesantes en otras áreas, lo que me permite ampliar mi conocimiento y adaptarme a diferentes desafíos.
          </p>
        </div>
        <div className="about-image">
          <img src="./src/assets/foto.svg" alt="Nicolás" />
        </div>
      </section>
      <section className="about-skills">
        <div className="skills-column">
          <h3>ENTORNOS DE DESARROLLO</h3>
          <p>Visual Studio Code</p>
          <p>IntelliJ</p>
          <p>Goland</p>
        </div>
        <div className="skills-column">
          <h3>HERRAMIENTAS</h3>
          <p>Git</p>
          <p>Github</p>
          <p>Docker</p>
          <p>Bash</p>
        </div>
        <div className="skills-column">
          <h3>LENGUAJES</h3>
          <p>GO</p>
          <p>Python</p>
          <p>C</p>
          <p>Java</p>
          <p>Javascript</p>
        </div>
        <div className="skills-column">
          <h3>BASES DE DATOS</h3>
          <p>MySQL</p>
          <p>PostgreSQL</p>
          <p>MongoDB</p>
          <p>Neo4j</p>
        </div>
        <div className="skills-column">
          <h3>SISTEMAS OPERATIVOS</h3>
          <p>Linux</p>
          <p>Windows</p>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
