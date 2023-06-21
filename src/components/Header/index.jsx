import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>Rocket Movies</h1>
      <Profile>
        <div>
          <strong>João Victor</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/Dev-JoaoVictor.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  )
}