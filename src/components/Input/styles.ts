import styled from 'styled-components';

export const Container = styled.div`
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

  & + div {
    margin-top: 1.4rem;

    @media (min-width: 700px) {
      margin-top: 0;
    }
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: ${(props) => props.theme.colors.primaryLight};
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
    position: absolute;
  }
`;
