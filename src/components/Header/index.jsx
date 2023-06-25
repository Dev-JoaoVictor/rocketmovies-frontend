import { Container, Profile, Search } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>Rocket Movies</h1>
      <Search placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <strong>João Victor</strong>
          <button>sair</button>
        </div>
        <img
          src="https://github.com/Dev-JoaoVictor.png"
          alt="Foto do usuário"
        />
      </Profile>
    </Container>
  );
}
