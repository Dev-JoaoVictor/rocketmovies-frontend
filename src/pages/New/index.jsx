import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { TextArea } from "../../components/TextArea";
import { ButtonText } from "../../components/ButtonText";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <ButtonText title="voltar" icon={FiArrowLeft} />
          <h1>Novo filme</h1>
          <div>
            <Input placeholder="Título" type="text" />
            <Input placeholder="Sua nota (de 0 a 5)" type="text" />
          </div>
          <TextArea placeholder="Observações" type="text"/>
        </Form>
      </main>
    </Container>
  );
}
