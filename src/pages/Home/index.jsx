import { Container, Content, NewMovie } from "./styles";
import {AiOutlinePlus} from 'react-icons/ai'

import { Header } from "../../components/Header";


export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <NewMovie>
            <h1>Meus filmes</h1>
            <button>
              <AiOutlinePlus/>
              Adicionar filmes
            </button>
          </NewMovie>
        </Content>
      </main>
    </Container>
  );
}
