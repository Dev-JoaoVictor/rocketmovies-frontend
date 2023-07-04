import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

import { useState } from "react";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { NoteItem } from "../../components/NoteItem";
import { TextArea } from "../../components/TextArea";
import { ButtonText } from "../../components/ButtonText";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddtags() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title || !description || !rating) {
      alert("Preencha todos os campos");
    }

    if (newTag) {
      return alert("Você esqueceu de adicionar a tag");
    }

    await api.post("/notes", {
      title,
      description,
      rating,
      tags,
    });

    alert("Nota criada com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <ButtonText to="/" title="voltar" icon={FiArrowLeft} />
          <h1>Novo filme</h1>
          <div>
            <Input
              placeholder="Título"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="text"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <TextArea
            placeholder="Observações"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
          <p>Marcadores</p>
          <div className="tags">
            {tags.map((tag, index) => (
              <NoteItem
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
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
            <Button
              type="button"
              title="Salvar alterações"
              onClick={handleNewNote}
            />
          </div>
        </Form>
      </main>
    </Container>
  );
}
