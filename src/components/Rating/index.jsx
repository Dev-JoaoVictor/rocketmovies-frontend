import { Container } from "./styles";

import { FaStar, FaRegStar } from "react-icons/fa";

export function Rating({ grade, isBigSize }) {
  let stars = [];

  for (let cont = 1; cont <= 5; cont++) {
    if (cont <= grade) {
      stars.push(<FaStar key={cont} />);
    } else {
      stars.push(<FaRegStar key={cont} />);
    }
  }

  return <Container isBigSize={isBigSize}>{stars}</Container>;
}
