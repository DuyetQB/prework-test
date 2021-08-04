import styled, { css } from 'styled-components';
import { Link as LinkBase } from 'react-router-dom';

export const Link = styled(LinkBase)`
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.blue2)};
  font-size: ${({ size, theme }) => theme.fontSize[size] || '14px'};
  line-height: 1.5;

  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `};

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `};

  ${({ isBold, theme }) =>
    isBold &&
    css`
      font-weight: ${theme.fontWeight.bold};
    `}

  ${({ isGray }) =>
    isGray &&
    css`
      color: ${({ theme }) => theme.colors.gray4};
    `}

  ${({ isOneLine }) =>
    isOneLine &&
    css`
      white-space: nowrap;
    `}

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `};
`;
