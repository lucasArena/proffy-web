import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  PageHeader,
  TopbarContainer,
  HeaderContent,
} from './styles';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

interface HeaderProps {
  title: string;
  description?: string;
  contentStyle?: object;
}

const Header: React.FC<HeaderProps> = ({
  title,
  description,
  contentStyle,
  children,
}) => {
  return (
    <Container>
      <PageHeader>
        <TopbarContainer>
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <img src={logoImg} alt="Proffy" />
        </TopbarContainer>

        <HeaderContent style={contentStyle}>
          <strong>{title}</strong>
          {description && <p>{description}</p>}
          {children}
        </HeaderContent>
      </PageHeader>
    </Container>
  );
};

export default Header;
