import { Container, Content, RatingMovie, CreateInformation } from "./styles";
import { LuClock } from "react-icons/lu";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";

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
              <LuClock/>
              <p>23/05/22 às 08:00</p>
            </div>
          </CreateInformation>
        </Content>
      </main>
    </Container>
  );
}
