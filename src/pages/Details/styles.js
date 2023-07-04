import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  gap: 4rem;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
    "header"
    "content"
  ;

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 0 12.3rem 5rem;
  }

  .movie-delete {
    width: 15rem;
    margin-top: 8rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  .ContainerTags {
    display: flex;
    gap: 0.8rem;
    margin: 4rem 0;
  }
`;

export const RatingMovie = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 2.4rem 0;
  
  h2 {
    font-size: 3.6rem;
    margin-right: 1.9rem;
  }
`;

export const CreateInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 1.6rem;
    }
`;

