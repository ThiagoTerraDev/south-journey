import React from "react";
import Head from "../components/Head";
import styles from "./Sobre.module.css";


const Sobre = () => {
  return (
    <div>
      <Head title="Sobre" description="Sobre a South Journey."/>
      
      <main>
        <section className={styles.sobreIntro}>
          <h1>O QUE NÓS FAZEMOS?</h1>
          <p>Bem-vindo à South Journey, a sua porta de entrada para explorar as maravilhas da América do Sul. Especializados em excursões emocionantes e inesquecíveis, oferecemos uma variedade de
          passeios em destinos de tirar o fôlego, incluindo o Brasil, Argentina, Chile, Peru e Uruguai.</p>
          <ul className={styles.listaBandeiras}>
            <li>
              <img src="src\assets\brazil-flag.png" alt="Bandeira Brasil" />
            </li>
            <li>
              <img src="src\assets\argentina-flag.png" alt="Bandeira Argentina" />
            </li>
            <li>
              <img src="src\assets\chile-flag.png" alt="Bandeira Chile" />
            </li>
            <li>
              <img src="src\assets\peru-flag.png" alt="Bandeira Peru" />
            </li>
            <li>
              <img src="src\assets\uruguai-flag.png" alt="Bandeira Uruguai" />
            </li>
          </ul>
        </section>

        <section className={`${styles.missaoSection} container1`}>
          <div>
            <h2>NOSSA MISSÃO: CONECTAR PESSOAS COM DESTINOS EXTRAORDINÁRIOS</h2>
            <p>Podemos proporcionar uma experiência de viagem verdadeiramente excepcional. Nossos roteiros cuidadosamente planejados são projetados para oferecer uma imersão autêntica na rica cultura, na deslumbrante natureza e nas fascinantes tradições dos destinos sul-americanos.</p>
            <p>Nossa equipe é composta por especialistas apaixonados por viagens, dedicados a tornar a sua experiência conosco verdadeiramente memorável. Com um profundo conhecimento local, nossos guias turísticos e equipe de suporte estão sempre prontos para garantir que cada detalhe da sua viagem seja perfeito.</p>            
          </div>
          <img src="src\assets\img-aviao.png" alt="Imagem de um avião no céu." />
        </section>
      </main>

    </div>
  )
}

export default Sobre;
