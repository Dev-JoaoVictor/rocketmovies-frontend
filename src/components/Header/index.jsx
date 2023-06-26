import { Link } from "react-router-dom";
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
        <Link to="/profile">
          <img className="img-profile"
            src="https://github.com/Dev-JoaoVictor.png"
            alt="Foto do usuário"
          />
        </Link>
      </Profile>
    </Container>
  );
}
