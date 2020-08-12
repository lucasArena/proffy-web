import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  label {
    color: ${(props) => props.theme.colors.textPrimary};

    textarea {
      width: 100%;
      height: 16rem;
      margin-top: 0.8rem;
      border-radius: 0.8rem;
      background: ${(props) => props.theme.colors.inputBackground};
      border: 1px solid ${(props) => props.theme.colors.lineWhite};
      outline: 0;
      padding: 1.2rem 1.6rem;
      resize: vertical;
      font: 1.6rem Archivo;
      min-height: 8rem;
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
    position: absolute;
    bottom: 6px;
  }
`;
