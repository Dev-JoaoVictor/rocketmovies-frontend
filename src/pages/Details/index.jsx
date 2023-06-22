import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="voltar" />
        </Content>
      </main>
    </Container>
  );
}
