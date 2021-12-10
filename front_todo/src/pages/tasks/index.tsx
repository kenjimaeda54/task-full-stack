import { useState, useEffect } from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { typeIcons } from "../../utils";
import Calendar from "../../assets/calendar.png";
import Clock from "../../assets/clock.png";
import api from "../../services/api";
import {
  Body,
  Container,
  ListIcons,
  Icon,
  ButtonIcon,
  LabelText,
  InputText,
  TextArea,
  Section,
  FooterRight,
  ButtonCheck,
  TitleFooterRight,
  ButtonDestroy,
  ImgDateTime,
  ButtonSave,
} from "./styles";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

export function RegisterTask(): JSX.Element {
  //recebo id dinamico da rota
  const { id } = useParams();
  const [iconSelected, setIconSelected] = useState(50);
  const [quantityLate, setQuantityLate] = useState(0);
  const [title, setTitle] = useState("");
  const [macaddress, setMacadress] = useState("11:11:11:11:11:11");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [done, setDone] = useState(false);

  async function verifyLateData() {
    const response = await api.get(`/tasks/search/late/11:11:11:11:11:11`);
    return setQuantityLate(response.data.length);
  }

  async function loadTasks() {
    try {
      const response = await api.get(`/tasks/${id}`);
      setTitle(response.data.title);
      setMacadress(response.data.macaddress);
      setDescription(response.data.description);
      //CAMPO DATA e igual ao html input tipo date
      setDate(format(new Date(response.data.when), "yyyy-MM-dd"));
      setTime(format(new Date(response.data.when), "HH:mm"));
      setIconSelected(response.data.type);
      setDone(response.data.done);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSaveData() {
    if (id) {
      await api.put(`/tasks/${id}`, {
        title,
        description,
        when: `${date}T${time}:00.000`,
        done,
        type: iconSelected,
        macaddress,
      });
      return (window.location.href = "/");
    }
    await api.post("/tasks", {
      title,
      description,
      when: `${date}T${time}:00.000`,
      done,
      type: iconSelected,
      macaddress,
    });
    return (window.location.href = "/");
  }

  const handleIconSelected = (type: number) => setIconSelected(type);

  useEffect(() => {
    verifyLateData();
    if (id) {
      loadTasks();
    }
  }, []);

  return (
    <Container>
      <Header quantity={quantityLate} />
      <Body>
        <ListIcons>
          {typeIcons.map((item, index) => {
            const id = index * Math.random() + typeIcons.length;
            return (
              <ButtonIcon key={id} onClick={() => handleIconSelected(index)}>
                <Icon
                  src={item}
                  alt="Icons,type task"
                  selected={iconSelected !== 50 && iconSelected !== index}
                />
              </ButtonIcon>
            );
          })}
        </ListIcons>
        <LabelText>Titulo</LabelText>
        <InputText
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titulo da tarefa"
        />
        <LabelText>Descrição</LabelText>
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descricao da tarefa"
        />
        <LabelText>Data</LabelText>
        <ImgDateTime>
          <img src={Calendar} alt="Icon Calendar" width={25} height={25} />
        </ImgDateTime>
        <InputText
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <LabelText>Hora</LabelText>
        <ImgDateTime>
          <img src={Clock} alt="Icon time" width={25} height={25} />
        </ImgDateTime>
        <InputText
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <Section>
          <FooterRight>
            <ButtonCheck
              checked={done}
              onChange={() => setDone((old) => !old)}
              type="checkbox"
            />
            <TitleFooterRight>Concluido</TitleFooterRight>
          </FooterRight>
          <ButtonDestroy>Excluir</ButtonDestroy>
        </Section>
        <ButtonSave
          onClick={handleSaveData}
          disabled={
            !title || !description || !date || !time || iconSelected === 50
          }
          filedOk={
            !title || !description || !date || !time || iconSelected === 50
          }
        >
          Salvar
        </ButtonSave>
      </Body>
      <Footer />
    </Container>
  );
}
