import styled from 'styled-components';

export const Container = styled.input`

  width: 50%;
  height: 5.6rem;
  padding: 0 2.4rem;

  border: none;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
    color:  ${({ theme }) => theme.COLORS.GRAY_300}
  }
`;