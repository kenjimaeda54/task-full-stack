import { ButtonHTMLAttributes, useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import Bell from "../../assets/bell.png";
import {
  Container,
  SideRight,
  TextAnchor,
  Separator,
  ImageAnchor,
  WrapQuantity,
  Quantity,
  Button,
} from "./styles";
import api from "../../services/api";

type IHeaderProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Header({ ...rest }: IHeaderProps): JSX.Element {
  const [quantityLate, setQuantityLate] = useState(0);

  async function verifyLateData() {
    const response = await api.get(`/tasks/search/late/11:11:11:11:11:11`);
    return setQuantityLate(response.data.length);
  }

  useEffect(() => {
    verifyLateData();
  });

  return (
    <Container>
      <img src={Logo} width={100} height={35} alt="logo" />
      <SideRight>
        <TextAnchor to="/">Inicio</TextAnchor>
        <Separator />
        <TextAnchor to="/tasks">Nova tarefa </TextAnchor>
        <Separator />
        <TextAnchor to="/qrCode">Sincronizar com o celular</TextAnchor>
        <Separator />
        <Button {...rest}>
          <ImageAnchor>
            <img src={Bell} width={25} height={25} alt="bell" />
            <WrapQuantity>
              <Quantity>{quantityLate > 0 ? quantityLate : 0}</Quantity>
            </WrapQuantity>
          </ImageAnchor>
        </Button>
      </SideRight>
    </Container>
  );
}
