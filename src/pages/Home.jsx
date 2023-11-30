import React, { useState, useEffect } from "react";
import Head from "../components/Head";
import styles from "./Home.module.css";
import Button from "../components/Button";


const Home = () => {

  const imagemInicial = "src/assets/home-bg-1.jpg";

  const [bolinhaAtiva, setBolinhaAtiva] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(imagemInicial);

  const handleClick = (index, newBackgroundImage) => {
    setBolinhaAtiva(index);
    setBackgroundImage(newBackgroundImage);
  }

  useEffect(() => {
    const images = [
      'src/assets/home-bg-1.jpg',
      'src/assets/home-bg-2.jpg',
      'src/assets/home-bg-3.jpg'
    ];
  
    const interval = setInterval(() => {
      const novoValorBolinha = (bolinhaAtiva + 1) % images.length;
      setBolinhaAtiva(novoValorBolinha);  
      setBackgroundImage(images[novoValorBolinha]);
    }, 5000);
  
    return () => clearInterval(interval);
  }, [bolinhaAtiva]); 

  return (
    <div>
      
      <Head title="Explore a América do Sul" description="South Journey | Explore a América do Sul."/>
      
      <main>

        <section className={styles.introducaoConteudo} style={{ backgroundImage: `url(${backgroundImage})` }}>
          <p className={styles.tagline}>História, cultura e beleza</p>
          <h1>AMÉRICA DO SUL <br /> O PARAÍSO É AQUI.</h1>
          <Button name="Fale conosco" variant="yellow" path="contato"/>
          <div className={styles.bolinhas}>
            <span 
              className={`${styles.bolinha} ${bolinhaAtiva === 0 ? styles.active : ''}`}
              onClick={() => handleClick(0, 'src/assets/home-bg-1.jpg')}
            ></span>
            <span 
              className={`${styles.bolinha} ${bolinhaAtiva === 1 ? styles.active : ''}`}
              onClick={() => handleClick(1, 'src/assets/home-bg-2.jpg')}
            ></span>
            <span 
              className={`${styles.bolinha} ${bolinhaAtiva === 2 ? styles.active : ''}`}
              onClick={() => handleClick(2, 'src/assets/home-bg-3.jpg')}
            ></span>
          </div>
        </section>

      </main>

    </div>
  )
};

export default Home;
