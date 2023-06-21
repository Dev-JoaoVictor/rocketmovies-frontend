import { Input } from "../Input";
import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>Rocket Movies</h1>
      <Input title="Pesquisar pelo título"/>
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