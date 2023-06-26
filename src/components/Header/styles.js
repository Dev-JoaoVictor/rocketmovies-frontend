import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  height: 11.6rem;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;
  grid-area: header;

  padding: 0 12.3rem;

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.COLORS.WHITE};

  .img-profile {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    margin-left: 9px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;

    button {
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    strong {
      font-size: 1.4rem;
    }
  }
`
export const Search = styled.input`
  width: 65%;
  height: 5.6rem;
  border-radius: 1rem;

  padding: 1.9rem 2.4rem;
  color:  ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;