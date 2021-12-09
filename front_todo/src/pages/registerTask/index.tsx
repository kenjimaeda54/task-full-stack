import { useState, useEffect } from "react";
import { IDataTask } from "../../utils";
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

export function RegisterTask(): JSX.Element {
  const [iconSelected, setIconSelected] = useState(50);
  const [dataTask, setDataTask] = useState<IDataTask[]>([]);
  const [quantityLate, setQuantityLate] = useState(0);

  async function verifyLateData() {
    const response = await api.get(`/tasks/search/late/11:11:11:11:11:11`);
    return setQuantityLate(response.data.length);
  }

  const handleIconSelected = (type: number) => setIconSelected(type);

  useEffect(() => {
    verifyLateData();
  }, [dataTask]);

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
        <InputText placeholder="Titulo da tarefa" />
        <LabelText>Descrição</LabelText>
        <TextArea placeholder="Descricao da tarefa" />
        <LabelText>Data</LabelText>
        <ImgDateTime>
          <img src={Calendar} alt="Icon Calendar" width={25} height={25} />
        </ImgDateTime>
        <InputText type="date" />
        <LabelText>Hora</LabelText>
        <ImgDateTime>
          <img src={Clock} alt="Icon time" width={25} height={25} />
        </ImgDateTime>
        <InputText type="time" />
        <Section>
          <FooterRight>
            <ButtonCheck type="checkbox" />
            <TitleFooterRight>Concluido</TitleFooterRight>
          </FooterRight>
          <ButtonDestroy>Excluir</ButtonDestroy>
        </Section>
        <ButtonSave>Salvar</ButtonSave>
      </Body>
      <Footer />
    </Container>
  );
}
