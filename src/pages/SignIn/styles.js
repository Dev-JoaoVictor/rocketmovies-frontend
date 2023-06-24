import styled from 'styled-components';
import backgroundImg from '../../assets/bg.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 1.4rem;
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }

  > a{
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-top: 4.8rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;