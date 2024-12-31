import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Button from './Button';
import Settings from "./Settings"; // Componente para el menú emergente

const Navbar = ({ menu, loadLanguageData, changeTheme }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNavbar(false);
      } else if (window.scrollY < lastScrollY) {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true); 
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="navbar-container">
        <Button className="hamburger-icon" onClick={handleToggleMenu}>
          ☰
        </Button>

        <div className={`menu-items ${menuOpen ? "open" : ""}`}>
          {menu.items?.map((item, index) => (
            <a key={index} href={item.url}>
              {item.title}
            </a>
          ))}
        </div>

        <Button className="settings" onClick={handleOpenDialog}>
          ⚙️
        </Button>

        <Settings
          settings={menu.settings}
          open={openDialog}
          onClose={handleCloseDialog}
          setLanguage={loadLanguageData}
          setTheme={changeTheme}
        />
      </div>
    </nav>
  );
};

export default Navbar;
