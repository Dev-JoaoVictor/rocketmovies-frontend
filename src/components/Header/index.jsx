import { BiSearchAlt } from "react-icons/bi";

import { Input } from "../Input";
import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>Rocket Movies</h1>
      <Input placeholder="Pesquisar pelo título" icon={BiSearchAlt} />
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
