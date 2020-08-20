import React, { useCallback, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { FiCamera } from 'react-icons/fi';
import {
  Container,
  ProfileInfo,
  AvatarContainer,
  Form,
  InputGroup,
  ScheduleArea,
  DeleteScheduleArea,
} from './styles';

import warningIcon from '../../assets/images/icons/warning.svg';
import backgroundThings from '../../assets/images/background-things.svg';

import Header from '../../components/Header';

import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';
import InputMask from '../../components/InputMask';

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

const Profile: React.FC = () => {
  const formRef = useRef(null);
  const { push } = useHistory();

  const [scheduleClasses, setScheduleClasses] = useState<ScheduleProps[]>([
    { week_day: '', from: '', to: '' },
  ]);

  const addNewScheduleItem = useCallback(() => {
    setScheduleClasses((oldScheduleClasses) => [
      ...oldScheduleClasses,
      { week_day: '', from: '', to: '' },
    ]);
  }, []);

  const handleRemoveSchedule = useCallback(
    (index: number) => {
      const scheduleRemoved = scheduleClasses.filter(
        (scheduleItem, scheduleItemIndex) => scheduleItemIndex !== index,
      );

      if (!scheduleRemoved.length) {
        return;
      }

      setScheduleClasses(scheduleRemoved);
    },
    [scheduleClasses],
  );

  const handleSubmit = useCallback(
    async (data: FormProps) => {
      try {
        // await api.post('/classes', {
        //   ...data,
        // });
        push('/landing');
      } catch (e) {
        alert('ERRO');
      }
    },
    [push],
  );

  return (
    <Container>
      <Header
        pageName="Meu perfil"
        containerStyle={{
          height: '535px',
          backgroundImage: `url(${backgroundThings})`,
          backgroundSize: 'contain',
        }}
      >
        <ProfileInfo>
          <AvatarContainer htmlFor="avatar">
            <img
              src="https://avatars0.githubusercontent.com/u/33403869?s=460&u=01d807797bdea2abc57e296b5eac9a45d3785cc0&v=4"
              alt="Lucas Arena"
            />
            <div>
              <FiCamera />
            </div>
            <input type="file" id="avatar" />
          </AvatarContainer>

          <h2>Lucas Arena</h2>
          <span>Programação</span>
        </ProfileInfo>
      </Header>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <fieldset>
          <legend>Seus dados</legend>
          <InputGroup>
            <Input label="Nome" name="name" id="name" />
            <Input label="Sobrenome" name="surname" id="surname" />
          </InputGroup>
          <InputGroup>
            <Input label="Email" name="email" id="email" width="65%" />
            <InputMask
              mask="(99) 99999-9999"
              label="WhatsApp"
              name="whatsapp"
              id="whatsapp"
              width="35%"
              maskChar={null}
            />
          </InputGroup>

          <Textarea label="Biografia" name="bio" id="bio" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <InputGroup>
            <Select
              label="Matéria"
              name="subject"
              id="subject"
              width="65%"
              options={[
                { value: 'Química', label: 'Química' },
                { value: 'Matématica', label: 'Matématica' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
              ]}
            />
            <InputMask
              mask="9999999999999999999"
              placeholder="R$ 0,00"
              label="Custo da sua hora por aula"
              name="cost"
              id="cost"
              width="35%"
              formatChars={{
                '9': '[0-9,]',
              }}
              maskChar={null}
            />
          </InputGroup>
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
              <div key={index}>
                <ScheduleArea>
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
                <DeleteScheduleArea>
                  <hr />
                  <button
                    type="button"
                    onClick={() => handleRemoveSchedule(index)}
                  >
                    Excluir horário
                  </button>
                  <hr />
                </DeleteScheduleArea>
              </div>
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

export default Profile;
