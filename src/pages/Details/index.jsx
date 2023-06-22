import { Container, Content, InfoMovie } from "./styles";


import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="voltar" />
          <InfoMovie>
            <h2>Interestellar</h2>
            <Rating/>
          </InfoMovie>
        </Content>
      </main>
    </Container>
  );
}
