import React, { useState }from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as MenuMobile } from "../assets/menu-mobile.svg";
import { ReactComponent as LogoMobile } from "../assets/logo-mobile.svg";


const Header = () => { 

  const [isMenuActive, setMenuActive] = useState(false);

  const handleClickMenu = () => {
    setMenuActive(!isMenuActive)
  };

  const handleGlobalClick = (event) => {
    const menuButton = document.querySelector('[data-menu="button"]');
    const navigation = document.getElementById('menu');

    if (
      menuButton &&
      navigation &&
      !menuButton.contains(event.target) &&
      !navigation.contains(event.target)
    ) {
      setMenuActive(false)
    }
  };

  document.addEventListener('click', handleGlobalClick);

  return (
    <header className={styles.header}>
      <div className="container1">
        <div className={styles.menuMobile}>
          <LogoMobile className={styles.logoMobile} />
          <button data-menu="button" aria-expanded="false" aria-controls="menu" onClick={handleClickMenu}>
            <MenuMobile />
          </button>
        </div>
        <nav className={`${styles.navigation} ${isMenuActive ? styles.active : ""}`} data-menu="list" id="menu">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/" end aria-label="South Journey - Home">
            <Logo />
          </NavLink>
          <NavLink to="/termosecondicoes">Termos e Condições</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
