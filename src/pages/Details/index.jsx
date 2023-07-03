import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Container, Content, RatingMovie, CreateInformation } from "./styles";
import { LuClock, LuArrowLeft } from "react-icons/lu";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";

export function Details() {
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
        </main>
      )}
    </Container>
  );
}
