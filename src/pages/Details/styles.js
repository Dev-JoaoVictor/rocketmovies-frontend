import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
    "header"
    "content"
  ;

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 4rem 12.3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
