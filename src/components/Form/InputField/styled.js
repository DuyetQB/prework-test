import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  padding-bottom: 16px;
  position: relative;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.md};
  padding-bottom: 7px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  height: 60px;
  padding: 12px 46px;
  font-size: ${({ theme }) => theme.fontSize.md};
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  position: relative;
  box-shadow: ${({ theme }) => theme.boxShadow.boxWrapper};

  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.blueButton};
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
export const IconWrap = styled.div`
  display: flex;
  text-align: center;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 60px;
  z-index: 20;

  & .wrap-icon {
    align-items: center;
    justify-content: center;
    width: 48px;
    display: flex;
    height: 100%;
  }
`;
export const Icon = styled.img``;

export const TextArea = styled(Input).attrs({ as: 'textarea' })`
  height: ${({ $height }) => $height || '254px'};
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.redError};
  font-size: ${({ theme }) => theme.fontSize.sm};
  letter-spacing: 0.75px;
  text-align: end;
  padding-top: 8px;
`;
