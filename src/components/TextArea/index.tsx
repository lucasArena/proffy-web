import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, id, name, ...rest }) => {
  const textareaRef = useRef(null);
  const { defaultValue, fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={id}>
        {label}
        <textarea
          ref={textareaRef}
          defaultValue={defaultValue}
          id={id}
          {...rest}
        />
      </label>
    </Container>
  );
};

export default Textarea;
