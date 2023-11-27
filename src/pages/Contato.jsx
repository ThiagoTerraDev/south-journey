import React from "react";
import Head from "../components/Head";
import styles from "./Contato.module.css";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";


const Contato = () => {
  return (
    <div>
      <Head title="Contato" description="Nosso contato."/>
      
      <main>
        <div className={`${styles.conteudoPrincipal} container2`}>
          
          <section className={`${styles.dadosRedes}`}>
            <h2>DADOS</h2>
            <p>+55 21 99999-9999 <br />contato@southjourney.com</p>
            <p>Rua das Américas, 234 - <br />Flamengo, Rio de Janeiro - RJ</p>
            <h2>SIGA-NOS</h2>
            <div className={`${styles.redesSociais}`}>
              <a href="https://www.linkedin.com/in/thiago-terra-158a71266/" target="_blank" rel="noreferrer"><Linkedin /></a>
              <a href="https://github.com/ThiagoTerraDev" target="_blank" rel="noreferrer"><Github /></a>
            </div>
          </section>

          <section className={`${styles.formularioContato}`}>
            <h2>FORMULÁRIO DE CONTATO</h2>
            <form className={`${styles.formulario}`} action="/">
              <div className={`${styles.inputsContainer}`}>
                <div>
                  <label htmlFor="nome">Nome</label>
                  <input type="text" id='nome' name='nome' placeholder='Seu nome' required />
                </div>
                <div>
                  <label htmlFor="telefone">Telefone</label>
                  <input type="text" id='telefone' name='telefone' placeholder='(21) 99999-9999' required />
                </div>                               
                <div>
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id='email' name='email' placeholder='contato@email.com' required />
                </div>
                <div>
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea rows={5} id='mensagem' name='mensagem' placeholder='O que você precisa?'></textarea>
                </div>
              </div>
            </form>
          </section>
          
        </div>
      </main>

    </div>
  )
};

export default Contato;
