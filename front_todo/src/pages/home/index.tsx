import React, { useState } from "react";
import {
  ListFilterCard,
  Body,
  Container,
  WrapTitle,
  TitleSection,
  ListTaskCard,
  WrapSectionTitle,
} from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { FilterCard } from "../../components/filterCard";
import { TaskCard } from "../../components/taskCard";

export function Home(): JSX.Element {
  const [isSelect, setIsSelect] = useState("");

  const handleCardFilter = (selectCard: string) => setIsSelect(selectCard);

  return (
    <Container>
      <Header />
      <Body>
        <ListFilterCard>
          <FilterCard
            onClick={() => handleCardFilter("todos")}
            active={isSelect === "todos"}
            title="todos"
          />
          <FilterCard
            onClick={() => handleCardFilter("hoje")}
            active={isSelect === "hoje"}
            title="hoje"
          />
          <FilterCard
            onClick={() => handleCardFilter("semana")}
            active={isSelect === "semana"}
            title="semana"
          />
          <FilterCard
            onClick={() => handleCardFilter("mes")}
            active={isSelect === "mes"}
            title="mes"
          />
          <FilterCard
            onClick={() => handleCardFilter("ano")}
            active={isSelect === "ano"}
            title="ano"
          />
        </ListFilterCard>
        <WrapTitle>
          <WrapSectionTitle />
          <TitleSection>Tarefas</TitleSection>
          <WrapSectionTitle />
        </WrapTitle>
        <ListTaskCard>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </ListTaskCard>
      </Body>
      <Footer />
    </Container>
  );
}
