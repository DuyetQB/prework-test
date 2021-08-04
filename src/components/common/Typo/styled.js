import styled, { css } from 'styled-components';

export const Heading2 = styled.h2`
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.black)};
  font-size: ${({ size, theme }) => theme.fontSize[size] || '40px'};
  font-weight: ${({ weight, theme }) => theme.fontWeight[weight] || 700};
  line-height: 1.5;
  letter-spacing: 1px;

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

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `};
`;

export const Heading3 = styled.h3`
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.darkGrey)};
  font-size: ${({ size, theme }) => theme.fontSize[size] || theme.fontSize['xxl']};
  font-weight: ${({ weight, theme }) => theme.fontWeight[weight] || theme.fontWeight.bold};
  line-height: 1.55;
  letter-spacing: 1px;

  ${({ isBold, theme }) =>
    css`
      font-weight: ${isBold ? theme.fontWeight.extraBold : theme.fontWeight.bold};
    `}

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

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `};

  ${({ isBlue1 }) =>
    isBlue1 &&
    css`
      color: ${({ theme }) => theme.colors.blue};
    `}

    ${({ isBlue2 }) =>
    isBlue2 &&
    css`
      color: ${({ theme }) => theme.colors.blue2};
    `}
    
    ${({ isWhite }) =>
    isWhite &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;

export const Heading4 = styled.h4`
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.gray0)};
  font-size: ${({ size, theme }) => theme.fontSize[size] || '16px'};
  font-weight: ${({ weight, theme }) => theme.fontWeight[weight] || 600};
  line-height: 1.5;
  letter-spacing: 1px;

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

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `};

    &:hover{
      color: ${({ theme }) => theme.colors.blue2};
    }
`;


export const Text = styled.p`
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.black)};
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

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
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

    ${({ isBlue1 }) =>
    isBlue1 &&
    css`
      color: ${({ theme }) => theme.colors.blue};
    `}
    


  ${({ isGray1}) =>
    isGray1 &&
    css`
      color: ${({ theme }) => theme.colors.gray1};
    `}

  ${({ isWhite }) =>
    isWhite &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
  
  ${({ isError }) =>
    isError &&
    css`
      color: ${({ theme }) => theme.colors.redError};
    `}

  ${({ isOneLine }) =>
    isOneLine &&
    css`
      white-space: nowrap;
    `}
    ${({ isOverFlow}) =>
    isOverFlow &&
    css`
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 6;
    display: -webkit-box;
    -webkit-box-orient: vertical;

    `}

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `};
`;
