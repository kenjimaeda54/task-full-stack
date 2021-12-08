import React from "react";
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

export function Header(): JSX.Element {
  return (
    <Container>
      <img src={Logo} width={100} height={35} alt="logo" />
      <SideRight>
        <TextAnchor>Inicio</TextAnchor>
        <Separator />
        <TextAnchor>Nova tarefa </TextAnchor>
        <Separator />
        <TextAnchor>Sincronizar com o celular</TextAnchor>
        <Separator />
        <Button>
          <ImageAnchor>
            <img src={Bell} width={25} height={25} alt="bell" />
            <WrapQuantity>
              <Quantity>3</Quantity>
            </WrapQuantity>
          </ImageAnchor>
        </Button>
      </SideRight>
    </Container>
  );
}
