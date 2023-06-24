import { Container, Form } from "./styles";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";

import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText title="voltar" icon={FiArrowLeft} />
      </header>
      <Form>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
