import { useMemo } from "react";
import { format } from "date-fns";
import { IDataTask, typeIcons } from "../../utils";
import {
  Container,
  Header,
  TextHeader,
  Footer,
  DateFooter,
  HourFooter,
} from "./styles";

interface ITaskCardProps {
  data: IDataTask;
}

export function TaskCard({ data }: ITaskCardProps): JSX.Element {
  const date = useMemo(() => {
    const dateFormat = new Date(data.when);
    return format(dateFormat, "dd/MM/yyyy");
  }, []);

  const hours = useMemo(() => {
    const dateFormat = new Date(data.when);
    return format(dateFormat, "HH:mm");
  }, []);

  return (
    <Container done={data.done}>
      <Header>
        <img src={typeIcons[data.type]} title="photo card task" />
        <TextHeader>{data.title}</TextHeader>
      </Header>
      <Footer>
        <DateFooter>{date}</DateFooter>
        <HourFooter>{hours}</HourFooter>
      </Footer>
    </Container>
  );
}
