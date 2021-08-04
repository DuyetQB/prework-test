import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 18px 28px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.md};
  letter-spacing: 0.75px;
  box-sizing: border-box;
  border: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-shadow: ${({ theme }) => theme.boxShadow.grayButton};

  ${({ $width }) =>
    $width &&
    css`
      width: ${$width};
      padding: unset;
    `}

  ${({ $maxWidth }) =>
    $maxWidth &&
    css`
      width: 100%;
      max-width: ${$maxWidth};
      padding: unset;
    `}

  ${({ $size, theme }) =>
    $size === 'sm' &&
    css`
      font-size: ${theme.fontSize.sm};
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      height: 36px;
    `}

    ${({ $size, theme }) =>
    $size === 'base' &&
    css`
      font-size: ${theme.fontSize.base};
      height: 60px;
      width:195px;
    `}

    ${({ $size, theme }) =>
    $size === 'md' &&
    css`
      font-size: ${theme.fontSize.md};
      height: 48px;
    `}

    ${({ $size, theme }) =>
    $size === 'lg' &&
    css`
      font-size: ${theme.fontSize.lg};
      height: 56px;
    `}

    ${({ $size, theme }) =>
    $size === 'xl' &&
    css`
      font-size: ${theme.fontSize.lg};
      height: 60px;
    `}
`;

export const BlueButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};

  &:hover:enabled {
    box-shadow: ${({ theme }) => theme.boxShadow.blueButton};
  }

  &:active:enabled {
    background-color: ${({ theme }) => theme.colors.blueDark};
  }

  &:focus:enabled {
    box-shadow: ${({ theme }) => theme.boxShadow.blueButton};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray8};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;

export const WhiteButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue};

  &:hover:enabled {
    background-color: ${({ theme }) => theme.colors.gray9};
  }

  &:active:enabled {
    box-shadow: ${({ theme }) => theme.boxShadow.grayButton};
    background-color: ${({ theme }) => theme.colors.gray10};
  }

  &:focus:enabled {
    box-shadow: ${({ theme }) => theme.boxShadow.grayButton};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray8};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const SecondaryButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue};

  &:hover:enabled {
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.blue};
  }

  &:active:enabled {
    box-shadow: ${({ theme }) => theme.boxShadow.grayButton};
    background-color: ${({ theme }) => theme.colors.gray9};
    border: 2px solid ${({ theme }) => theme.colors.blue};
  }

  &:focus:enabled {
    box-shadow: ${({ theme }) => theme.boxShadow.grayButton};
    border: 2px solid ${({ theme }) => theme.colors.blue};
    border: 2px solid ${({ theme }) => theme.colors.blue};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    border: 2px solid ${({ theme }) => theme.colors.gray8};
    color: ${({ theme }) => theme.colors.gray8};
  }
`;

export const ShowMoreButton = styled(Button)`
  padding: 0;
  border: 0;
  outline: 0;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  &:hover:enabled {
    color: ${({ theme }) => theme.colors.blue2};
  }

  &:active:enabled {
    color: ${({ theme }) => theme.colors.blueDark};
  }

  &:focus:enabled {
    color: ${({ theme }) => theme.colors.blue4};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.gray8};
  }
`;

export const GrayButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.gray6};
  color: ${({ theme }) => theme.colors.white};

  &:hover:enabled {
    box-shadow: ${({ theme }) => theme.boxShadow.grayButton};
  }

  &:active:enabled {
    background-color: ${({ theme }) => theme.colors.gray7};
  }

  &:focus:enabled {
    box-shadow: ${({ theme }) => theme.boxShadow.grayButton};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray8};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;


export const YellowButton = styled(Button)`
 background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
`;