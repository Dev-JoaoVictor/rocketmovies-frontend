import styled from 'styled-components';

export const Container = styled.span`
  font-size: 1.2rem;
  padding: 8px 1.6rem;
  border-radius: 8px;
  margin-right: 8px;
  color: ${({theme}) => theme.COLORS.WHITE};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
`;