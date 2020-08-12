import React, { useCallback, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Form, ScheduleArea } from './styles';

import warningIcon from '../../assets/images/icons/warning.svg';

import Header from '../../components/Header';

import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

interface ScheduleProps {
  week_day: string;
  from: string;
  to: string;
}

interface FormProps {
  name: string;
  bio: string;
  whatsapp: string;
  avatar: string;
  cost: number;
  subject: string;
  schedule: ScheduleProps[];
}

const TeacherForm: React.FC = () => {
  const formRef = useRef(null);
  const history = useHistory();

  const [scheduleClasses, setScheduleClasses] = useState<ScheduleProps[]>([
    { week_day: '', from: '', to: '' },
  ]);

  const addNewScheduleItem = useCallback(() => {
    setScheduleClasses((oldScheduleClasses) => [
      ...oldScheduleClasses,
      { week_day: '', from: '', to: '' },
    ]);
  }, []);

  const handleSubmit = useCallback(
    async (data: FormProps) => {
      try {
        await api.post('/classes', {
          ...data,
        });
        history.push('/');
      } catch (e) {
        alert('ERRO');
      }
    },
    [history],
  );

  return (
    <Container>
      <Header
        title="Que incrível que você quer dar aula"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <Form onSubmit={handleSubmit} ref={formRef}>
        <fieldset>
          <legend>Seus dados</legend>

          <Input label="Nome" name="name" id="name" />
          <Input label="Avatar" name="avatar" id="avatar" />
          <Input label="WhatsApp" name="whatsapp" id="whatsapp" />
          <Textarea label="Biografia" name="bio" id="bio" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            label="Matéria"
            name="subject"
            id="subject"
            options={[
              { value: 'Química', label: 'Química' },
              { value: 'Matématica', label: 'Matématica' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
            ]}
          />
          <Input label="Custo da sua hora por aula" name="cost" id="cost" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleClasses.map((scheduleClass, index) => {
            return (
              <ScheduleArea key={scheduleClass.week_day}>
                <Select
                  label="Dia da semana"
                  name={`schedule[${index}][week_day]`}
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
                <Input
                  name={`schedule[${index}][from]`}
                  label="Das"
                  type="time"
                />
                <Input
                  name={`schedule[${index}][to]`}
                  label="Até"
                  type="time"
                />
              </ScheduleArea>
            );
          })}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante
            <br />
            Preencha todos os dados
          </p>
          <button type="submit">Salvar cadastro</button>
        </footer>
      </Form>
    </Container>
  );
};

export default TeacherForm;
