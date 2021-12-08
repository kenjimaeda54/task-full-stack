import React from "react";
import Default from "../../assets/default.png";
import {
  Container,
  Header,
  TextHeader,
  Footer,
  DateFooter,
  HourFooter,
} from "./styles";

export function TaskCard(): JSX.Element {
  return (
    <Container>
      <Header>
        <img src={Default} title="photo card task" />
        <TextHeader>Titutlo da foto</TextHeader>
      </Header>
      <Footer>
        <DateFooter>12/10/2021</DateFooter>
        <HourFooter>10:00</HourFooter>
      </Footer>
    </Container>
  );
}
