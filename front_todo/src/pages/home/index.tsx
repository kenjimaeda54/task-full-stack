import { useState, useEffect } from "react";
import { IDataTask } from "../../utils";
import {
  ListFilterCard,
  Body,
  Container,
  WrapTitle,
  TitleSection,
  ListTaskCard,
  WrapSectionTitle,
  Anchor,
} from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { FilterCard } from "../../components/filterCard";
import { TaskCard } from "../../components/taskCard";
import api from "../../services/api";

export function Home(): JSX.Element {
  const [isSelect, setIsSelect] = useState("all");
  const [dataTask, setDataTask] = useState<IDataTask[]>([]);
  const [mounted, setMounted] = useState(false);

  function handleCardFilter(selectCard: string) {
    setIsSelect(selectCard);
    setMounted(false);
  }

  async function fetchData() {
    try {
      if (isSelect === "all") {
        const response = await api.get(`/tasks/search/11:11:11:11:11:11`);
        return setDataTask(response.data);
      }
      const response = await api.get(
        `/tasks/search/${isSelect}/11:11:11:11:11:11`
      );
      return setDataTask(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleNotification() {
    setIsSelect("late");
    setMounted(false);
  }

  useEffect(() => {
    if (!mounted) {
      fetchData();
    }
    return () => setMounted(true);
  }, [dataTask, mounted]);

  return (
    <Container>
      <Header onClick={handleNotification} />
      <Body>
        <ListFilterCard>
          <FilterCard
            onClick={() => handleCardFilter("all")}
            active={isSelect === "all"}
            title="todos"
          />
          <FilterCard
            onClick={() => handleCardFilter("today")}
            active={isSelect === "today"}
            title="hoje"
          />
          <FilterCard
            onClick={() => handleCardFilter("week")}
            active={isSelect === "week"}
            title="semana"
          />
          <FilterCard
            onClick={() => handleCardFilter("month")}
            active={isSelect === "month"}
            title="mes"
          />
          <FilterCard
            onClick={() => handleCardFilter("year")}
            active={isSelect === "year"}
            title="ano"
          />
        </ListFilterCard>
        <WrapTitle>
          <WrapSectionTitle />
          <TitleSection>
            {isSelect === "late" ? "Tarefas atrasadas" : "tarefas"}
          </TitleSection>
          <WrapSectionTitle />
        </WrapTitle>
        <ListTaskCard>
          {dataTask.map((task) => (
            <Anchor key={task._id} to={`/tasks/${task._id}`}>
              <TaskCard data={task} />
            </Anchor>
          ))}
        </ListTaskCard>
      </Body>
      <Footer />
    </Container>
  );
}
