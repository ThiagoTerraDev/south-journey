import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";


const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container1">
        <nav className={styles.navigation}>
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
