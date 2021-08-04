import styled, { css } from 'styled-components';

export const UserMenuWrapper = styled.div`
  position: absolute;
  top: 58px;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px rgba(48, 48, 48, 0.25);
  width: 224px;

  ${({ $show }) =>
    !$show &&
    css`
      display: none;
    `}
`;

export const MenuItem = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray11};
  font-size: ${({ theme }) => theme.fontSize.base};
  min-height: 55px;
  display: flex;
  align-items: center;
  padding: 0 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray9};
  }
`;
