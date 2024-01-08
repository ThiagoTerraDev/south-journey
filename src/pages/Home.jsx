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
  
  const imagensExcursoesPath = "src/assets/";

  const imagemExcursaoMaior = styles.imagemExcursaoMaior;
  const imagensExcursoesMenores = styles.imagensExcursoesMenores;

  const [excursoes, setExcursoes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/excursoes')
      .then(response => response.json())
      .then(data => {
        setExcursoes(data);        
      })
      .catch(error => {
        console.log('Erro ao obter dados da API:', error);
      })
  }, []);

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

        <section className={styles.excursoesSection}>
          <h2>EXCURSÕES</h2>
          <p>Escolha um destino e viva experiências incríveis!</p>
          <div className={`${styles.excursoesDetalhes} container1`}>
            {excursoes.map((excursao, index) => (
              <React.Fragment key={excursao._id}>
                <img src={imagensExcursoesPath + excursao.imagem} alt={excursao.titulo} className={index === 0 ? imagemExcursaoMaior : imagensExcursoesMenores}/>
                <p className={styles.partirDe}>a partir de</p>
                <h4 className={styles.excursaoPreco}>R$ {excursao.precoPadrao}</h4>
                <h3 className={styles.excursaoTitulo}>{excursao.titulo}</h3>
              </React.Fragment>
            ))}
          </div>
        </section>

        <section className={styles.diferenciaisSection}>
          <h2>DIFERENCIAIS</h2>
          <p>A South Journey oferece uma combinação única de aventura e conforto,<br />garantindo que cada excursão seja uma experiência inesquecível.</p>
          <div className={`${styles.diferenciaisDiv} container1`}>
            <img src="src\assets\world-plane.png" alt="Logotipo avião." />
            <ul className={styles.diferenciaisLista}>
              <li className={styles.gridColuna}>
                <h4>SATISFAÇÃO</h4>
                <p>O nosso maior foco é você se sentir satisfeito e seguro, tendo a certeza de que o investimento valeu muito à pena!</p>
              </li>
              <li className={styles.gridColuna}>
                <h4>COMPROMISSO</h4>
                <p>Somos totalmente comprometidos com nossos princípios e o nosso time é alinhado e orientado para entregar um serviço de qualidade.</p>
              </li>
              <li className={styles.gridColuna}>
                <h4>RESPONSABILIDADE</h4>
                <p>A South Journey é conhecida por oferecer programas turísticos em conformidade com todas as normas de segurança.</p>
              </li>
            </ul>
          </div>
          <Button name="Saiba mais" variant="yellow" path="sobre"/>
        </section>

        <section className={styles.depoimentosSection}>
              <h2>DEPOIMENTOS</h2>
              <div className={styles.depoimento}>
                <img src="src\assets\estrelas.png" alt="" />
                <p>Minha experiência com a South Journey em Buenos Aires
                e Punta del Este foi a melhor possível. Personalização do itinerário, atenção aos detalhes, enfim, a equipe se mostrou comprometida em oferecer um serviço excepcional. Os guias especializados nos locais visitados enriqueceram a experiência, proporcionando insights únicos. Sem dúvida, 
                a empresa superou todas as minhas expectativas.</p>
                <span>Thiago Terra, 27</span>
              </div>
        </section>

      </main>

    </div>
  )
};

export default Home;
