import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  padding-bottom: 16px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.md};
  padding-bottom: 7px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray7};
  height: 48px;
  padding: 12px 16px;
  font-size: ${({ theme }) => theme.fontSize.md};
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.base};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.gray11};
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.box};
  }

  ${({ $error }) =>
    $error &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.redError};
    `}
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.redError};
  font-size: ${({ theme }) => theme.fontSize.sm};
  letter-spacing: 0.75px;
  text-align: end;
  padding-top: 8px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  bottom: 14px;
  right: 16px;
  cursor: pointer;
`;

export const InputArea = styled.div`
  position: relative;
`;
