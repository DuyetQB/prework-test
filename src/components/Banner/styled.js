import styled from 'styled-components';
import {  Text  as TextDetail } from 'components/common/Typo';

export const WrapBanner = styled.div``;
export const BgHouse = styled.div`
  padding: 10px 10px 80px 10px;
`;
export const WrapText = styled.div`
  padding: 100px 50px 10px 60px;
`;
export const WrapForm = styled.div`
  padding: 40px 60px;
`;
export const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight:${({ theme }) => theme.fontWeight.bold}
`;

export const Text = styled(TextDetail)`
  color: ${({ theme})=> theme.colors.gray1}
`;