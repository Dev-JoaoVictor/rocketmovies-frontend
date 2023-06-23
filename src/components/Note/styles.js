import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
  padding: 3.2rem;
  border: none;
  border-radius: 1.6rem;
  margin: 2.4rem 0;
  text-align: left;


  > h2{
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 2.4rem;
    margin-bottom: 8px;
  }

  > footer{
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
  }

  > div {
    margin: 1.5rem 0;
    overflow: hidden;
    max-height: 4rem;
    p {
      color: ${({theme}) => theme.COLORS.GRAY_300};
      font-size: 1.6rem;
    }
  }

`;