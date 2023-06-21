import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.GRAY_300};
  margin-bottom: 8px;
  border-radius: 1rem;

  svg {
      margin-left: 1.6rem;
    }

  > input {
    height: 5.6rem;
    width: 100%;
    
    padding: 1.9rem 2.4rem;
    color:  ${({theme}) => theme.COLORS.WHITE};
    background-color: transparent;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }
`;
