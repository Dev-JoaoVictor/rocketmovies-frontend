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
`;

export const Content = styled.div`
  grid-area: content;
  margin: 0 auto;
`;

export const NewMovie = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;

  > button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 1.3rem 3.2rem;
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.PINK};
  }
`;