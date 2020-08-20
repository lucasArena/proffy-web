import React, { SelectHTMLAttributes, useRef, useEffect } from 'react';

import { useField } from '@unform/core';
import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id?: string;
  name: string;
  width?: string;
  options: Array<{ value: string; label: string }>;
}

const Select: React.FC<SelectProps> = ({
  label,
  id,
  name,
  width,
  options,
  ...rest
}) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container width={width}>
      <label htmlFor={id}>{label}</label>

      <select defaultValue={defaultValue} ref={selectRef} id={id} {...rest}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Select;
