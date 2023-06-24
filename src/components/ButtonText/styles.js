import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 1.6rem;
  background: none;
  color: ${({theme}) => theme.COLORS.PINK};
`;