import React, { useCallback, useState } from 'react';

import { Container, Form, ListTeacher } from './styles';

import Header from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

interface TeacherProps {
  id: string;
  user: {
    id: string;
    name: string;
    bio: string;
    avatar: string;
    whatsapp: string;
  };
  cost: number;
  subject: string;
}

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState<TeacherProps[]>([]);

  const handleFilter = useCallback(async (dataFilters) => {
    const responseTeachers = await api.get('/classes', {
      params: {
        ...dataFilters,
      },
    });

    setTeachers(responseTeachers.data);
  }, []);

  return (
    <Container>
      <Header title="Estes são os proffys disponíveis" description="">
        <Form onSubmit={handleFilter}>
          <Select
            label="Matéria"
            id="subject"
            name="subject"
            options={[
              { value: 'Química', label: 'Química' },
              { value: 'Matématica', label: 'Matématica' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
            ]}
          />
          <Select
            label="Dia da semana"
            id="week_day"
            name="week_day"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sabádo' },
            ]}
          />
          <Input label="Hora" name="time" type="time" id="time" />
          <button type="submit">Buscar</button>
        </Form>
      </Header>
      <ListTeacher>
        {teachers.map((teacher) => (
          <TeacherItem
            key={teacher.id}
            user_id={teacher.user.id}
            avatar={teacher.user.avatar}
            name={teacher.user.name}
            subject={teacher.subject}
            description={teacher.user.bio}
            hourPrice={teacher.cost}
            whatsapp={teacher.user.whatsapp}
          />
        ))}
      </ListTeacher>
    </Container>
  );
};

export default TeacherList;
