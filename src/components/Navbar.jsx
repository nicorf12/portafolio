import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Button from './Button'
import Settings from "./Settings"; // Componente para el menú emergente

const Navbar = ({ menu, loadLanguageData }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNavbar(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const setTheme = (theme) => {
    console.log('Tema seleccionado:', theme);
  };
  
  return (
    <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      {menu.items?.map((item, index) => (
        <a key={index} href={item.url}>
          {item.title}
        </a>
      ))}
      <Button className="settings" onClick={handleOpenDialog}>
        ⚙️
      </Button>

      <Settings
        settings={menu.settings}
        open={openDialog}
        onClose={handleCloseDialog}
        setLanguage={loadLanguageData}
        setTheme={setTheme}
      />
    </nav>
    
  );
};

export default Navbar;
