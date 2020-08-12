import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id?: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, id, name, ...rest }) => {
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
    <Container>
      <label htmlFor={id}>
        {label}
        <input ref={inputRef} defaultValue={defaultValue} id={id} {...rest} />
      </label>
    </Container>
  );
};

export default Input;
