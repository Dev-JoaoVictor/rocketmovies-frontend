import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { LuClock, LuArrowLeft } from "react-icons/lu";
import { Container, Content, RatingMovie, CreateInformation } from "./styles";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
  }, []);

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota ?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1)
    }
  }

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonText to="/" title="voltar" icon={LuArrowLeft} />
            <RatingMovie>
              <h2>{data.title}</h2>
              <Rating grade={data.rating} isbigsize={false} />
            </RatingMovie>
            <CreateInformation>
              <p>Por {user.name}</p>
              <LuClock />
              <p>{data.created_at}</p>
            </CreateInformation>
            {data.tags && (
              <div className="ContainerTags">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </div>
            )}

            <p>{data.description}</p>
          </Content>
          <Button
            title="Excluir filme"
            className="movie-delete"
            onClick={handleRemove}
          />
        </main>
      )}
    </Container>
  );
}
