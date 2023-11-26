import React from "react";
import Head from "../components/Head";
import styles from "./TermosECondicoes.module.css"


const TermosECondicoes = () => {
  return (
    <div>
      <Head title="Termos e Condições" description="Nossos termos e condições."/>

      <main>
        <h1>TERMOS E CONDIÇÕES</h1>
        <div className={`${styles.termos} container1`}>
          <div className={styles.primeiroTermo}>
            <h3>1. Política de Cancelamento e Reembolso</h3>
            <p>1.1 A South Journey entende que imprevistos podem ocorrer, e por isso estabelece uma política clara de cancelamento e reembolso. Esta política inclui prazos para cancelamento, possíveis taxas associadas e processos para solicitar reembolsos. É importante que os clientes estejam cientes e compreendam as condições relacionadas ao cancelamento de serviços e reembolsos.</p>
            <p>1.2 Em caso de cancelamento, a South Journey reserva-se o direito de fazer cumprir os termos e condições estipulados no EULA e no contrato. Quaisquer taxas ou penalidades de cancelamento serão descritas no contrato e deverão ser cumpridas pelas partes contratantes.</p>
            <p>1.3 A South Journey não será responsabilizada por quaisquer questões decorrentes do Contrato de Licença de Usuário Final (EULA), e quaisquer disputas ou reclamações relacionadas ao EULA serão resolvidas de acordo com os termos e condições especificados no contrato.</p>
          </div>
          <div className={styles.segundoTermo}>
            <h3>2. Responsabilidades do Cliente</h3>
            <p>2.1 Como cliente da South Journey, você concorda em fornecer informações precisas e atualizadas para garantir a reserva e a prestação de serviços adequados. Além disso, você concorda em respeitar as regras e regulamentos dos destinos visitados, bem como as orientações fornecidas pelos guias da South Journey durante a viagem.</p>
            <p>2.2 A South Journey se esforça para oferecer serviços de alta qualidade, mas é importante reconhecer que existem certos riscos associados a atividades de viagem e aventura. Nossos clientes concordam em liberar a South Journey de qualquer responsabilidade por danos pessoais, perda de propriedade ou despesas adicionais incorridas durante a viagem, exceto nos casos de negligência comprovada por parte da nossa empresa.</p>
            <p>2.3 South Journey garantirá que todos os serviços e produtos fornecidos sob o contrato atendam aos padrões e especificações necessários descritos no Contrato de Licença de Usuário Final (EULA) e no contrato.</p>
            <p>2.4 Quaisquer disputas decorrentes dos serviços prestados sob o contrato e do Contrato de Licença de Usuário Final (EULA) associado serão resolvidas de acordo com o mecanismo de resolução de disputas detalhado no contrato e no EULA.</p>
          </div>
        </div>
      </main> 
        
    </div>
  )
};

export default TermosECondicoes;
