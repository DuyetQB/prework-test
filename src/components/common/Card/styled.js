import styled from 'styled-components';

export const WrapCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.boxShadow.grayBox};
  padding: 20px;
  margin: 30px 0px 0px 0px;
  transition: all 0.4s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.blueButton};
  }
`;

export const CardIcon = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;
