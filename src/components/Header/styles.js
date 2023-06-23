import styled from "styled-components";

export const Container = styled.header`
  height: 11.6rem;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: header;

  padding: 0 12.3rem;

  h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
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
