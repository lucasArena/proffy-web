import React, { useCallback, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  HeaderContent,
  Form,
  InputGroup,
  UserInfo,
  ScheduleArea,
  DeleteScheduleArea,
} from './styles';

import warningIcon from '../../assets/images/icons/warning.svg';
import rocketIcon from '../../assets/images/icons/rocket.svg';

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
      console.log(data);
      try {
        // await api.post('/classes', {
        //   ...data,
        // });
        history.push('/success', {
          title: 'Cadastro salvo!',
          description:
            'Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp.',
          redirectTo: '/landing',
          buttonText: 'Acessar',
        });
      } catch (e) {
        // alert('ERRO');
      }
    },
    [history],
  );

  return (
    <Container>
      <Header
        pageName="Dar aulas"
        containerStyle={{
          height: '360px',
        }}
      >
        <HeaderContent>
          <strong>Que incrível que você quer dar aula</strong>
          <p>O primeiro passo é preencher esse formulário de inscrição</p>
          <aside>
            <img src={rocketIcon} alt="Imagem auxiliar" />
            <span>
              <span>Preparare-se!</span>
              <br />
              <span>vai ser o máximo.</span>
            </span>
          </aside>
        </HeaderContent>
      </Header>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <fieldset>
          <legend>Seus dados</legend>

          <InputGroup>
            <UserInfo>
              <img
                src="https://avatars0.githubusercontent.com/u/33403869?s=460&u=01d807797bdea2abc57e296b5eac9a45d3785cc0&v=4"
                alt="Lucas Arena"
              />
              <span>Lucas Arena</span>
            </UserInfo>
            <InputMask
              maskChar=""
              mask="(99) 99999-9999"
              width="35%"
              label="WhatsApp"
              name="whatsapp"
              id="whatsapp"
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
              options={[
                { value: 'Química', label: 'Química' },
                { value: 'Matématica', label: 'Matématica' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
              ]}
            />
            <Input
              label="Custo da sua hora por aula"
              name="cost"
              id="cost"
              width="50%"
              placeholder="R$ 0,00"
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

export default TeacherForm;
