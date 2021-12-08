import React from "react";

import { Container, ViewText, Text, Filter } from "./styles";

export function FilterCard(): JSX.Element {
  return (
    <Container>
      <Filter />
      <ViewText>
        <Text>ToDo-Organizando sua vida</Text>
      </ViewText>
    </Container>
  );
}
