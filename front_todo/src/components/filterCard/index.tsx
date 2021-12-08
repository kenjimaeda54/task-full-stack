import React from "react";
import { Container, ViewText, Text, Filter, Button } from "./styles";

interface IFilterCardProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  title: string;
  active: boolean;
}

export function FilterCard({
  title,
  active,
  ...rest
}: IFilterCardProps): JSX.Element {
  return (
    <Button {...rest}>
      <Container isActive={active}>
        <Filter />
        <ViewText>
          <Text>{title}</Text>
        </ViewText>
      </Container>
    </Button>
  );
}
