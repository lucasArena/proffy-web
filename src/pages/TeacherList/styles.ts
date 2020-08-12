import styled from 'styled-components';
import { Form as UnformForm } from '@unform/web';

export const Container = styled.div`
  width: 100vw;
  max-width: 700px;

  @media (min-width: 700px) {
    max-width: 100%;
  }
`;

export const Form = styled(UnformForm)`
  margin-top: 3.2rem;

  > div {
    position: relative;
    label {
      color: ${(props) => props.theme.colors.textPrimary};

      input {
        width: 100%;
        height: 5.6rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        background: ${(props) => props.theme.colors.inputBackground};
        border: 1px solid ${(props) => props.theme.colors.lineWhite};
        outline: 0;
        padding: 0 1.6rem;
        font: 1.6rem Archivo;
      }
    }
  }

  button {
    width: 100%;
    height: 5.6rem;
    background: ${(props) => props.theme.colors.secundary};
    color: ${(props) => props.theme.colors.buttonText};
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
    margin-top: 3.2rem;

    &:hover {
      background: ${(props) => props.theme.colors.secundaryDark};
    }
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -30px;
  }
`;

export const ListTeacher = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;
