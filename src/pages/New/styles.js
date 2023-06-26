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

  .tags {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    border-radius: 1rem;
    padding: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;
  }

  > main {
    grid-area: content;
    padding: 0 12.3rem;
    margin: 4rem 0;
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > div {
    display: flex;
    align-items: center;
    gap: 4rem;
    justify-content: space-between;
  }

  > p {
    font-size: 2rem;
  }
`;

export const ButtonDelete = styled.button`
  width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.PINK};
    height: 5.6rem;
    border: 0;
    padding: 0 1.6rem;
    margin-top: 1.6rem;
    border-radius: 1rem;
    font-weight: 500;
`;