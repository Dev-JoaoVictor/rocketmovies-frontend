import { Container, Content, InfoMovie } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";

export function Details({rating=4}) {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="voltar" />
          <InfoMovie>
            <h2>Interestellar</h2>
            <Rating grade={rating} isBigSize={false} />
          </InfoMovie>
        </Content>
      </main>
    </Container>
  );
}
