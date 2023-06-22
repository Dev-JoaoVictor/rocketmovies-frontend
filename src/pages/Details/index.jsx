import { Container, Content, RatingMovie, CreateInformation, ContainerTags } from "./styles";
import { LuClock } from "react-icons/lu";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";

export function Details({ rating = 4 }) {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="voltar" />
          <RatingMovie>
            <h2>Interestellar</h2>
            <Rating grade={rating} isBigSize={false} />
          </RatingMovie>
          <CreateInformation>
            <p>Por João Victor</p>
            <div>
              <LuClock />
              <p>23/05/22 às 08:00</p>
            </div>
          </CreateInformation>
          <ContainerTags>
            <Tag title="Ficção cientifica"/>
            <Tag title="Drama"/>
            <Tag title="Familia"/>
          </ContainerTags>
        </Content>
      </main>
    </Container>
  );
}
