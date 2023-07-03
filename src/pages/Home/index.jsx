import { Container, Content, NewMovie } from "./styles";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Input } from "../../components/Input";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>
      <main>
        <NewMovie>
          <h1>Meus filmes</h1>
          <Link to="/new">
            <AiOutlinePlus />
            Adicionar filmes
          </Link>
        </NewMovie>
        <Content>
          {movies.map((movie) => (
            <Note
              key={String(movie.id)}
              data={movie}
              onClick={() => handleDetails(movie.id)}
            />
          ))}
        </Content>
      </main>
    </Container>
  );
}
