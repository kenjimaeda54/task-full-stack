import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import {
  Container,
  Body,
  Title,
  QrCodeArea,
  SubTitle,
  BodyFooter,
  TitleFooter,
  Input,
  Button,
  ButtonText,
} from "./styles";
import Code from "react-qr-code";

export function QrCode(): JSX.Element {
  return (
    <Container>
      <Header />
      <Body>
        <Title>Capture o qrcode pelo app</Title>
        <SubTitle>
          Suas atividades serão sincronizadas com a do seu celular
        </SubTitle>
        <QrCodeArea>
          <Code value="maccaddress" size={190} />
        </QrCodeArea>
        <BodyFooter>
          <TitleFooter>Digite a numeração que aparece no celular</TitleFooter>
          <Input />
          <Button>
            <ButtonText>SINCRONIZAR</ButtonText>
          </Button>
        </BodyFooter>
      </Body>
      <Footer />
    </Container>
  );
}
