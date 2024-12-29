import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowNavbar(true); // Mostrar cuando estamos arriba
      } else if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNavbar(false); // Ocultar al desplazarse hacia abajo
      }
      setLastScrollY(window.scrollY);
    };

    const handleMouseEnter = () => {
      if (!showNavbar) setShowNavbar(true); // Mostrar navbar al mover el mouse arriba
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [lastScrollY, showNavbar]);

  return (
    <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <a href="#home">Inicio</a>
      <a href="#about">Acerca de mí</a>
      <a href="#projects">Proyectos</a>
      <a href="#goals">Metas</a>
      <a href="#contact">Contacto</a>
    </nav>
  );
};

export default Navbar;
