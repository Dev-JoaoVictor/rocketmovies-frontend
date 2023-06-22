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
    padding: 0 12.3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
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
