import { Container, Form, ButtonDelete } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button"
import { Header } from "../../components/Header";
import { NoteItem } from "../../components/NoteItem";
import { TextArea } from "../../components/TextArea";
import { ButtonText } from "../../components/ButtonText";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <ButtonText to="/" title="voltar" icon={FiArrowLeft} />
          <h1>Novo filme</h1>
          <div>
            <Input placeholder="Título" type="text" />
            <Input placeholder="Sua nota (de 0 a 5)" type="text" />
          </div>
          <TextArea placeholder="Observações" type="text"/>
          <p>Marcadores</p>
          <div className="tags">
            <NoteItem value="React"/>
            <NoteItem isNew placeholder="Novo marcador"/>
          </div>
          <div>
            <ButtonDelete type="button">
              Excluir filme
            </ButtonDelete>
            <Button type="button" title="Salvar alterações"/>
          </div>
        </Form>
      </main>
    </Container>
  );
}
