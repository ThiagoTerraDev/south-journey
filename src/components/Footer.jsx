import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { ReactComponent as Github } from '../assets/github.svg';


const Footer = () => {
  return (
    <footer>

      <div className={`${styles.footerConteudo} container1`}>
        <Logo />

        <div className={styles.footerContato}>
          <h3>CONTATO</h3>
          <div className={styles.footerContato1}>
            <p>+55 21 99999-9999</p>
            <p>contato@southjourney.com</p>
          </div>
          <div className={styles.footerContato2}>
            <p>Rua das Américas, 234 - Flamengo</p>
            <p>Rio de Janeiro - RJ</p>
          </div>
          <div className={styles.redesSociaisFooter}>
            <a href="https://www.linkedin.com/in/thiago-terra-158a71266/" target="_blank" rel="noreferrer"><Linkedin /></a>
            <a href="https://github.com/ThiagoTerraDev" target="_blank" rel="noreferrer"><Github /></a>
          </div>
        </div>

        <div className={styles.footerInfos}>
          <h3>INFORMAÇÕES</h3>
          <a href="/sobre">Sobre</a>
          <a href="/termosecondicoes">Termos e Condições</a>
        </div>
      </div>

      <p className="container1">South Journey © Todos os direitos reservados.</p>

    </footer>
  );
};

export default Footer;
