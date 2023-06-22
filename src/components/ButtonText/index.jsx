import { Container } from "./styles";
import { BiArrowBack } from "react-icons/bi";

export function ButtonText({ title, ...rest }) {
  return (
    <Container {...rest}>
      <BiArrowBack size={16} />
      {...title}
    </Container>
  );
}
