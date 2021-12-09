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
} from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { FilterCard } from "../../components/filterCard";
import { TaskCard } from "../../components/taskCard";
import api from "../../services/api";

export function Home(): JSX.Element {
  const [isSelect, setIsSelect] = useState("all");
  const [dataTask, setDataTask] = useState<IDataTask[]>([]);
  const [quantityLate, setQuantityLate] = useState(0);

  const handleCardFilter = (selectCard: string) => setIsSelect(selectCard);

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

  const handleNotification = () => setIsSelect("late");

  async function verifyLateData() {
    const response = await api.get(`/tasks/search/late/11:11:11:11:11:11`);
    return setQuantityLate(response.data.length);
  }

  useEffect(() => {
    fetchData();
    verifyLateData();
  }, [dataTask]);

  return (
    <Container>
      <Header onClick={handleNotification} quantity={quantityLate} />
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
            <TaskCard key={task._id} data={task} />
          ))}
        </ListTaskCard>
      </Body>
      <Footer />
    </Container>
  );
}
