import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  position: relative;
  background: ${(props) => props.theme.colors.boxFooter};
  border: 1px solid ${(props) => props.theme.colors.lineWhite};
  padding: 0 1.6rem;

  label {
    color: ${(props) => props.theme.colors.textPrimary};
  }
  input {
    width: 100%;
    height: 7.2rem;
    border-radius: 0.8rem;
    background: ${(props) => props.theme.colors.boxFooter};

    border: 0;
    outline: 0;
    font: 1.6rem Archivo;

    &::placeholder {
      font-size: 16px;
      line-height: 24px;
      color: ${(props) => props.theme.colors.textComplement};
    }
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
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
