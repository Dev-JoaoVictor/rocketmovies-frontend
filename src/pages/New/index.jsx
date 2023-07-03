import { Container, Form, ButtonDelete } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

import { useState } from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { NoteItem } from "../../components/NoteItem";
import { TextArea } from "../../components/TextArea";
import { ButtonText } from "../../components/ButtonText";

export function New() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddtags() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

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
          <TextArea placeholder="Observações" type="text" />
          <p>Marcadores</p>
          <div className="tags">
            {tags.map((tag, index) => (
              <NoteItem key={String(index)} value={tag} onClick={() => {}} />
            ))}

            <NoteItem
              isNew
              placeholder="Novo marcador"
              onChange={(e) => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddtags}
            />
          </div>
          <div>
            <ButtonDelete type="button">Excluir filme</ButtonDelete>
            <Button type="button" title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
