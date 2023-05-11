import React from 'react';
import Icon1 from '../images/5.png';
import Icon2 from '../images/3.gif';
import Icon3 from '../images/6.png';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Acesse os serviços</ServicesH1>
      <ServicesWrapper>

        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Receba na menor taxa</ServicesH2>
          <ServicesP>Você será guiado a receber na taxa mais barata, dentre os gateways existentes que o Papamoney possui integração</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Blockchain e a descentralização</ServicesH2>
          <ServicesP>Nos pagamentos via web3, o cliente pagará na moeda que decidir, e você receberá na sua carteira na moeda que preferir</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>PapaCoin</ServicesH2>
          <ServicesP>Receba o airdrop de #papa quando receber pagamentos em cripto. Em breve a moeda será alvo para troca e cashback entre os clientes, aproveite o quanto antes!</ServicesP>
        </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
