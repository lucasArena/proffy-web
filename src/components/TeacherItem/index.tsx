import React, { useCallback } from 'react';

import { Container } from './styles';

import whatsappImg from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

interface TeacherItemProps {
  user_id: string;
  avatar: string;
  name: string;
  subject: string;
  description: string;
  whatsapp: string;
  hourPrice: number;
}
const TeacherItem: React.FC<TeacherItemProps> = ({
  user_id,
  avatar,
  name,
  subject,
  description,
  whatsapp,
  hourPrice,
}) => {
  const handleCreateConnection = useCallback(async () => {
    await api.post('/connections', {
      user_id,
    });
  }, [user_id]);

  return (
    <Container>
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{description}</p>
      <footer>
        <p>
          Preço por hora
          <strong>
            R$
            {hourPrice}
          </strong>
        </p>
        <a
          href={`https://wa.me/${whatsapp}`}
          target="blank"
          onClick={handleCreateConnection}
        >
          <img src={whatsappImg} alt="Botão de Whatsapp" />
          Entre em contato
        </a>
      </footer>
    </Container>
  );
};

export default TeacherItem;
