import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  name: string;
  icon?: string;
  iconAction?: () => void;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  name,
  icon,
  iconAction,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { defaultValue, fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Container>
        <input ref={inputRef} defaultValue={defaultValue} id={id} {...rest} />
        {icon && (
          <button type="button" onClick={iconAction}>
            <img src={icon} alt="Icone" />
          </button>
        )}
      </Container>
    </>
  );
};

export default Input;
