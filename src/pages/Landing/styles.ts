import styled, { css } from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

interface ChooseTypeProps extends LinkProps {
  classtype: string;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.colors.textPrimary};
  background: ${(props) => props.theme.colors.primary};
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 90vw;
  max-width: 700px;

  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'logo hero hero' 'buttons buttons total';
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  h1 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  img {
    height: 10rem;
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
    text-align: left;

    h1 {
      text-align: initial;
      font-size: 3.6rem;
    }

    img {
      height: 100%;
    }
  }
`;

export const HeroImage = styled.img`
  width: 100%;

  @media (min-width: 1100px) {
    grid-area: hero;
    align-self: center;
    justify-self: end;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
  }
`;

export const ButtonTypeChoose = styled(Link) <ChooseTypeProps>`
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  font: 700 2rem Archivo;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: ${(props) => props.theme.colors.buttonText};
  transition: background-color 0.2s;

  ${(props) =>
    props.classtype === 'study' &&
    css`
      background: ${props.theme.colors.primaryLighter};

      &:hover {
        background: ${props.theme.colors.primaryLight};
      }
    `}

  ${(props) =>
    props.classtype === 'giveClasses' &&
    css`
      background: ${props.theme.colors.secundary};

      &:hover {
        background: ${props.theme.colors.secundaryDark};
      }
    `}

  img {
    width: 4rem;
  }

  &:first-child {
    margin-right: 1.6rem;
  }

  @media (min-width: 1100px) {
    img {
      margin-right: 2.4rem;
    }
  }
`;

export const TotalConnections = styled.div`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: center;
  }
`;
