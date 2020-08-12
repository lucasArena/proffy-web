import React, { useState, useEffect } from 'react';

import {
  Container,
  Content,
  LogoContainer,
  HeroImage,
  ButtonsContainer,
  ButtonTypeChoose,
  TotalConnections,
} from './styles';

import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

interface IConnectionsResponse {
  total: number;
}

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    async function getTotalConnections() {
      const connectionsResponse = await api.get<IConnectionsResponse>(
        '/connections',
      );

      const { total } = connectionsResponse.data;

      setTotalConnections(total);
    }
    getTotalConnections();
  }, []);

  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={logo} alt="Logo Proffy" />
          <h1>Sua plataforma de estudo online</h1>
        </LogoContainer>

        <HeroImage
          src={landing}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <ButtonsContainer>
          <ButtonTypeChoose to="/teacher/list" classtype="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </ButtonTypeChoose>
          <ButtonTypeChoose to="/teacher/form" classtype="giveClasses">
            <img src={giveClassesIcon} alt="Dar aula" />
            Dar Aula
          </ButtonTypeChoose>
        </ButtonsContainer>
        <TotalConnections>
          {`Total de ${totalConnections} conexões realizadas`}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </TotalConnections>
      </Content>
    </Container>
  );
};

export default Landing;
