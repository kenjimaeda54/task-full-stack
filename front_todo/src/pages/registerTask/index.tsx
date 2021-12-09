import { useState, useEffect } from "react";
import { IDataTask } from "../../utils";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { typeIcons } from "../../utils";
import api from "../../services/api";
import { Body, Container, ListIcons, Icon, ButtonIcon } from "./styles";

export function RegisterTask(): JSX.Element {
  const [iconSelected, setIconSelected] = useState(50);
  const [dataTask, setDataTask] = useState<IDataTask[]>([]);
  const [quantityLate, setQuantityLate] = useState(0);

  async function verifyLateData() {
    const response = await api.get(`/tasks/search/late/11:11:11:11:11:11`);
    return setQuantityLate(response.data.length);
  }

  const handleIconSelected = (type: number) => setIconSelected(type);

  useEffect(() => {
    verifyLateData();
  }, [dataTask]);

  return (
    <Container>
      <Header quantity={quantityLate} />
      <Body>
        <ListIcons>
          {typeIcons.map((item, index) => {
            const id = index * Math.random() + typeIcons.length;
            return (
              <ButtonIcon key={id} onClick={() => handleIconSelected(index)}>
                <Icon
                  src={item}
                  alt="Icons,type task"
                  selected={iconSelected !== 50 && iconSelected !== index}
                />
              </ButtonIcon>
            );
          })}
        </ListIcons>
      </Body>
      <Footer />
    </Container>
  );
}
